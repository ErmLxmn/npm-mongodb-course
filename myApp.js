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
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
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
