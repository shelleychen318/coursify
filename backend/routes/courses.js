const express = require("express");
const Course = require("../models/courseModel");

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
router.post("/", async (req, res) => {
    const { code, name, description, professor, term, grade, rating } = req.body;

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
      res.status(200).json(course)
    } catch (error) {
      res.status(400).json({error: error.message})
    }

  res.json({ mssg: "POST a new course" });
});

// DELETE a course
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a course" });
});

// UPDATE a course
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a course" });
});

module.exports = router;
