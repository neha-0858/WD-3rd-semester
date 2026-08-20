// 1:passing an array to a function
function displaynumber(numbers){
    console.log(numbers);
}
let arr = [1,2,3,4,5];
displaynumber(arr);

// 2: pasiing an object to a function
function displaystudent(student){
    console.log(student.name);
    console.log(student.age);
}
let student ={
    name: "raul";
    age: "49";
}
displaystudent(student);