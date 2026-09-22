
// expree is web frame work for node js
const express = require('express');

const app = express();

// student data
let student =[
    {id : 1, name: "rahul" , branch :"Cse"},
    {id : 2, name: "priya" , branch :"Ece"},
    {id : 3, name: "sachin" , branch :"Mech"}

];
// get route
app.get('/student', (req, res) => {
    res.json(student);

});
// start the server
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});