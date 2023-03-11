const express = require("express");
const { createCourse } = require("../controllers/courseController");

// create instance of the router
const router = express.Router();

// GET all courses
router.get("/", (req, res) => {
  res.json({ mssg: "GET all courses" });
});

// GET a single course
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single course" });
});

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
