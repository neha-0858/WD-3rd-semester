// this is az function to make a calculation of two numbers and display the result using callback function
function calculator(a,b,callback){
    let add,subtract,multiply,divide;
    add = a+b;
    subt = a-b;
    mul = a*b;
    div= a/b;

    console.log(`Addition: ${add}, Subtraction: ${subt}, Multiplication: ${mul}, Division: ${div}`  );

}
function display(callback){
    callback(10,2);
}
display(calculator);
