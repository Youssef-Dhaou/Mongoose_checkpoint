const mongoose = require("mongoose")


const personSchema = new mongoose.Schema({
    name:{type: String, required: true, trim:true, uppercase: true},
    age:Number,
    gender:{type: String, default: "man"},
    favoriteFoods: [String]

})

module.exports= Person = mongoose.model('person', personSchema)