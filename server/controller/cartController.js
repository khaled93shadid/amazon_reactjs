const Cart = require('../model/cart')
const Product = require('../model/product')


exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId) {
    return res.status(400).json({ success: false, message: 'Product ID  is required' });
  }
  try {
    console.log(`productID  khs:${productId}`)
    const existingProduct = await Product.findById(productId)
    if (!existingProduct) { return res.status(404).json({ message: 'product not found ' }) }
    
    console.log(`existing product :${existingProduct}`)


    let cart = await Cart.findOne({ user: req.user })
    if (!cart) { cart = new Cart({ user: req.user, items: [] }) }
    //##############

    const existingItem = cart.items.find(item => item.product.toString() === productId.toString())

    if (existingItem) { existingItem.quantity += quantity }
    else { cart.items.push({ product: productId, quantity }) }


    await cart.save()

    res.status(200).json({ success: true, message: 'Item added to cart successfully ', cart: cart })
  }
  catch (error) { return res.status(500).json({ success: false, message: 'server error', error: error.message }) }
}



exports.getCart = async (req, res) => {

  const cart = await Cart.findOne({ user: req.user }).populate('items.product')
  res.status(200).json(cart || { message: 'cart is empty' })


}



exports.removeFromCart = async (req, res) => {
  const { productId } = req.params
  try {
    const cart = await Cart.findOne({ user: req.user });
    if (!cart) { return res.status(404).json({ message: 'cart not found' }) }
    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    //##########
    await cart.save();
    res.status(200).json({ message: 'item removed from cart successfully', cart })
  }
  catch (error) { return res.status(500).json({ message: 'server error', error: error.message }) }
}


exports.removeFromCart2 = async (req, res) => {
  const { productId } = req.params
  if (!productId) { return res.status(400).json({ success: false, message: 'product ID is required' }); }

  try {
    const cart = await Cart.findOne({ user: req.user });
    if (!cart) { return res.status(404).json({ success: false, message: 'Cart Not Found' }) }
    //
    const item = cart.items.find(item => item.product.toString() === productId.toString())
    if (!item) { return res.status(404).json({ success: false, message: 'item not found' }) }

    if (item.quantity > 1) { item.quantity -= 1 }
    else { cart.items = cart.items.filter(item => item.product.toString() !== productId.toString()) }

    //
    await cart.save();
    res.status(200).json({ success: true, message: 'item removed from cart successfully', cart: cart })

  }//try

  catch (error) { return res.status(500).json({ message: 'server error', error: error.message, success: false }) }

}



exports.cartQuantity = async (req, res) => {

  try {
    const cart = await Cart.findOne({ user: req.user }).populate('items.product')
    if (!cart) { return res.status(404).json({ message: 'cart not found' }) }

    const Quantity = await cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

    res.status(200).json({ quantity: Quantity, success: true, message: 'quantity is up to date' })
  }

  catch (error) { return res.status(500).json({ success: false, message: 'server error', error: error.message }) }


}


exports.cartMoney = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user }).populate('items.product')
    if (!cart) { return res.status(404).json({ message: 'cart not found' }) }
    //##########################

    const total = await cart?.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0) || 0;
    const totalCents = (Math.round(total))
    const estimatedTax = ((Math.round(total)) / 10)
    const delivery = 0
    const totalMoney = totalCents + estimatedTax
    const money = { totalCents, estimatedTax, totalMoney, delivery }
    res.status(200).json({ money: money, message: ' totalCents, estimatedTax, totalMoney, delivery in object money' })
  }
  catch (error) { return res.status(500).json({ success: false, message: 'server error', error: error.message }) }


}
