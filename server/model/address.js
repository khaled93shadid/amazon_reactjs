const mongoose = require ('mongoose')

const addressSchema =new mongoose.Schema({
  country:{type:String,default:'jordan'},
  phone:{type:String},
  street:{type:String},
  apartment:{type:String},
  city:{type:String},
  state:{type:String},
  area:{type:String},
  postalCode:{type:String},

}, { timestamps: true })

module.exports=mongoose.model('address',addressSchema)