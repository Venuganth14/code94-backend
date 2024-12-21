const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const imageRoutes = require("./routes/productRoutes"); 

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoUrl =
  "mongodb+srv://Venuganth:Venuganth@cluster0.u7ydh.mongodb.net/";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

const filesDirectory = path.join(
  "F:/CODE94/backend/files"
);
app.use("/files", express.static(filesDirectory));

app.use("/api", imageRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Success!!!!!!");
});

// Start the server
app.listen(5000, () => {
  console.log("Server Started on port 5000");
});
