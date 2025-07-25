const mongoose =require('mongoose')

const cartSchema= new mongoose.Schema({

  user:{type:mongoose.Schema.Types.ObjectId,ref:'nodedb',required:true},
  items:[{
product:{type:mongoose.Schema.Types.ObjectId,ref:'product',required:true},
quantity:{type:Number,required:true,default:1}
  }]//items end


},{timestamps:true})





module.exports=mongoose.model('cart',cartSchema)