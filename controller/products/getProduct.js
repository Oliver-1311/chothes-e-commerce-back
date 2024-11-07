const productModel = require("../../models/productModel")

async function getProductController(req,res) {
    try {
        const products = await productModel.find().sort({ createdAt: -1})
        res.json({
            message: "All products",
            data: products,
            succes: true,
            error: false
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = getProductController