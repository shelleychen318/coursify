require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courses");

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// mount router module onto main app
app.use("/api/courses", courseRoutes);

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to mongodb and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
