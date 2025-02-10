// function greet(name){
//     return `hello, ${name}`;

// }
// console.log(greet("mrs manasa"));
// const greet=function(name){
//     return `hello, ${name}`;

// };
// console.log(greet("mrs manasa"));
// const greet=(name)=>`Hello,${name}`;
// console.log(greet("mrs manasa"));

// (function(){
//     console.log("this runs right ayaw!");
// })();

// let fruits=["apple","banana","mango"];
// fruits.push("grapes");
// fruits.forEach(fruit=>console.log(fruit));

// fruits.pop();

//  fruits.shift("cherry");
//  let numbers=[1,2,3,4,5];
//  let squared=numbers.map(num=>num*num)
// let person={
//     name:"Mrs manasa",
//     Age:30,
//     greet: function(){
//         return `Hello ,my name is ${this.name}`;

//     },
// };
// console.log(person.name);
// console.log(person.greet());

const heading = document.getElementById("heading")
const button = document.getElementById("button")
 button.addEventListener("click", () => {
    heading.textContent = "Button clicked";
     heading.style.color = "blue";
      
 }); 


// try{
//     let result=JSON.parse("invalid JSON");
// }catch(error){
//         console.log("error caught",error.message);
//     }


// function myFun () {
//     document.getElementById('demo')
//         .innerHTML = 'Content Changed'
// }