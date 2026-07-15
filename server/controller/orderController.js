const Orders = require('../model/orders')
const Cart = require('../model/cart')
const Product = require('../model/product')



exports.placeOrder = async (req, res) => {

  try {
    const cart = await Cart.findOne({ user: req.user }).populate('items.product')
    if (!cart) { return res.status(404).json({ message: 'cart not found' }) }
    //
    const total = cart?.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    const totalCents = Math.round(total * 100)
    const estimatedTax = total * 0.1
    //
    const order = new Orders({
      user: req.user,
      items: cart.items.map(item => ({ product: item.product._id, quantity: item.quantity })),
      total: Math.round(total),
      totalCents,
      estimatedTax,
      status: 'completed'

    })
    await order.save();
    //(clear the cart after placing order)
    //await Cart.findOneAndDelete({user:req.user})
    await Cart.updateOne({ user: req.user }, { $set: { items: [] } });

    res.status(200).json({ order: order, message: 'order is ready to use' })

  }
  catch (error) { res.status(500).json({ message: error.message }) }

}


exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find({ user: req.user }).populate('items.product');
    if (!orders) { return res.status(404).json({ message: 'there is no orders' }) }

    res.status(200).json({ success: true, orders: orders, message: 'orders ready to use' })

  }

  catch (error) { return res.status(500).json({ success: false, message: error.message }) }

}