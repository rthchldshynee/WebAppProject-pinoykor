const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Middleware function
function getUser(req, res, next) {
  // Middleware logic to get the user
  console.log('User middleware executed');
  next(); // Call next() to pass control to the next middleware or route handler
}

// GET all recipes from the 'info' collection
router.get('/', async (req, res) => {
  console.log('Fetching all recipes...');
  try {
    const recipes = await Recipe.find({}); // Query the 'info' collection
    console.log('Fetched recipes:', recipes);
    res.json(recipes); // Send the fetched recipes as JSON
  } catch (err) {
    console.error('Error fetching recipes:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST to add a recipe
router.post('/add', getUser, async (req, res) => {
  try {
    if (req.body != null) {
      // Create a new recipe based on the request body
      const newRecipe = new Recipe({
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        cookingTime: req.body.cookingTime,
        difficultyLevel: req.body.difficultyLevel,
        cuisine: req.body.cuisine,
        videoUrl: req.body.videoUrl,
        nutritionInformation: req.body.nutritionInformation,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });
      // Save the recipe to the database
      const savedRecipe = await newRecipe.save();
      return res.status(200).json(savedRecipe);
    } else {
      return res.status(400).json({ message: 'No data provided' });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// PUT to update a recipe by ID
router.put('/:id', getUser, async (req, res) => {
  console.log('Update request data:', req.params.id, req.body);
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(updatedRecipe); // Send the updated recipe as JSON
  } catch (err) {
    console.error('Detailed error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }  
});

// DELETE a recipe by ID
router.delete('/:id', async (req, res) => {
  console.log('Deleting recipe with ID:', req.params.id);
  try {
    const result = await Recipe.findByIdAndDelete(req.params.id); // Delete the recipe by ID
    if (!result) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    console.log('Deleted recipe:', result);
    res.json({ message: 'Recipe deleted successfully' }); // Send success message
  } catch (err) {
    console.error('Error deleting recipe:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
