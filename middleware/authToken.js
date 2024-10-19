const jwt = require("jsonwebtoken")

async function authToken(req, res) {
    try {
        const token = req.cookies?.token 

        if(!token){
            return res.status(200).json({
                message: "Por favor inicie sesión...!", 
                error: true,
                succes: false
            })
        }
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            if(err){
                console.log("error auth", err)
            }
            req.userId = decoded?._id

            next()
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            data: [],
            error: true,
            succes: false
        })
    }
}
module.exports = authToken