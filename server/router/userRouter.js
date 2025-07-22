const express = require('express')
const usercontroller = require('../controller/usercontroller.js')
const {auth} = require('../middleware/authmiddleware.js')
const router = express.Router()
const multer = require('multer')

const storage=multer.diskStorage({

  destination:'uploads/',
  filename:(req,file,cb)=>{cb(null,`${Date.now()}-${file.originalname}`)

  }
})//end object 

const upload = multer({storage});

router.get("/users",usercontroller.getAllUser)
router.get("/getprofile",auth,usercontroller.getprofile)
router.post("/register",usercontroller.register)
router.post("/login",usercontroller.login)
router.post("/changepassword",auth,usercontroller.changepassword)
router.put("/updateUser",auth,usercontroller.updateUser)

module.exports=router;