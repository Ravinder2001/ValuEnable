const express = require("express")
const connect = require("./configs/db")
const userController= require("./controllers/user.controllers")
const PORT = process.env.PORT || 4000
const app = express()
app.use(express.json())
app.use("",userController)
app.listen(PORT, async () => {
    connect()
    console.log("Listening to port"+ PORT)
})