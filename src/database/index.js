import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
