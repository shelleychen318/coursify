const express = require("express");

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
router.post("/", (req, res) => {
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
