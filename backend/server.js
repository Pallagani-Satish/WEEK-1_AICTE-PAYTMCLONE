const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const Transaction = require('./models/Transaction'); // Ensure this path is correct
require('dotenv').config(); // Add this to load environment variables

const app = express();
const PORT = 5000;

const secretKey = process.env.SECRET_KEY;
console.log('Secret Key:', secretKey); // Log to verify the key is loaded

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // Parse JSON bodies

// MongoDB connection and event handling
mongoose.set('strictQuery', false); // Optional: depending on your mongoose version

mongoose
  .connect('mongodb://127.0.0.1:27017/paytm_clone', {
    serverSelectionTimeoutMS: 30000, // Timeout after 30 seconds
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process if DB connection fails
  });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

// Default route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.post('/send-otp', (req, res) => {
  const { phoneNumber } = req.body;
  console.log('Received phoneNumber:', phoneNumber); // Log to verify input

  if (!phoneNumber) {
    return res.status(400).send({ message: 'Phone number is required' });
  }

  // Simulate OTP sending logic
  res.send({ message: `OTP sent to ${phoneNumber}` });
});

app.post('/verify-otp', (req, res) => {
  const { phoneNumber, otp } = req.body;

  try {
    console.log('Received phoneNumber:', phoneNumber);
    console.log('Received OTP:', otp);

    if (!phoneNumber || !otp) {
      console.error('Missing phoneNumber or otp');
      return res.status(400).json({ message: 'Missing phoneNumber or otp' });
    }

    // Simulate OTP verification logic
    if (otp === "123456") {
      const token = jwt.sign({ phoneNumber }, secretKey, { expiresIn: "1h" });
      console.log('Generated token:', token);
      res.json({ message: "Logged in successfully", token });
    } else {
      console.error('Invalid OTP');
      res.status(401).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    console.error('Error during OTP verification:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Transfer API Route
app.post('/api/transfer', async (req, res) => {
  const { recipient, amount } = req.body;

  // Validate request body
  if (!recipient || !amount) {
    return res.status(400).json({ message: 'Recipient and amount are required.' });
  }

  // Simple validation for recipient phone number format (basic example)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(recipient)) {
    return res.status(400).json({ message: 'Invalid phone number format.' });
  }

  // Validate amount
  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ message: 'Amount should be a valid number greater than 0.' });
  }

  try {
    // Save transaction to the database
    const transaction = new Transaction({ recipient, amount });
    await transaction.save();

    console.log(`Transferring ₹${amount} to ${recipient}`);
    res.status(200).json({ message: `₹${amount} successfully transferred to ${recipient}` });
  } catch (error) {
    console.error('Error saving transaction:', error);
    res.status(500).json({ message: 'Failed to process transaction.' });
  }
});

// Get all transactions
app.get('/api/transactions', async (req, res) => {
  try {
    // Fetch transactions from the database
    const transactions = await Transaction.find().sort({ date: -1 }); // Sorted by most recent
    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'An error occurred while fetching transactions.' });
  }
});
