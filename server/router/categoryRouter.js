const express = require('express');
const categoryController = require('../controller/categoryController')
const {auth,adminAuth} = require('../middleware/authmiddleware')
const router = express.Router();


router.get('/getAllCategory',auth,categoryController.getAllCategory);
router.get('/getCategoryById/:id',auth,categoryController.getCategorybyiD);
router.post('/createCategory',auth,categoryController.createCategory);
router.put('/updateCategory/:id',adminAuth,categoryController.updateCategory);
router.delete('/deleteCategory/:id',adminAuth,categoryController.deleteCategory);

module.exports=router;