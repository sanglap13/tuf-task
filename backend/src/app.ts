import express from "express";
import bannerRoutes from "./routes/banner.routes";
import sequelize from "./config/db";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import path from "path";

config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Bois!");
});

// Routes
app.use("/api/v1", bannerRoutes);

// Database Sync
sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
