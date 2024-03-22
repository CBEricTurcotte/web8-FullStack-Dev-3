// transactionSchema.js

import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  agent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agent', // Reference to the Agent schema
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;