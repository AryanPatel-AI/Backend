const express = require("express");
const app = express();

const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

// routes
app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});