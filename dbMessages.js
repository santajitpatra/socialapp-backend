import mongoose from "mongoose";

const socialappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String
});
export default mongoose.model("messageContent", socialappSchema);