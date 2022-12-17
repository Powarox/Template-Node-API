import {} from "dotenv/config";
import mongoose from "mongoose";

async function connectDb() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connexion to MongoDB ✔️");
}

export default connectDb;
