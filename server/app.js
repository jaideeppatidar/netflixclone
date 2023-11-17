// app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const databaseConfig = require("./config/db");
const apiRoutes = require("./routes/user.route");

const app = express();
const port = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the MongoDB database
mongoose
  .connect(databaseConfig.url, { useNewUrlParser: true, useUnifiedTopology: true , })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: " + err);
  });

// Routes
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
