const express = require('express');
const addressController = require('../controller/addressController')
const {auth} = require('../middleware/authmiddleware')
const router = express.Router();


router.post('/createAddress',auth,addressController.createAddress)
router.get('/getAllAddress',auth,addressController.getAllAddress)
router.delete('/deleteAddress/:id',auth,addressController.deleteAddress)

module.exports=router;