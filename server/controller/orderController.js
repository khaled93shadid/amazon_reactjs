const Orders =require('../model/orders')
const Cart =require('../model/cart')
const Product =require('../model/product')
//const orders = require('../model/orders')


exports.placeOrder=async(req,res)=>{
const cart=await Cart.findOne({user:req.user}).populate('items.product')
if(!cart){return res.status(400).json({message:'cart not found'})}

try{
//#######
const total =cart.items.reduce((sum,item)=>sum+item.product.price*item.quantity,0)
const totalCents=total*0.1
const estimatedTax=total/100
//#######
const order = new Orders({
user:req.user,
items:cart.items.map(item=>({product:item.product._id,quantity:item.quantity})),
total:Math.round(total),
totalCents,
estimatedTax,
status:'completed'

})
//#############
await order.save();
//#############(clear the cart after placing order)
//await Cart.findOneAndDelete({user:req.user})

 await Cart.updateOne({user:req.user},{ $set: { items: [] } });
  
res.status(200).json(order)

}
catch(error){res.status(500).json({message:error.message})}

}


exports.getAllOrders=async(req,res)=>{
const orders = await Orders.find({user:req.user}).populate('items.product');
res.json(orders)

}