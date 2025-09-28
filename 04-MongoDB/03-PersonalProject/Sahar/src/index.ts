import express, { type Express } from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routerUsers from "./routes/user.route";   // 👈 שים לב לסיומת
import routerRecipes from "./routes/recipe.route"; // 👈 שים לב לסיומת
import { fileURLToPath } from "url";

dotenv.config();

const app: Express = express();
const port = 3000;


const MONGODB_URI = process.env.MONGODB_URI;



if (!MONGODB_URI) {
    console.error("MONGODB_URI is not defined in environment variables");
    process.exit(1);
}

mongoose.connect(`${MONGODB_URI}`).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Failed to connect to MongoDB", err);
});
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/user", routerUsers);
app.use("/api/recipe", routerRecipes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});