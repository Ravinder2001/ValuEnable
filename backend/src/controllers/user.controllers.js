const express = require("express")
const router = express.Router()
const User = require("../models/user.model")
const Product =require("../models/product.model")
router.get("/", async (req, res) => {
    try {
        const user = await User.find().lean().exec()
        res.send(user)
    } catch (err) {
        console.log(err.message)
    }
});
router.post("/user", async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.send(user)
    } catch (err) {
        console.log(err.message)
    }
})
router.post("/product", async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.send(product)
    } catch (err) {
        console.log(err.message)
    }
})
module.exports=router