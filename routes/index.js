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
const updateProductController = require('../controller/products/updateProduct')
const getCategoryProductController = require('../controller/products/getCategoryProduct')
const getCategoryWiseProductController = require('../controller/products/getCategoryWiseProduct')
const getProductDetailsController = require('../controller/products/getProductDetail')
const searchProduct = require('../controller/products/searchProduct')
const filterProductController = require('../controller/products/filterProduct')
const addToCartController = require('../controller/cart/addToCartController')
const countAddToCartProduct = require('../controller/cart/countAddToCartProduct')
const addToCartViewProduct = require('../controller/cart/addToCartViewProduct')
const updateCartProduct = require('../controller/cart/updateCartProduct')

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
router.post("/update-product", updateProductController)
router.get("/get-categoryProduct", getCategoryProductController)
router.post("/category-product", getCategoryWiseProductController)
router.post("/product-details", getProductDetailsController)
router.get("/search", searchProduct)
router.post("/filter-product", filterProductController)

//cart
router.post("/addtocart",authToken, addToCartController)
router.get("/countAddToCartProduct",authToken, countAddToCartProduct)
router.get("/view-card-product",authToken, addToCartViewProduct)
router.post("/update-cart-product",authToken, updateCartProduct)


module.exports = router
