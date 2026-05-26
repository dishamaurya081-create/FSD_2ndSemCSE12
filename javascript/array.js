let person={
    name:"John",
    age:30,
    city:"New York"
};
console.log(person.name); 
console.log(person.age);
console.log(person.city);

let numbers=[1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);


let mixedArray=[1,"Hello",true,{name:"Alice"},[1,2,3]];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

let newarray=[1,2,3,4,5];
let sqauredArray=newarray.map(num=>num*num);
console.log(sqauredArray);

let evenArray=newarray.filter(num=>num%2===0);
console.log(evenArray);

function greet(){
    console.log("Hello, World!");
}
greet();
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));

const add=(a,b)=> a+b;
console.log(add(5,7));

const multi=(a,b)=>a*b;
console.log(multi(4,6));

let sayHi=()=>console.log("Hi there!");
sayHi();

//function declation
function square(x){
    return x*x;
}
//function expression
let cube=function(x){
    return x*x*x;
};
//arrow function
let power=(x,n)=>Math.pow(x,n);

const greetUser=(name)=>{
    console.log(`Hello, ${name}!`);
}
greetUser("Alice");

let sum=[1,2,3,4,5];
let total=sum.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(total);