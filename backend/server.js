require("dotenv").config();

const express = require("express");
const courseRoutes = require("./routes/courses");

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// mount router module onto main app
app.use('/api/courses', courseRoutes)

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
