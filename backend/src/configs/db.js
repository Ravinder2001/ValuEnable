const mongoose = require("mongoose")
const connect = () => {
    return mongoose.connect("mongodb+srv://ravinder:ravinder@valuenable.iud4s.mongodb.net/ValuEnable?retryWrites=true&w=majority")
}
module.exports= connect