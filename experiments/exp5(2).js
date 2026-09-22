const express = require('express');
const app = express();

let students = [
    {id: 1, name: 'rahul', branch: 'CSE', age: 20},
    {id: 2, name: 'rashmi', branch: 'CSE 2', age: 19},
    {id: 3, name: 'rohan', branch: 'CSE ds', age: 22},
    {id: 4, name: 'rani', branch: 'CSE ai', age: 20},
];

app.get('/student', (req, res) => {
    res.json(students);
});

app.get('/student/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student)
        return res.status(404).json({message: 'student not found'});

    res.json(student);
});

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});