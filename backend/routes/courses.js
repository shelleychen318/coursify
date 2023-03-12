const express = require("express");
const {
  getCourses,
  getCourse,
  createCourse,
} = require("../controllers/courseController");

// create instance of the router
const router = express.Router();

// GET all courses
router.get("/", getCourses);

// GET a single course
router.get("/:id", getCourse);

// POST a new course
router.post("/", createCourse);

// DELETE a course
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a course" });
});

// UPDATE a course
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a course" });
});

// export router
module.exports = router;
