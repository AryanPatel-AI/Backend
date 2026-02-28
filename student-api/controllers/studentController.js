let students = require("../data/students");

// GET all
exports.getStudents = (req, res) => {
  res.json(students);
};

// POST add
exports.addStudent = (req, res) => {
  const { name, age } = req.body;

  if (!name || !age)
    return res.status(400).json({ error: "Name and age required" });

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    age
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
};

// PUT update
exports.updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student)
    return res.status(404).json({ error: "Student not found" });

  const { name, age } = req.body;

  if (name) student.name = name;
  if (age) student.age = age;

  res.json(student);
};

// DELETE
exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1)
    return res.status(404).json({ error: "Student not found" });

  const deleted = students.splice(index, 1);
  res.json({ message: "Deleted", student: deleted[0] });
};