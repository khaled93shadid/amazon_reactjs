const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
     name:{type:String,required:true},
     price:{type:Number,required:true},
     dis:{type:String},
     image:{type:String},
     stars:{type:String},
     quantity:{type:Number},
     //category:{type:mongoose.Schema.Types.ObjectId,ref:'category'}
     
}, 

{timestamps: true }

)

module.exports= mongoose.model('product',productSchema);
