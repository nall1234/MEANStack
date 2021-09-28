
//acquire mongoose
const mongoose = require('mongoose');

//destructure Schema variable from mongoose
const { Schema } = mongoose;

//connect to mongoDB via localhost/ and use database animals
mongoose.connect('mongodb://localhost/animals')

//create and event listener to let us know it is connected
mongoose.connection.on('connected', ()=> console.log('mongoDB is connected'))


//create schema for Animal 
const AnimalsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'custom message for error'],
        trim: true
    },
    age: Number,
    legs: Number,
    isPet: Boolean,
});


//create Animal collection
const Animal = mongoose.model('Animal', AnimalsSchema);


//create document 
const animal = new Animal({
    name: 'spot',
    age: 3,
    legs: 4,
    isPet: true
});


//save it to the database to actually create, creates a promise
animal.save()
    .then(pet=> console.log(pet))
    .catch(error=> {
        //extract keys form the object. use object method
        const errors = Object.keys(error.errors).map(key=> error.errors[key].message)
        

    })