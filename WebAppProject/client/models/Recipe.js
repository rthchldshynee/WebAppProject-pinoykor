const mongoose = require('mongoose');

// Define the schema for the 'info' collection
const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: String,
  instructions: String,
  cookingTime: Number,
  difficultyLevel: String,
  cuisine: String,
  videoUrl: String,
  nutritionInformation: String,
  firstName: String,
  lastName: String,
  email: String
}, { collection: 'info' }); // Specify the collection name here

// Export the model based on the schema
module.exports = mongoose.model('Recipe', recipeSchema);