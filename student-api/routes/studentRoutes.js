const express = require("express");
const router = express.Router();

const logger = require("../middleware/logger");
const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

router.use(logger);

router.get("/", getStudents);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;