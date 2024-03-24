const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../routes/models/users');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Upload files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    // Generate a unique filename by adding a timestamp
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Route to create a new user with image upload
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { fullname, email, phone } = req.body;
    const image = req.file ? req.file.filename : null; // Get the uploaded filename
    const newUser = await User.create({ fullname, email, phone, image });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
});

// Route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
});

// Route to get a user by email
router.get('/:email', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.params.email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Error fetching user" });
    }
  });

// Route to update a user by email
router.put('/:email', async (req, res) => {
    try {
      const user = await User.findOneAndUpdate({ email: req.params.email }, req.body, { new: true });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Error updating user" });
    }
  });

// Route to delete a user by email
router.delete('/:email', async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ email: req.params.email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Error deleting user" });
    }
  });
  

module.exports = router;
