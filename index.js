const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json()); // to accept JSON

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/student-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
// Handle 404 Not Found
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});
