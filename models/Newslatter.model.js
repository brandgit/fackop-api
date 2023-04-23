import mongoose from "mongoose";

export const NewslatterSchema = new mongoose.Schema({
  email: { type: String },
});

export default mongoose.model.Users ||
  mongoose.model("Newslatter", NewslatterSchema);
