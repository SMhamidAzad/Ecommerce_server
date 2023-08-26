const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    product_id: {
        type: String,
        default: null
    },
    product_title: {
        type: String,
        default: null
    },
    price: {
        type: String,
        default: null
    },
    quantity: {
        type: String,
        default: null
    },
    userInfo: {
         type: mongoose.Schema.Types.ObjectId, ref: 'Users' 
    }
}, { timestamps: true })

module.exports = mongoose.model("Items", itemSchema)