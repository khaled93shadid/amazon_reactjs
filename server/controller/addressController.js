const Address = require('../model/address')


exports.createAddress = async (req, res) => {

  const { country, phone, street, apartment, city, state, area, postalCode } = req.body;
  try {
    const address = new Address({
      country: country || 'jordan', phone, street, apartment,
      city: city || 'Amman', state, area, postalCode: postalCode || '556655'
    })

    await address.save()
    res.status(201).json({ success: true, message: 'address added successfully', address: address })
  }

  catch (error) { return res.status(500).json({ success: false, message: error.message }) }


}

exports.deleteAddress = async (req, res) => {
  const { id } = req.params
  if (!id) { return res.status(400).json({ success: false, message: 'Address ID is required' }) }
  try {
    const address = await Address.findByIdAndDelete(id)
    if (!address) { return res.status(404).json({ success: false, message: 'Address Not Found ' }) }
    res.status(200).json({ success: true, message: 'Address deleted successfully' })
  }
  catch (error) { return res.status(500).json({ success: false, message: error.message }) }

}


exports.getAllAddress = async (req, res) => {

  try {
    const address = await Address.find().exec();
    if (!address) { return res.status(404).json({ success: false, message: 'Address not found' }) }
    res.status(200).json({ success: true, message: 'address found', address: address })

  }
  catch (error) { return res.status(500).json({ success: false, message: error.message }) }

}


exports.getUserAddress = async (req, res) => {
  const { addressId } = req.params
  if (!addressId) { return res.status(400).json({ success: false, message: 'Address ID is required' }) }
  try {
    const address = await Address.findOne({_id:addressId});
    if (!addresses) {return res.status(404).json({success: false,message: 'Address not found'});}

    res.status(200).json({ success: true, address: address });
  }

  catch (error) {
    console.error('Error fetching address:', error); res.status(500).json({success: false,message: 'Internal server error'});}
};