const express=require('express')
const router =express.Router()
const cartController = require('../controller/cartController')
const {auth,adminAuth}=require('../middleware/authmiddleware')


router.post('/addtocart',auth,cartController.addToCart)
router.get('/getcart',auth,cartController.getCart)
router.delete('/removefromcart/:id',auth,cartController.removeFromCart)

module.exports=router;