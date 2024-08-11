import express from "express";
import bodyParser from "body-parser";

import bannerRoutes from "./routes/banner.routes";
import sequelize from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/v1", bannerRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

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
