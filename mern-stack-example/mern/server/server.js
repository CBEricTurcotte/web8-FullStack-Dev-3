// import express from "express";
// import cors from "cors";
// import agents from "./routes/agent.js";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables from .env file

// const PORT = process.env.PORT || 5050;
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use("/agent", agents);

// // start the Express server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

/////////////////////

import express from "express";
import cors from "cors";
import agents from "./routes/agent.js";
import dotenv from "dotenv";
import { MongoClient } from "mongodb"; // Import MongoClient from MongoDB driver
import Session from "./db/schemas/sessionSchema.js"; // Import Session schema

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/agent", agents);

// Connect to MongoDB using MongoClient
const client = new MongoClient(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client
  .connect()
  .then(() => {
    console.log("MongoDB connected");

    // Example usage: Create a session document
    const newSession = new Session({
      session_token: "your_session_token",
      user: "user_id", // Replace with an actual user ID from your User collection
    });

    client
      .db("employees") // Replace 'your_database_name' with your actual database name
      .collection("sessions") // Replace 'your_collection_name' with your actual collection name
      .insertOne(newSession)
      .then(() => {
        console.log("Session created");
      })
      .catch((err) => {
        console.error("Error creating session:", err);
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define routes and middleware...

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
