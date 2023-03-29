const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    professor: {
      type: String,
      required: true,
    },
    term: {
      type: String,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// create a Course model based on this schema
module.exports = mongoose.model("Course", CourseSchema);
