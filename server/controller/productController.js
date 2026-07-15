const Product = require('../model/product');


exports.getAllproducts = async (req, res) => {
    try {
        const product1 = await Product.find()
        res.status(200).json(product1);
    }
    catch (error) { res.status(500).json({ message: error.message }) }
}




exports.createProduct = async (req, res) => {
    const { name, price, dis, image, stars, quantity, category } = req.body;
    if (!name || !price || !dis) { return res.status(400).json({ message: 'Name, price, and discription are required' }); }

    try {



        const existingProduct = await Product.findOne({ name: name }).exec();
        if (existingProduct) { return res.status(409).json({ message: 'product already exist' }) }



        const product1 = { name, price, dis: dis || "amazon", image, stars, quantity: quantity || 1, category };

        const savedproduct = new Product(product1);
        await savedproduct.save();
        res.status(200).json({ message: 'new product added successfully', product: savedproduct })
    }

    catch (error) { res.status(500).json({ message: error.message }) }

}



exports.updateproduct = async (req, res) => {

    const { id } = req.params
    const { name, price, dis, image, stars, quantity, category } = req.body

    if (!id || !name || !price || !dis) { return res.status(400).json({ success: false, message: 'missing fields is required' }) }

    try {
        const product1 = await Product.findByIdAndUpdate(id, { name, price, dis, image, stars, quantity, category }, { new: true })
        if (!product1) { return res.status(404).json({ success: false, message: 'product not found' }) }

        res.status(200).json({ message: 'product updated successfully', product: product1 })

    }

    catch (error) { res.status(500).json({ message: error.message, success: false }) }
}


exports.deleteProduct = async (req, res) => {
    const { id } = req.params
    if (!id) { return res.status(400).json({ success: false, message: 'Product ID is required' }) }

    try {

        const product1 = await Product.findByIdAndDelete(id)
        if (!product1) {return res.status(404).json({success:false ,message: 'product not found' }) }
        res.status(200).json({success: true ,message: 'product deleted successfully' })

    }
    catch (error) { res.status(500).json({ success:false,message: error.message }) }
}


exports.getproductbyname = async (req, res) => {
    const { name } = req.body;
    if (!name) { return res.status(400).json({ success: false, message: 'Product Name is required' }) }
    try {
        const product1 = await Product.find({name:name})

        return res.status(200).json({success:true,product:product1,message:'product is found'})
    }

    catch (error) { res.status(500).json({success:false , message: error.message }) };

}

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    if (!id) { return res.status(400).json({ success: false, message: 'Product ID is required' }) }
    try {
        const product1 = await Product.findById(id)
        if (!product1) {return res.status(404).json({ message: 'product not found' }) }
        res.status(200).json({success:true,product:product1})
    }
    catch (error) { res.status.json({success:false ,message: error.message }) }

}