const Orders =require('../model/orders')
const Cart =require('../model/cart')
const Product =require('../model/product')
//const product = require('../model/product')

exports.placeOrder=async(req,res)=>{

const cart=await Cart.findOne({user:req.user}).populate('items.product')
if(!cart){return res.status(400).json({message:'cart not found'})}
//#######
const total =Cart.items.reduce((sum,item)=>sum+item.Product.price*item.quantity,0)
//#######
const order = new Orders({
user:req.user,
items:cart.items.map(item=>({product:item.product._id,quantity:item.quantity})),
total,
status:'completed'

})
//#############
await order.save();
//#############(clear the cart after placing order)
await Cart.findOneAndDelete({user:req.user})
res.status(201).json({message:'order placed successfully'})

}


exports.getAllOrders=async(req,res)=>{
const orders = await Orders.find({user:req.user}).populate('items.product');
res.status(200).json(orders)

}