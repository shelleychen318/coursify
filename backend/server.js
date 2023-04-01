require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courses");
const userRoutes = require("./routes/user");

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// register routes
app.use("/api/courses", courseRoutes);
app.use("/api/user", userRoutes);

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to mongodb and listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
