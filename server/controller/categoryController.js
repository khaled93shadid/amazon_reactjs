const Category = require('../model/category')


exports.getAllCategory = async (req, res) => {

  try {
    const category1 = await Category.find();
    res.status(200).json({ success: true, category: category1 })

  }
  catch (error) { res.status(500).json({ success: false, message: error.message }) }

}


exports.getCategorybyiD = async (req, res) => {
  const { id } = req.params;
  if (!id) { return res.status(400).json({ success: false, message: 'Category ID is required' }) }
  try {
    const category1 = await Category.findById(id)
    if (!category1) { return res.status(404).json({ success: false, message: 'Category not found' }) }
    res.status(200).json({success:true,name:category1.name})
  }
  catch (error) { res.status(500).json({success:false , message: error.message }) }

}

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {return res.status(400).json({ success: false, message: 'Category name is required' })
}
  try {
    const existingCategory = await Category.findOne({ name: name.trim() }).exec();
    if (existingCategory) { return res.status(409).json({success:false ,message: 'category already exist' }) }


    const savedCategory = new Category({ name });
    await savedCategory.save();
    res.status(201).json({success:true,message:'new category added successfully',category:savedCategory})

  }
  catch (error) {return res.status(500).json({success:false , message: error.message }) }
}


exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!id || !name) {return res.status(400).json({success: false,message: 'Category ID and name are required' })}
  
  try {
    const existingCategory = await Category.findOne({name:name.trim})
    if(existingCategory){return res.status(404).json({success: false,message: 'Category with this name already exists'})} 


    const category1 = await Category.findByIdAndUpdate(id, { name: name.trim() },{new:true})
    if (!category1) {return res.status(404).json({success: false, message: 'Category not found' })}

    res.status(200).json({success:true,message:'category updated successfully',category:category1})



  }
  catch (error) {return res.status(500).json({success:false ,message: error.message }) }
}


exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!id) {return res.status(400).json({success: false,message: 'Category ID is required' })}
  try {
    const category1 = await Category.findByIdAndDelete(id)
    if (!category1) {return res.status(404).json({success: false,message: 'Category not found' })}
    res.status(200).json({success:true ,message: 'category deleted successfully' })

  }
  catch (error) {return res.status(500).json({ success:false,message: error.message }) }


}


exports.getCategorybyname = async (req, res) => {
  const { name } = req.body;
   if (!name) {return res.status(400).json({success: false,message: 'Category Name is required' })}
  try {
    const category1 = await Category.findOne({ name:name.trim() })
     if (!category1) {return res.status(404).json({success: false,message: 'Category not found' })}
    return (res.status(200).json({success:true,message:'Category found',category:category1}))
  }

  catch (error) { return res.status(500).json({success:false ,message: error.message }) };

}
