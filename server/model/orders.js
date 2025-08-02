const mongoose=require('mongoose');


const orderSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'nodedb',required:true},
    items:[{
          product:{type:mongoose.Schema.Types.ObjectId,ref:'product',required:true},
          quantity:{type:Number,required:true,default:1} }],//items end
    total:{type:Number,required:true},
    totalCents:{type:Number,required:true},
    estimatedTax:{type:Number,required:true},
    status:{type:String,enum:['pending','completed','cancelled'],default:'pending'},
    

},{timestamp:true})




module.exports=mongoose.model('order2',orderSchema)