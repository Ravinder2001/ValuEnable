const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    admin:{type:String}
})
const Product = mongoose.model("Product", productSchema)
module.exports=Product