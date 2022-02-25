const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Product = require("../models/product.model");

router.post("/", async (req, res) => {
  console.log(req.body.email);
  try {
    const user = await User.find({ email: req.body.email }).lean().exec();
    res.send(user);
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/product", async (req, res) => {
  try {
    const user = await Product.find().lean().exec();
    res.send(user);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/user", async (req, res) => {
  try {
    console.log(req.body.email);
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    if (user) {
      return res.send(user);
    }
    const user_create = await User.create(req.body);
    res.send(user_create);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.send(product);
  } catch (err) {
    console.log(err.message);
  }
});
router.delete("/product", async (req, res) => {
  try {
    console.log(req.query.id);
    const product = await Product.findByIdAndDelete(req.query.id);
    const user = await Product.find().lean().exec();
    res.send(user);
  } catch (err) {
    console.log(err.message);
  }
});
module.exports = router;
