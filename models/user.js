import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: "customer"
    },
    profilePicture: {
        type: String,
        default: "https://i.pinimg.com/236x/e8/1f/bf/e81fbfe16aeab9380f911c259f080b66.jpg"
    }
});

const User = mongoose.model("Users", userSchema);

export default User;
