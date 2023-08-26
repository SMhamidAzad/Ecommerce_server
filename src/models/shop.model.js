const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
    store_name: {
        type: String,
        default: null
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, { timestamps: true })

StoreSchema.index({ location: '2dsphere' });

module.exports = mongoose.model("Store", StoreSchema)