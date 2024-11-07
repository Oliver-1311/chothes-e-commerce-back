const userModel = require("../../models/userModel")

async function allUsers(req, res) {
    try {
        const users = await userModel.find()
        res.json({
            messaje: "All user",
            data: users,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = allUsers