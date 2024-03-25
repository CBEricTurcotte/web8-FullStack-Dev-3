// transactionSchema.js
import mongoose from "mongoose";
import Agent from "./agentSchema.js"; // Import the Agent schema

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  agent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent", // Reference to the Agent model
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  agentName: {
    // Add a new field for agent's name
    type: String,
  },
});

// Pre-save hook to populate agentName field based on agent_id
transactionSchema.pre("save", async function (next) {
  try {
    const agent = await Agent.findById(this.agent_id);
    if (agent) {
      this.agentName = agent.name;
    } else {
      this.agentName = "Unknown"; // Fallback if agent not found
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
