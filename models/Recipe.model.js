const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
   title: String,
   level: String,
   ingredients: [String],
   cuisine: String,
   dishType: {
    type: String,
    enum:[ 'breakfast', 'main_course', 'soup', 'snack', 'drink', 'other', 'dessert']
   },
   image : {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
   },
   duration : Number,
   creator: String,
   create:{
    type: Date, 
    default: Date.now
   }

   

});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
