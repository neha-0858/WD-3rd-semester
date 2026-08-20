// setTimeout(function,delay); 
// function-> code you want to execute after the delay->TIME in mili second
// 1000 milisecond = 1 second
// 1 simple example
// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(function() {
//     console.log("hello after 5 seconds")
// },1000);
// setTimeout(function() {
//     console.log("hello after 10 seconds")
// },5000);

// console.log("four");
// console.log("five");

// setTimeout(() => {
//     console.log("hello after 3 seconds")
// },30000);

// function welcome(){
//     console.log("welcome to javascript!");
// }
// setTimeout(welcome,2000);

setTimeout(welcome,2000);
// passing arguments to the function

function greet(f_name,l_name){
    console.log("hello " + f_name + " " + l_name);
}

