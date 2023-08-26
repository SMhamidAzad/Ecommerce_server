const Shop = require("../models/shop.model");


module.exports.createShop = async (req, res) => {
    try {
        const result = new Shop(req.body);
        const newShop = await result.save();
        res.json({
            success: true,
            result: newShop
        })
    } catch (error) {
        res.json({
            success: false,
            result: error
        })
    }
}
// module.exports.getShop = async (req, res) => {
//     try {
//         const targetLongitude = 91.7759335;
//         const targetLatitude = 22.3660854;
//         const maxDistance = 5000; // Maximum distance in meters

//         const result = await Store.find({
//             location: {
//                 $near: {
//                     $geometry: {
//                         type: "Point",
//                         coordinates: [targetLongitude, targetLatitude]
//                     },
//                     // $maxDistance: maxDistance
//                 }
//             }
//         })
//         res.json({
//             success: true,
//             result: result
//         })
//     } catch (error) {
//         res.json({
//             message: "failed"
//         })
//     }
// }

module.exports.getShop = async (req, res) => {
    try {
        const targetLongitude = 91.7759335;
        const targetLatitude = 22.3660854;
        const maxDistance = 5000;
        const result = await Shop.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [targetLongitude, targetLatitude]
                    },
                    $maxDistance: maxDistance
                }
            }
        });

        res.json({
            success: true,
            result: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred",
            error: error.message
        });
    }
};

