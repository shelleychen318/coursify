/* This file contains controller functions to handle the various requests related to the courses. */

// import model to interact with database
const Course = require("../models/courseModel");
const mongoose = require("mongoose");

// get all courses
const getCourses = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });

  res.status(200).json(courses);
};

// get a single course
const getCourse = async (req, res) => {
  // get id of the target course
  const { id } = req.params;

  // check that id is a valid object id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such course" });
  }

  const course = await Course.findById(id);

  if (!course) {
    return res.status(404).json({ error: "No such course" });
  }

  res.status(200).json(course);
};

// create new course
const createCourse = async (req, res) => {
  const { code, name, description, professor, term, grade, rating } = req.body;

  // keep track of any empty fields and send back a user-friendly error message
  let emptyFields = [];

  if (!code) {
    emptyFields.push("code");
  }
  if (!name) {
    emptyFields.push("name");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!professor) {
    emptyFields.push("professor");
  }
  if (!term) {
    emptyFields.push("term");
  }
  if (!grade) {
    emptyFields.push("grade");
  }
  if (!rating) {
    emptyFields.push("rating");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields.", emptyFields });
  }

  // add new course doc to database
  try {
    const course = await Course.create({
      code,
      name,
      description,
      professor,
      term,
      grade,
      rating,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a course
const deleteCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such course" });
  }

  const course = await Course.findOneAndDelete({ _id: id });

  if (!course) {
    return res.status(400).json({ error: "No such course" });
  }

  res.status(200).json(course);
};

// update a course
const updateCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such course" });
  }

  const course = await Course.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!course) {
    return res.status(400).json({ error: "No such course" });
  }

  res.status(200).json(course);
};

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
};
