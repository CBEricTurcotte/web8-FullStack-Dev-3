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
import mongoose from "mongoose"; // Import Mongoose library
import Session from "./db/schemas/sessionSchema.js"; // Import Session schema

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/agent", agents);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");

    // Example usage: Create a session document
    const newSession = new Session({
      session_token: "your_session_token",
      user: "user_id", // Replace with an actual user ID from your User collection
    });

    newSession
      .save()
      .then((session) => {
        console.log("Session created:", session);
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
