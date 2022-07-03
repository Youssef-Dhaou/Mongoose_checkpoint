const mongoose = require('mongoose')

const connectDb= async ()=>{
    try {
    await mongoose.connect("mongodb://localhost:27017/myNewDB")
    console.log("connection to dataBase successfull")
} catch (error) {
    console.log(error)
}
}

module.exports= connectDb; 