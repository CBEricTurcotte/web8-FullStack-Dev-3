import Mongoose from "mongoose";

// Define the Session schema using Mongoose's Schema constructor
const SESSION_SCHEMA = new Mongoose.Schema(
  {
    session_token: {
      type: String,
      required: true,
    },
    user: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

// Export the Session model using Mongoose's model function
export default Mongoose.model("Session", SESSION_SCHEMA);
