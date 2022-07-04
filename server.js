const express = require("express");
const connectDb = require("./config/connectDB");
const Person = require("./models/Person");
const {
  addPerson,
  arrayOfPeople,
  findPeopleByName,
  findOnePerson,
  SearchById,
  findEditThenSave,
  findAndUpdate,
  findRemoveById,
  removeManyPerson,
  queryChain,
} = require("./instructions/instructions");
const app = express();

// connect to database "myNewDB"
connectDb();

// addPerson()
// arrayOfPeople()
// findPeopleByName("alex")
// findOnePerson(["pizza", "soup", "fried egg"])
// SearchById('62c04c788cb68ace4f6eded7')
// findEditThenSave('62c04c788cb68ace4f6eded7',"hamburger")
// findAndUpdate("Elena", 20)
// findRemoveById("62c04c788cb68ace4f6eded7")
// removeManyPerson("SERENA"),
// queryChain("soup")

const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server listening on port ${port}!`);
});
