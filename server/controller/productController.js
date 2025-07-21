const Product = require('../model/product');


exports.getAllproducts= async(req,res)=>{
try{
    console.log('you are in getallproduct backend fn')
const product1 = await Product.find()  //.populate('category','name');
res.status(200).json(product1);
}
catch(error){res.status(500).json({message:error.message})}
}




exports.createProduct = async(req,res)=>{
    console.log('you are in create product')
try{
//const image=req.file?req.file.filename:null;//file.path
const{name,price,dis,image,stars,quantity,category}=req.body;



 const existingProduct= await Product.findOne({name:name}).exec();
 if (existingProduct){return res.status(409).json({message:'product already exist'})}



product1={name,price,dis:"amazon",image,stars,quantity:1,category};
savedproduct = new Product(product1);
await savedproduct.save();
res.status(200).json('new product added successfully')
}
catch(error){res.status(500).json({message:error.message})}

}


exports.updateproduct = async(req,res)=>{
    console.log('you are in updateProduct function')
const {id} = req.params
const {name,price,dis,quantity,category}=req.body

try{
const product1 = await Product.findByIdAndUpdate(id,{name,price,dis,quantity,category})
if(!product1){res.status(404).json({message:'product not found'})}
res.status(200).json({message:'product updated successfully',product1})

}

catch(error){res.status(500).json({message:error.message})}
}


exports.deleteProduct = async(req,res)=>{
    const {id} = req.params
    
    try{
    const product1 = await Product.findByIdAndDelete(id)
    if(!product1){res.status(404).json({message:'product no found'})}
    res.status(200).json({message:'product delete successfully'})
    
    }
     catch(error){res.status(500).json({message:error.message})}
    }


    exports.getproductbyname = async(req,res)=>{
    const {name}=req.body;
    try{
        const product1 = await Product.find({name:name})
       return(res.status(200).json(product1))
    }
    
    catch(error){res.status(500).json({message:error.message})};
    
    }
    
    exports.getProductById=async(req,res)=>{
      const {id}=req.params;
      try{
      const  product1= await Product.findById({id:id})
      if(!product1){res.status(404).json({message:'product not found'})}
      res.status(200).json(product)
      }
      catch(error){res.status.json({message:error.message})}

    }