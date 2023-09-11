import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
    username: String,
    password: String,    
}, {
    timestamps: true
}); 

export default mongoose.model('loginDetails',LoginSchema);