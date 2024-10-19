const userModel = require("../models/userModel")

async function userDetailsController(req, res) {
    try {
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "Detalles de usuario"
        })
        
    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        })
    }
}

module.exports = userDetailsController