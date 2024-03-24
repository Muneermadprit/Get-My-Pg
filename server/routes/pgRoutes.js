// Import necessary modules
const express = require('express');
const router = express.Router();
const User = require('../routes/models/pgdata');

// Define route handler for POST request
router.post('/', async (req, res) => {
    try {
        // Extract nested JSON data from request body
        const { pgname, email, phone, bed,bed1 } = req.body;
        
        // Create a new user document
        const newUser = new User({
            pgname,
            email,
            phone,
            bed,
            bed1
            // Assuming bed is an array of objects
        });

        // Save the new user document to the database
        const savedUser = await newUser.save();

        // Respond with the saved user document
        res.status(201).json(savedUser);
    } catch (error) {
        // Handle errors
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Error creating user" });
    }
});
router.get('/:bedType', async (req, res) => {
    try {
        const { bedType } = req.params;
        const user = await User.find({ "bed.bedType": bedType });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Error fetching user" });
    }
});
router.put('/:bedType', async (req, res) => {
    try {
        const { bedType } = req.params;
        const updatedUser = await User.findOneAndUpdate({ "bed.bedType": bedType }, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Error updating user" });
    }
});

// Export the router
module.exports=router;