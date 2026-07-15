const express = require('express')
const {getAllproducts,createProduct,updateproduct,deleteProduct,getproductbyname,getProductById} =require('../controller/productController')
const {auth,adminAuth} = require('../middleware/authmiddleware.js')
const router = express.Router();


router.get('/getAllProducts',auth,getAllproducts)
router.get('/getproductbyname',auth, getproductbyname)
router.get('/getProductById',auth, getProductById)
router.post('/createProduct', adminAuth,createProduct)
router.put('/updateproduct/:id',adminAuth,updateproduct)
router.delete('/deleteProduct/:id',adminAuth,deleteProduct)


module.exports=router;

