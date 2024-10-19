const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')

async function userSignInController(req, res) {
    try {
        const {email, password} = req.body
        if(!email){
            throw new Error("Por favor ingrese email");
        }
        if(!password){
            throw new Error("Por favor ingrese password");
        }
        const user = await userModel.findOne({email})
        if (!user){
            throw new Error("Usuario no encontrado");
        }

        const checkPassword = await bcrypt.compare(password, user.password)
        if(checkPassword){
            const tokenData ={
                _id: user.id,
                email: user.email,
            }
            const token = await jwt.sign(
              tokenData,
              process.env.TOKEN_SECRET_KEY,
              { expiresIn: "8h" }
            );

            const tokenOptions = {
                httpOnly: true,
                secure: true
            }
            res.cookie("token", token, tokenOptions).json({
                message: "Inicio de sesión exitosa",
                data: token,
                success: true,
                error: false
            })
        }else{
            throw new Error("La contraseña es incorrecta"); 
        }
        
    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = userSignInController