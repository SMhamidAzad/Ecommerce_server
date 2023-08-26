const Item = require("../models/item.modal");

module.exports.createAnItem = async (req, res,next) => {
    try {
        const newitem = new Item(req.body);
        const item = await newitem.save()
        res.status(200).json({
            message: "success",
            result: item
        })
    } catch (error) {
       next(error)
    }
}

module.exports.getItem = async (req,res,next)=>{
    const result = await Item.find().populate('userInfo');
    res.json(result);
}
