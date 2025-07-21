const Category = require('../model/category')


exports.getAllCategory =async(req,res)=>{

try{
const category1= await Category.find();
res.status(200).json(category1)

}
catch(error){res.status(500).json({message:error.message})}

}


exports.getCategorybyiD=async(req,res)=>{
const {id} = req.params;
try{
 const category1= await Category.findById({id:id})
  res.status(200).json(category1)
}
catch(error){res.status(500).json({message:error.message})}

}

exports.createCategory= async (req,res)=>{
const {name}=req.body;
try{
  const existingCategory= await Category.findOne({name:name}).exec();
   if (existingCategory){return res.status(409).json({message:'category already exist'})}

 
 const savedCategory = new Category({name});
 savedCategory.save();
 res.status(200).json('new category added successfully')

}
catch(error){res.status(500).json({message:error.message})}
}


exports.updateCategory=async(req,res)=>{
  console.log('you are in update category controller')
const {id} = req.params;
const {name}=req.body;
try{
const category1 = await Category.findByIdAndUpdate(id,{name:name})
res.status(200).json(category1)



}
catch(error){res.status(500).json({message:error.message})}
}


exports.deleteCategory=async(req,res)=>{
const {id}=req.params;
try{
const category1= await Category.findByIdAndDelete(id)
 res.status(200).json({message:'category deleted successfully'})

}
catch(error){res.status(500).json({message:error.message})}


}


    exports.getCategorybyname = async(req,res)=>{
    const {name}=req.body;
    try{
        const category1 = await Category.find({name:name})
       return(res.status(200).json(category1))
    }
    
    catch(error){res.status(500).json({message:error.message})};
    
    }
    