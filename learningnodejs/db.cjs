const express = require('express');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;// Updated to use ES module syntax
const mongoose = require("mongoose")

// MONGODB CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/nodejsTut')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Mongo error", err));

// SCHEMA
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTile: {
        type: String,
    },
    gender: {
        type: String,
    }
});

const User = mongoose.model('User', userSchema);

// Express Middleware
app.use(express.json());

// Route to Create User
app.post('/create-user', async (req, res) => {
    try {
        const user = await User.create({
            firstName: "pankaj",
            lastName: "Solanki",
            email: "ps40@gmail.com",
            gender: "Male",
            jobTile: "Developer",
        });
        console.log(user);
        res.status(201).json({ msg: "success" });
    } catch (err) {
        console.error("Error creating user", err);
        res.status(500).json({ msg: "Error creating user" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
