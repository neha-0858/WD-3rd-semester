/**let a,b,c 
a =5
b=10
r = a+b
console.log(r)
a=10
b="abc"
c = a+b
console.log(c)

//array
const Arr1= [ ]//empty array
const Arr2 = [ 'a','b','c']//with elements
const Arr3 = new Array('a','b','c')//array constrctor
const Arr4 = new Array('a', 10, true , {name:'neha'})//mix elements 
const Arr5 = new Array(5)//size of array
Arr5.push(1)**/

/**const new_arr = [1,2,3,4,5]
console.log(new_arr[1])
new_arr.push(6)
console.log(new_arr)
new_arr.push(7,8,9)
console.log(new_arr)
new_arr.pop()
console.log(new_arr)

new_arr.unshift(2)//to adding element in starting
console.log(new_arr)
new_arr.shift()//to delete from starting
console.log(new_arr)**/
/**const a1 = [1,2,3,4,5,6,7]
const b = a1.splice(2,5)//to delete from array
console.log(b)

const a2 = [1,2,3,4,5,6,7]
const c = a2.slice(2,5)//to delete from array
console.log(c)
//concat 
const a3 = [1,2,3,4,5]
const b3 = [6,7,8,9,10]
const c3 = [11,12,13,14,15]
const r = [...a3,...b3,...c3]
console.log(r)

//to merge more then one concatinate
//const r = [...a3,...b3,...c3]**/
/**const student ={
            name : 'neha',
            age : 20,
            gender: 'female',
            address : {
                city : 'pune',
                state : 'maharashtra'
            }
}
console.log(student.name)
console.log(student.address.city)
console.log(student.age)**/
//function
/**function sum(a,b){
    let r;
    r = a+b
    return r
    console.log("hello")
}
/**let result = sum(5,10)
console.log(result)**/
/**function message(f_name, l_name){
     console.log("good morning " + f_name + " " + l_name)
}
message("John", "sharma")**/

/**function greeting_msg(f_name, l_name){
    let r = f_name+ l_name 
    console.log(`good morning ${r}  ${f_name} ${l_name}`)
}
greeting_msg("John", "sharma")**/

/**function greeting_msg(f_name, l_name){
    let r = f_name+ l_name 
    console.log(`good morning ${r}  ${f_name} ${l_name}`)
}
greeting_msg("John", "sharma")**/

 /**const arr = [1,10,5,8,6]; -->
  <!-- for(let i=0 ; i<arr.length;i++){
    console.log(arr[i])  --> 

const arr = [2,3,4,5,6,7];
<!-- while(i < arr.length){
    console.log(arr[i]);
    i++;

} **/
// const arr = [23,56,90,70]
// for(const element of arr){
//     console.log(element);
// }

// const arr = [23,50,97,70]
// for(const element in  arr){
//     console.log(arr[element]);
// }
// const names = ['neha','navaya' , 'nirjara'];
// for(const key of arr){
//     console.log(key);
// }
// a_func(10,5)
// let r = function(a,b)
//   {
//     console.log(a+b)
//   }
// r(10,5);
// arrow function
// let result =(a,b) =>{
//     console.log(a+b)
// }
// result(4,5)

// let result = a => {console.log(a)}
// result(5*5)

// function greet(name){
//     console.log("hello" + name);

// }
// function processuser(callback){
//     callback("rahul");
// }
// processuser(greet)

function calculate(a,b, callback){
    let result = a+b;
    callback(result);
}
function display(result){
    console.log("result ")  
}








