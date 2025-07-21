const User = require('../model/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();


exports.auth =(req,res,next)=>{
const token = req.header('authorization');
if(!token){res.status(401).json({message:"No token access denied"})}

try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    console.log("decoded token",decoded)
    req.user=decoded.id 
    req.role=decoded.role
    next();
}

catch(error){res.status(500).json({message:'invalid token catch error'})}

};



exports.adminAuth =(req,res,next)=>{
const token = req.header('authorization');
if(!token){res.status(401).json({message:"No token access denied"})}

try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    console.log("decoded token",decoded)
    req.user=decoded.id 
    req.role=decoded.role
    if(req.role !=='admin'){return res.status(403).json({message:'you are not admin you not allowed to do this operation'})}
    next();
}

catch(error){res.status(500).json({message:'invalid token catch error'})}

};

