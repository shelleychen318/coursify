const express = require("express");
const {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
} = require("../controllers/courseController");
const requireAuth = require("../middleware/requireAuth");

// create instance of the router
const router = express.Router();

// require auth for all courses routes
router.use(requireAuth);

// GET all courses
router.get("/", getCourses);

// GET a single course
router.get("/:id", getCourse);

// POST a new course
router.post("/", createCourse);

// DELETE a course
router.delete("/:id", deleteCourse);

// UPDATE a course
router.patch("/:id", updateCourse);

// export router
module.exports = router;
