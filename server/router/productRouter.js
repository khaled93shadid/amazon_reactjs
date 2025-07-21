const express = require('express')
const {getAllproducts,createProduct,updateproduct,deleteProduct,getproductbyname,getProductById} =require('../controller/productController')
const {auth,adminAuth} = require('../middleware/authmiddleware.js')
const router = express.Router();
const multer = require('multer')

const storage=multer.diskStorage({

  destination:'uploads/',
  filename:(req,file,cb)=>{cb(null,`${Date.now()}-${file.originalname}`)

  }
})//end object 

const upload = multer({storage});

router.get('/getAllProducts',auth,getAllproducts)
router.get('/getproductbyname',auth, getproductbyname)
router.get('/getProductById',auth, getProductById)
router.post('/createProduct', adminAuth,createProduct)//upload.single('image'),
router.put('/updateproduct/:id',adminAuth,updateproduct)
router.delete('/deleteProduct/:id',adminAuth,deleteProduct)


module.exports=router;

