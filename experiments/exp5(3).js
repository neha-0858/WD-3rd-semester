const express = require('express');
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: 'John Doe', branch: "cse", age: 20 },
  { id: 2, name: 'Jane Smith', branch: "it", age: 22 },
  { id: 3, name: 'Bob Johnson', branch: "mech", age: 21 }
];
app.get('/' , (req, res) => {
  res.send('server is running');
});
app.post('/student', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({message: "student added successfully", student: newStudent});
});
app.listen(3005 ,() => {
  console.log('server is running on port 3005');
});