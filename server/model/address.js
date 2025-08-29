const mongoose = require ('mongoose')

const addressSchema =new mongoose.Schema({
  country:{type:String,required:true,default:'jordan'},
  fullname:{type:String,required:true},
  phone:{type:String,required:true},
  street:{type:String,required:true},
  apartment:{type:String,required:true},
  city:{type:String,required:true},
  state:{type:String,required:true},
  area:{type:String,required:true},
  postalCode:{type:String,required:true},

})

module.exports=mongoose.model('address',addressSchema)