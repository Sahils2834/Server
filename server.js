require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authroutes");
const cors = require("cors");


const app = express();
connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authroutes"));

app.get("/", (req, res) => {
  res.send("API is running...");
});
const PORT = process.env.PORT || 5000;