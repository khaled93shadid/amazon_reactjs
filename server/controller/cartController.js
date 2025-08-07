const Cart = require('../model/cart')


exports.addToCart=async(req,res)=>{
  const {productId,quantity}=req.body;
try{

let cart = await Cart.findOne({user:req.user})
if(!cart){cart=new Cart({user:req.user,items:[]})}
//##############
const existedItems =await cart.items.find(item=>item.product.toString()===productId)

if(existedItems){existedItems.quantity+=quantity}
else{cart.items.push({product:productId,quantity})}

//##############
await cart.save()
res.status(200).json({message:'item added to cart successfuly ',cart})
}
catch(error){res.status(500).json({message:'server error',error:error.message})}
}



exports.getCart = async(req,res)=>{

  const cart = await Cart.findOne({user:req.user}).populate('items.product')
  res.status(200).json(cart||{message:'cart is empty'})


}



exports.removeFromCart=async (req,res)=>{
const {productId}=req.params
try{
const cart= await Cart.findOne({user:req.user});
if(!cart){return res.status(404).json({message:'cart not found'})}
cart.items=cart.items.filter(item=>item.product.toString()!==productId);
//##########
await cart.save();
res.status(200).json({message:'item removed from cart successfully',cart})
}
catch(error){return res.status(500).json({message:'server error',error:error.message})}
}


exports.removeFromCart2=async (req,res)=>{
const {productId}=req.params
try{
const cart= await Cart.findOne({user:req.user});
if(!cart){return res.status(404).json({message:'cart not found'})}
//##########
const item= await cart.items.find(item=>item.product.toString()===productId)
if(!item){return res.status(404).json({message:'item not found'})}

if(item.quantity>1){item.quantity-=1}
else{cart.items=cart.items.filter(item=>item.product.toString()!==productId)}

//##########
await cart.save();
res.status(200).json({message:'item removed from cart successfully',cart})
}
catch(error){return res.status(500).json({message:'server error',error:error.message})}
}


exports.cartQuantity=async (req,res)=>{
try{
const cart= await Cart.findOne({user:req.user}).populate('items.product')
if(!cart){return res.status(404).json({message:'cart not found'})}
//##########################
const Quantity=await cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
const total =cart?.items.reduce((sum,item)=>sum+item.product.price*item.quantity,0)||0;
const money={Quantity,total}
res.status(200).json(Quantity)
}
catch(error){return res.status(500).json({message:'server error',error:error.message})}


}


exports.cartMoney=async (req,res)=>{
try{
const cart= await Cart.findOne({user:req.user}).populate('items.product')
if(!cart){return res.status(404).json({message:'cart not found'})}
//##########################

const total =await cart?.items.reduce((sum,item)=>sum+item.product.price*item.quantity,0)||0;
const totalCents=(Math.round(total))
const estimatedTax=((Math.round(total))/10)
const delivery=0
const totalTax=totalCents+estimatedTax
const money={total,totalCents,estimatedTax,totalTax,delivery}
res.status(200).json(money)
}
catch(error){return res.status(500).json({message:'server error',error:error.message})}


}
