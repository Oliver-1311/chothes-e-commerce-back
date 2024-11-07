const isAdminPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")

async function uploadProductController(req, res) {
    try {
        const sessionUserId = req.userId
        
        if(!isAdminPermission(sessionUserId)){
            throw new Error("Permission denied")
        }
        console.log(req.body);
        
        const updloadProduct = new productModel(req.body)
        const saveProduct = await updloadProduct.save()

        res.status(201).json({
            message: "Product upload succesfully",
            data: saveProduct,
            success: true,
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