 const mongoose = require("mongoose")

 const dbConnect = () => {
    const connectionParams = {useNewUrlParser: true}
    mongoose.connect(process.env.DB, connectionParams)

    mongoose.connection.on("connected", ()=> {
        console.log("Connected to databse successfully")
    })

    mongoose.connection.on("err", (error) => {
        console.log("Error while connecting to databse:" + error)
    })

    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB connection disconnected")
    })
 }

 module.exports = dbConnect