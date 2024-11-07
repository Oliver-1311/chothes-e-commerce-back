const isAdminPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")

async function updateProductController(req, res) {
    try {
        const userSessionId = req.userId
        if(!isAdminPermission(userSessionId)){
            throw new Error("Permission denied")
        }

        const {_id, ...resBody} = req.body
        const updateProduct = await productModel.findByIdAndUpdate(_id, resBody)
        res.json({
            message: "Product Updated",
            data: updateProduct,
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

module.exports = updateProductController