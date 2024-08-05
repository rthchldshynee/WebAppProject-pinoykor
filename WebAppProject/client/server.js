const express = require('express');
const mongoose = require('mongoose');
const app = express();
const recipeRoutes = require('./routes/recipe'); // Ensure the path to the route file is correct

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/recipe', recipeRoutes); // Correctly route to the recipe endpoint

// Connect to MongoDB
mongoose.connect('mongodb+srv://jamelasanchez26:4IQCnghDpZaCXrne@cluster0.ktsrtd0.mongodb.net/Recipe?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));