const User = require('../model/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
//const user = require('../model/user.js');



exports.getAllUser = async(req,res)=>{

try{
const users=await User.find().exec();
res.status(200).json(users)

}
catch(error){res.status(500).json({message:error.message})}

}








exports.getprofile = async(req,res)=>{

try{
const user1= await User.findById(req.user)
res.json(user1)

}
catch(error){res.status(500).json({message:error.message})}

}








exports.register = async(req,res)=>{
try{
const{username,email,password,fullname,address,phone}=req.body
if (!username || !email || !password || !fullname) {return res.status(400).json({ message: 'Missing required fields' });}

const image=req.file?req.file.path:null;

const existingUser= await User.findOne({email:email}).exec();
if (existingUser){return res.status(409).json({message:'Email already registered'})}

const hashedpass = await bcrypt.hash(password,10)

const newUser= new User({
    username,
    email,
    password:hashedpass,
    image,
    fullname,
    address,
    phone ,
})

await newUser.save();

const token= jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:'1d'})
res.status(201).json({token,user:newUser})

}
catch(error){res.status(500).json({message:error.message})}


}










exports.login = async (req,res)=>{
try{
const {email,password}=req.body;
const userx = await User.findOne({email});
if(!userx){return res.status(400).json({message:'invalid credintails'})}

const ismatch = await bcrypt.compare(password,userx.password)

if(!ismatch){return res.status(400).json({message:'invalid credintails'})}

const token = jwt.sign({id:userx._id,role:userx.role},process.env.JWT_SECRET,{expiresIn:'1d'})
res.json({token,userx});

}
catch(error){res.status(500).json({message:error.message})}

}




exports.changepassword=async(req,res)=>{
const {oldpassword,newpassword}=req.body;
const user = await User.findById(req.user)
try
{
const ismatch = await bcrypt.compare(oldpassword,user.password);
if(!ismatch){res.json({messege:'wrong oldpassword backend'})}
const hashednewpassword= await bcrypt.hash(newpassword,10)
user.password=hashednewpassword;
//await user.save();
res.json({message:"password changed successfully"});



}
catch(error){console.log(error)}




}