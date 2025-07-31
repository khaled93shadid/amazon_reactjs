const express=require('express')
const router =express.Router()
const cartController = require('../controller/cartController')
const {auth,adminAuth}=require('../middleware/authmiddleware')


router.post('/addtocart',auth,cartController.addToCart)
router.get('/getcart',auth,cartController.getCart)
router.get('/cartQuantity',auth,cartController.cartQuantity)
router.get('/cartMoney',auth,cartController.cartMoney)
router.delete('/removefromcart/:productId',auth,cartController.removeFromCart)
router.delete('/removefromcart2/:productId',auth,cartController.removeFromCart2)

module.exports=router;