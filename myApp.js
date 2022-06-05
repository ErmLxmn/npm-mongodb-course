const mySecret = process.env['MONGO_URI']
require('dotenv').config();
const mongoose = require('mongoose');
const connection = require('./mongodb.js');
const personSchema = require('./schemas/personSchema.js');

connection.START_CONNECTION()

const Person = mongoose.model("Person", personSchema);


const createAndSavePerson = (done) => {
  let ermel = new Person({
    name: "Ermel",
    age: 27,
    favoriteFoods: ['Pork', 'Coffee', 'etc..']
  })
  ermel.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

let arrayOfPeople = [
  {name: "Pogi", age: 55, favoriteFoods: ["Del Taco"," Saging"]},
  {name: "Panget", age: 53, favoriteFoods: ["roast chicken", "Manga"]},
  {name: "Pwede Na", age: 24, favoriteFoods: ["wine", "Banana"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.error(err);
    done(null, people)
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function (err, personFound){
    if (err) return console.error(err);
    done(null, personFound)
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, personFound){
    if (err) return console.error(err);
    done(null, personFound)
  })
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, function (err, personFound){
    if (err) return console.error(err);
    done(null, personFound)
  })
};

const findEditThenSave = (personId, done) => {
 

  Person.findById({_id: personId}, function (err, personFound){
    if (err) return console.error(err);

    const foodToAdd = "hamburger";
    personFound.favoriteFoods.push(foodToAdd);

    personFound.save(function(err, updatedPerson) {
      if (err) return console.error(err);
      done(null, updatedPerson)
    });
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedPerson) => {
    if(err) return console.log(err);
    done(null, updatedPerson);
  })
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, personRemoved)=>{
    if(err) return console.log(err);
    done(null, personRemoved);
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, personRemoved) => {
    if(err) return console.log(err);
    done(null, personRemoved);
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch})
        .sort({favoriteFoods: 1})
        .limit(2)
        .select({name: 1, favoriteFoods: 1})
        .exec( (err, data) => {
          if(err) return console.log(err);
          done(null, data);
        });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
