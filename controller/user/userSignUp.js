const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs')

async function userSignUpController(req, res) {
    try {
        const {email, password, name} = req.body  
        if(!email){
            throw new Error("Por favor ingrese email");
        }
        if(!password){
            throw new Error("Por favor ingrese password");
        }
        if(!name){
            throw new Error("Por favor ingrese name");
        }
        
        const user = await userModel.findOne({email})
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hashSync(password, salt);
        if(user){
            throw new Error(`Ya existe el usuario con el email: ${email}`);
            
        }

        if(!hashPassword){
            throw new Error("Algo salió mal");
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        }
        const userData = new userModel(payload)
        const saveUser = userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "El usuario se creó exitosamente"
        })
    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = userSignUpController