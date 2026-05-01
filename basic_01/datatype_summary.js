//how data sto store and access from memory
//primitive data types --> number, string, boolean,
//  null, undefined, symbol, bigint
const score =100;

let userName=null;

let userAge=undefined;
const isLoggedIn=false;
const outsideTemp=25;
console.log(typeof score);
const bigNumber = 1234567890123456789012345678901234567890n;
//non-primitive data types --> object, array, 
// function
//Array
const heros=["dogan","batman","superman"];
let mutliHero={
    name:"Nick",
    age:19,
    isLoggedIn:false
}

//function 
const myfunction =function(){
    console.log("hello world");
}
console.log(typeof heros);