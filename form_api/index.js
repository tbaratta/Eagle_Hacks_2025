const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const ratelimit = require('express-rate-limit');
require('dotenv').config();

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Database connection error", err);
});

const signupRateLimiter = ratelimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
  message: {
    status: 429,
    error: "Too many requests",
    message: "Too many requests from this IP"
  },
  standardHeaders: true,
  legacyHeaders: false
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  uin: { type: String, required: true },
  major: { type: String, required: true },
  expectedGradYear: { type: Number, required: true },
  tShirtSize: { type: String, required: true },
  dietaryRestriction: { type: String, required: true },
  firstHackathon: { type: String, required: true},
  programmingExperience: { type: String, required: true},
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/', signupRateLimiter, async (req, res) => {
  try {
    const { name, email, uin, major, expectedGradYear, tShirtSize, dietaryRestriction, firstHackathon, programmingExperience } = req.body;
    
    const newUser = new User({
      name,
      email,
      uin,
      major,
      expectedGradYear,
      tShirtSize,
      dietaryRestriction,
      firstHackathon,
      programmingExperience
    });
    await newUser.save();
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

// console.log("MongoDB URI from .env:", process.env.MONGODB_URI);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

