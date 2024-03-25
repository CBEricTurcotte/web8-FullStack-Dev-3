import mongoose from 'mongoose';

// Define the Session schema using Mongoose's Schema constructor
const sessionSchema = new mongoose.Schema({
    session_token: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: true });

// Export the Session model using Mongoose's model function
export default mongoose.model('Session', sessionSchema);