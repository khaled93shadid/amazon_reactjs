const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true ,unique:true},
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
    quantity: { type: Number, required: true, default: 1 ,min: [1, 'Quantity must be at least 1'],max: [999, 'Quantity cannot exceed 999']}
  }],
   
  status: {type: String , enum: ['active', 'abandoned', 'converted'], default: 'active'}


}, { timestamps: true })





module.exports = mongoose.model('cart', cartSchema)