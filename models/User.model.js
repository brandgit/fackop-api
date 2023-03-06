import mongoose from "mongoose";

export const ContactFormSchema = new mongoose.Schema({
  name: { type: String },
  firstname: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
});

export default mongoose.model.Users ||
  mongoose.model("ContactForm", ContactFormSchema);
