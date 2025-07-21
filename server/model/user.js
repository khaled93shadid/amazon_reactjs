const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:['user','admin'],default:'user'},
    image:{type:String},
    fullname:{type:String},
    address:{type:String},
    phone:{Type:String},
    
    
},{timestamps:true})

module.exports= mongoose.model('nodedb',userSchema)