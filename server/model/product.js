const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

     name:{type:String,required:true},
     price:{type:String,required:true},
     dis:{type:String,required:true},
     image:{type:String},
     stars:{type:String},
     quantity:{type:String},
     category:{type:mongoose.Schema.Types.ObjectId,ref:'category'}
     
})

module.exports= mongoose.model('product',productSchema);
