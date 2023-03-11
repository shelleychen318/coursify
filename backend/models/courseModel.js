const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
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
});

// create a model called 'Course' based on this schema
module.exports = mongoose.model("Course", courseSchema);
