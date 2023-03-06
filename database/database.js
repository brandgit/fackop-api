import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./configs/.env" });

async function connected() {
  mongoose.set("strictQuery", true);

  const db = await mongoose.connect(
    "mongodb+srv://BrandDev:BrandDev1998@branddev.ukvcyp7.mongodb.net/fackopDB?retryWrites=true&w=majority"
  );
  console.log("Database Connected");

  return db;
}

export default connected;
