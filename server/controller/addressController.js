const Address = require('../model/address')


exports.createAddress = async (req, res) => {

  const { country, fullname, phone, street, apartment, city, state, area, postalCode } = req.body;
  try{
    const address = new Address ({country:'jordan', fullname, phone, street, apartment, city, state, area, postalCode })
    await address.save()
    res.status(200).json('address added successfully')
  }
  catch(error){res.status(500).json({message:error.message})}


}

exports.deleteAddress = async (req,res)=>{
  const {id} = req.params
  try{
    const address = await Address.findByIdAndDelete(id)
    res.status(200).json({message:'Address deleted successfully'})
  }
  catch(error){res.status(500).json({message:error.message})}

}


exports.getAllAddress = async(req,res)=>{

try{
const address=await Address.find().exec();
res.status(200).json(address)

}
catch(error){res.status(500).json({message:error.message})}

}