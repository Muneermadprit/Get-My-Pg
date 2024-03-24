require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.js'); // Import userRoutes
const pgRoutes = require('./routes/pgRoutes.js'); // Import userRoutes

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(error => {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit with failure
  });



// Use userRoutes for all routes related to users
app.use('/api/userdata', userRoutes);
app.use('/api/pgdatas', pgRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
