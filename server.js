require("dotenv").config();

const express = require("express");

// import dependecies
const cors = require("cors");
const connectDB = require("./config/db.js");

const app = express();

// global middlewares
app.use(cors());
app.use(express.json());

// connect to DB
connectDB();

// health check
app.get("/ping", (req, res) => res.json({ data: "pong" }));


app.listen(process.env.PORT, () => console.log("Server is up and running"));