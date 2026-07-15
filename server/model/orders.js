const mongoose=require('mongoose');


const orderSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
    items:[{
          product:{type:mongoose.Schema.Types.ObjectId,ref:'product',required:true},
          quantity:{type:Number,required:true,default:1} }],//items end
    total:{type:Number},
    totalCents:{type:Number},
    estimatedTax:{type:Number},
    status:{type:String,enum:['pending','completed','cancelled'],default:'pending'},
    

},{timestamps:true})




module.exports=mongoose.model('order',orderSchema)