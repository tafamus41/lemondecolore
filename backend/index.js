import express from "express";
import dotenv from "dotenv";
import path from "path"
import { connectDB } from "./config/dbConnection.js";
import productRoutes from "./routes/index.js"
dotenv.config();
const HOST = process.env?.HOST || "127.0.0.1";
const PORT = process.env?.PORT || 5000;
const app = express();
const __dirname = path.resolve();

app.use(express.json())
app.use("/", productRoutes);
// app.use('/upload', express.static('upload'));


if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started ${HOST}:${PORT}`);
});
