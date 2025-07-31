const express=require('express')
const router =express.Router()
const orderController = require('../controller/orderController')
const {auth,adminAuth}=require('../middleware/authmiddleware')


router.post('/placeOrder',auth,orderController.placeOrder)
router.get('getAllOrders',auth,orderController.getAllOrders)


module.exports=router;