import mongoose from "mongoose";

const GridSchema = new mongoose.Schema({
    name: String,
    priceIncoming: Number,
    priceOutGoing:Number,
    time:String,
}, {
    timestamps: true
}); 

export default mongoose.model('gridData',GridSchema);