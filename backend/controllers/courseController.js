// This file contains controller functions to handle the various api requests.

// import model to interact with database
const Course = require("../models/courseModel");

// get all courses

// get a single course

// create new course
const createCourse = async (req, res) => {
  const { code, name, description, professor, term, grade, rating } = req.body;

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

// update a course

module.exports = {
  createCourse,
};
