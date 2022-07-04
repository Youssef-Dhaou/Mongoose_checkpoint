const Person = require("../models/Person");

// add new document into the collection
const addPerson = async () => {
  try {
    const newPerson = new Person({
      name: "Alex",
      age: 24,
      favoriteFoods: ["pizza", "salad", "meat", "soup"],
    });
    await newPerson.save();
    console.log(newPerson);
  } catch (error) {
    console.log(error);
  }
};

// add manny records here usign another function  
const arrayOfPeople = async () => {
  try {
    const manyPerson = await Person.create([
      {
        name: "Serena",
        age: 35,
        favoriteFoods: ["pizza", "soup", "fried egg"],
        gender: "female",
      },
      {
        name: "Alexander",
        age: 42,
        favoriteFoods: ["Sandwich", "grilled meat", "spagetti"],
      },
      { name: "Elena", age: 28, gender: "female" },
    ]);
  } catch (error) {
    console.log(error);
  }
};



// find all people having a given name
const findPeopleByName = async(PersonName)=>{
   const people= await Person.find({name: PersonName})
   console.log("searchByName", people)
}

// findOne method
const findOnePerson =(food)=>{
    Person.findOne({favoriteFoods: food }, function (err, data) {
        if(err){
            console.log(err)
        }
        console.log(data)
    });
}


// using findById to find person
const SearchById = (personId)=>{
    
Person.findById({_id : personId}, (err, data) => {
    if(err){ console.log(err) }
    console.log(data)
});
}

// find edit thensave the document
const findEditThenSave =(personId, foodToAdd)=>{
Person.findById({_id: personId}, (err, data)=>{
    if(err){ console.log(err)}
    data.favoriteFoods.push(foodToAdd)
    data.save((error, newData)=>{
        err?("error of savig data", error)
        :console.log(newData)
    })
})
}

// finOne And update document
const findAndUpdate = (PersonName, ageToSet)=> {
    Person.findOneAndUpdate({name: PersonName}, { $set: { age: ageToSet} }, {new:true}, (err, data)=>{
if(err){console.log(err)}
console.log(data)
    })
}

//find by ifd and remove the document
const findRemoveById= (personId)=>{
    Person.findByIdAndRemove({_id: personId}, {new: true}, (err, data)=>{
        if(err){ console.log(err)}
        console.log(data)
    })
} 

//Delete Many Documents with model.remove()
const removeManyPerson=(personName)=>{
Person.remove({name: personName}, (err, data)=>{
    err? console.log(err): console.log(data)
})
} 

var queryChain = (foodToSearch )=>{
    Person.find({ favoriteFoods: foodToSearch})
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec((error, data)=> {
        error?
    console.log(error):
    console.log(data)
    });
    };

    
module.exports = {
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

  
};
