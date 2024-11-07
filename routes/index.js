const express = require('express')

const router = express.Router()
const userSignUpController = require('../controller/user/userSignUp')
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const uploadProductController = require('../controller/products/uploadProduct')
const updateUser = require('../controller/user/updateUser')
const getProductController = require('../controller/products/getProduct')

router.post("/signup", userSignUpController)
router.post("/signin", userSignInController)
router.get("/user-details", authToken,userDetailsController)
router.get("/logout", userLogout)

//admin panel
router.get("/all-user", authToken, allUsers)
router.post("/update-user",authToken, updateUser)

//product 
router.post("/upload-product",authToken,uploadProductController)
router.get("/get-product",getProductController)
module.exports = router
