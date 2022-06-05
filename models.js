const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const personSchema = new Schema({
    personId : Number,
    name: {type: String, required: true},
    dob: Date,
    favouriteFood: [String],
    phone: String,
    email: String
});
const Person = mongoose.model("Person", personSchema);



exports.Person = Person;