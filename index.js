const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb+srv://Asdf1234:Asdf1234@cluster0.q9zt67y.mongodb.net/test';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    Recipe.create({
      title: 'Lasagne',
      level: 'intermediate',
      ingredients: ['lasagne', 'ragu', 'beasciamella', 'grana'],
      cusine: 'italian',
      dishType: 'main_course',
      duration: 40,
      creator:' Filippo',
    })

  })
  .then(recipe => console.log('The recipe is saved and its name is: ', receipe.title))  
  // the above is not working..... if i remove the .title is working, but gives me undefined.. why?
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  Recipe.insertMany(data)
  .then(receipes => receipes.forEach(receipe => console.log(receipe.title)))