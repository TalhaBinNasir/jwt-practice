const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

const app = express();

dotenv.config();

mongoose.connect(process.env.DB);

app.use(express.json());
app.use("/api/user", authRoute);

app.listen(3000, () => {
  console.log("Server running on PORT: 3000");
});
