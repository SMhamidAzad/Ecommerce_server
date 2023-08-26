const Product = require("../models/product.Modal");

module.exports.getAllProduct = async(req,res,next)=>{
    try {
        const result = await Product.findOne();
        console.log(result)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}
module.exports.CreateAProduct = async(req,res,next)=>{
    try {
        const newProduct = new Product(req.body);
        const Product = await newProduct.save()
        console.log(Product)
        res.status(200).json({
            message: "success",
            result: Product
        })
    } catch (error) {
        next(error)
    }
}