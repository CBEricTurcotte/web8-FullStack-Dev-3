// import express from "express";
// import Transaction from "./transactionSchema.js";

// const router = express.Router();

// // POST /transaction - Create a new transaction
// router.post("/transaction", async (req, res) => {
//   try {
//     const { amount, agent_id } = req.body;

//     // Create a new transaction document
//     const newTransaction = new Transaction({
//       amount,
//       agent_id,
//       date: Date.now(),
//     });

//     // Save the transaction to the database
//     await newTransaction.save();

//     res.status(201).json(newTransaction);
//   } catch (error) {
//     console.error("Error creating transaction:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // GET /transaction-data - Fetch the last ten transactions and agents
// router.get("/transaction-data", async (req, res) => {
//   try {
//     // Fetch the last ten transactions from the database
//     const transactions = await Transaction.find().sort({ date: -1 }).limit(10);

//     // Fetch all agents
//     const agents = await Agent.find({}, "_id name");

//     res
//       .status(200)
//       .json({ status: "ok", data: { transactions, agents }, message: null });
//   } catch (error) {
//     console.error("Error fetching transactions and agents:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// export default router;

import express from "express";
import Transaction from "./transactionSchema.js";

const router = express.Router();

// POST /transaction - Create a new transaction
router.post("/transaction", async (req, res) => {
  try {
    const { amount, agent_id } = req.body;

    // Create a new transaction document
    const newTransaction = new Transaction({ amount, agent_id });

    // Save the transaction to the database
    await newTransaction.save();

    // Fetch the updated list of transactions after adding the new one
    const transactions = await Transaction.find().sort({ _id: -1 }).limit(10);

    res.status(201).json({ newTransaction, transactions });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /transaction-data - Fetch the last 10 transactions
router.get("/transaction-data", async (req, res) => {
  try {
    // Fetch the last 10 transactions from the database
    const transactions = await Transaction.find().sort({ _id: -1 }).limit(10);

    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
