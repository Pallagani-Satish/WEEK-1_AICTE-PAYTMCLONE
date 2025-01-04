const mongoose = require('mongoose');

// Define the schema for the transaction
const transactionSchema = new mongoose.Schema(
  {
    recipient: {
      type: String,
      required: true, // Ensure recipient is provided
      trim: true, // Remove extra spaces
    },
    amount: {
      type: Number,
      required: true, // Ensure amount is provided
      min: [0, 'Amount must be greater than zero'], // Ensure amount is positive
    },
    date: {
      type: Date,
      default: Date.now, // Automatically set the date when the transaction is created
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the model
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
