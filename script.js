 

// function math(a, b) {
// if(a==b){
//    return"ტოლია"
// }else{
//  return"არ არის ტოლი"
// }
// }
// console.log(math(5,6));




// function math1(a, b) {
//     if(a==b){
//        return"ტოლია"
//     }else{
//      return"არ არის ტოლი"
//     }
//     }
//     console.log(math1("8",8));


// function fahrenhait(c){
// return(c - 32)*5/9
// if(typeof fahrenhait!="number"){
//     return false
// }else{
//  return true
// }
// }
// console.log(fahrenhait(56));



// function calculator(num1, num2, num3){
//     if((typeof num1 !== "number" || typeof num2 !== "number")){
//         return false

//     }
//     switch(num3){
//         case "+":
//         return num3=num1+num2
//         case "-":
//             return num3=num1-num2
//         case "*":
//                 return num3=num1*num2
//       case "/":
//         return num3=num1/num2
//     }
  
// }

// console.log(calculator(2,3,"*"));



// const cars=[1,2,3,4]
// console.log(cars[2]);


// let i = 2;
// for (let i = 0; i < 10; i++) {
//   // some statements
//   console.log("t");
  
// }
// i=1;
// while (i<3){
//     console.log('hello');
//     i++;
    
// }


// // პირველი დავალება

// function getYoungestUserName(users) {
//     if (users.length === 0) return null;

//     let youngestUser = users[0];

//     for (let i = 1; i < users.length; i++) {
//         if (users[i].age < youngestUser.age) {
//             youngestUser = users[i];
//         }
//     }

//     return youngestUser.name;
// }

// const users = [
//     {name: 'Temo', age: 25},
//     {name: 'Lasha', age: 21},
//     {name: 'Ana', age: 28}
// ];

// console.log(getYoungestUserName(users));






// // მეორე დავალება

// const user = [
//     {name: 'Temo', age: 25},
//     {name: 'Lasha', age: 21},
//     {name: 'Ana', age: 28}
// ];

// const user1= [
//     {name: 'Temo', age: 25},
//     {name: 'Lasha', age: 21},
//     {name: 'Ana', age: 28}
// ];

// user1[0].name='Toko'
// user1[0].age=20

// console.log(user);
// console.log(user1);


// // მესამე დავალება

// function random() {
//     return parseInt(Math.random() * 6) + 1; 
// }

// function game() {
//     let attempts = 0; 
//     let battempts = 0;
//     let aroll = 0;
//     let broll = 0;

    
//     while (aroll !== 4) {
//         aroll = random();
//         attempts++;
//     }

   
//     while (broll !== 4) {
//         broll = random();
//         battempts++;
//     }

   
//     if (attempts < battempts) {
//         console.log(`winner is Toko Score: ${attempts}`);
//     } else if (attempts > battempts) {
//         console.log(`winner is Dato  Score: ${battempts}`); 
//     } else {
//         console.log("draw"); 
//     }
// }


// game();





// // პირველი მაგალითის ამოხსნა
// const cal =(...number) => {
//     if(number.length <=2){
//         return "რიცხვების რაოდენობა უნდა იყოს 2-ზე მეტი"
//     }

//     const sumOfnumber= number[0] + number[1];
//     const numTimes = number[2] * number[3];

//     return [sumOfnumber,numTimes]
// }
// console.log(cal(2,3,4,5));

// // მეორე მაგალითის ამოხსნა
//   const user5 = {
//    banks : [
// { Address :{city: "Los Angeles"}},
// { Address :{city:"Califronia"}},
// { Address :{city:"New-York"}},
// { Address :{}}
//    ]
// }
// console.log(user5.banks[2].Address.city);
// console.log(user5.banks [{}, {}, {}]);


// // მესამე მაგალითი

// const person4 = {
//     firstname: "Toko",
//     Lastname: "Khurtsidze",
//     From: "Georgia",
//     Address: {
//         city:"Tbilisi"
//     }

// };

// const person5 = {
//     ...person4,
//     Address: {
//         ...person4.Address
//     }
// };
// person5.firstname = "Giorgi";
// person5.Address.city="Rustavi";

// console.log(person4.firstname, person4.Lastname,person4.From,person4.Address.city);
// console.log(person5.firstname, person5.Lastname,person5.From,person5.Address.city);







// const types = (string, valueToReplace,valueToReplaceWith) => {
//     let index= string.indexOf(valueToReplace)
//     let newstring=string
//     .substr(0,index)
//     + valueToReplaceWith
//     + string.substr(index+valueToReplace.lenght)
//     return newstring

// }
// console.log(types("i prefer black to blue "," black "," white "))


// const upper = (sentence) => {
//     const words = sentence.split(" ");
//     const upperWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     return upperWords.join(" ");
// };

// console.log(upper("hello world"));


// const arr = [
//     { name: "Lasha", age: 30 },
//     { name: "Saba", age: 20 },
//     { name: "Ana", age: 25 }
// ];

// const sortByAge = (users) => {
//     return users.slice().sort((a, b) => a.age - b.age);
// };

// console.log(sortByAge(arr));
 
 

    
// // first
// const longtext = document.getElementById('text');
// const button = document.getElementById('btn');

// button.addEventListener("click", () => {
//     longtext.style.display = 'none';
// });

// // second
// const div = document.createElement('div');
// div.setAttribute('id', 'div1');

// const h2 = document.createElement('h2');
// h2.textContent = 'Gandalf'; 

// const href = document.createElement('a');
// href.setAttribute('href', '#');
// href.textContent = 'Go to profile'; 

// div.appendChild(h2);
// div.appendChild(href);

// document.body.appendChild(div);
// // third
// // let score = 0;

// // const showQuestion = (questions, answers, correctAnswer) => {
// //     const questionl = document.getElementById("question");
// //     questionl.textContent = questions;

// //     const answer = document.querySelectorAll(".answer"); 
// //     answer.forEach((element, index) => {
// //         element.textContent = answers[index];
// //         element.classList.remove('correct', 'incorrect');
// //     });
// // }

// // const checked = (SelectedElement, correctAnswer) => {
// //     const answer = document.querySelectorAll(".answer");
// //     const Selectedanswerindex = Array.from(answer).indexOf(SelectedElement);

// //     if (Selectedanswerindex === correctAnswer) {  
// //         SelectedElement.classList.add('correct');
// //         score++;
// //     } else {
// //         SelectedElement.classList.add('incorrect');
// //     }
// //     updateScore()
// // }

// // const updateScore = () => {
// //     const scoreElement= document.getElementById('score')
// //     scoreElement.textContent='score: ${score}'
// // }
// // const question="what is the capital of Georgia"
// // const answers=['Tbilisi','Paris','Rome']
// // const correctAnswer=0
// // showQuestion(question,answers,correctAnswer)

// let score = 0;
// let currentQuestionIndex = 0;

// const questions = [
//     {
//         question: "What is the capital of Georgia?",
//         answers: ["Tbilisi", "Paris", "Rome", "Berlin"],
//         correctAnswer: 0
//     },
//     {
//         question: "What is the capital of France?",
//         answers: ["London", "Berlin", "Paris", "Madrid"],
//         correctAnswer: 2
//     },
//     {
//         question: "What is the capital of Italy?",
//         answers: ["Venice", "Rome", "Naples", "Florence"],
//         correctAnswer: 1
//     }
// ];

// const showQuestion = () => {
//     const questionl = document.getElementById("question");
//     const currentQuestion = questions[currentQuestionIndex];
//     questionl.textContent = currentQuestion.question;

//     const answerElements = document.querySelectorAll(".answer");
//     answerElements.forEach((element, index) => {
//         element.textContent = currentQuestion.answers[index];
//         element.classList.remove('correct', 'incorrect');
//     });
// };

// const check = (selectedElement) => {
//     const answerElements = document.querySelectorAll(".answer");
//     const selectedAnswerIndex = Array.from(answerElements).indexOf(selectedElement);

//     const currentQuestion = questions[currentQuestionIndex];
//     if (selectedAnswerIndex === currentQuestion.correctAnswer) {
//         selectedElement.classList.add('correct');
//         score++;
//     } else {
//         selectedElement.classList.add('incorrect');
//     }

//     updateScore();
//     currentQuestionIndex++;

//     if (currentQuestionIndex < questions.length) {
//         setTimeout(showQuestion, 1000);
//     } else {
//         alert("Quiz finished! Final score: " + score);
//     }
// };

// const updateScore = () => {
//     const scoreElement = document.getElementById('score');
//     scoreElement.textContent = `Score: ${score}`;
// };


// showQuestion();

// const btn = document.querySelector('.btn');
// const modal = document.querySelector('#modal');
// const ads = document.querySelector('#ads');
// const lay = document.querySelector('#overlay');

// btn.addEventListener("click", () => {
//     modal.style.display = "flex";
//     lay.style.display = "flex";
// });

// const clossmodall = (element, first, second) => {
//     element.addEventListener("click", () => {
//         first.style.display = "none";
//         second.style.display = "none";
//     });
// };

// clossmodall(ads, modal, lay);
// clossmodall(lay, modal, lay);


// const input = document.getElementById('numberInput');
// const button = document.getElementById('calculateBtn');
// const resultDiv = document.getElementById('result');

// function calculateAverage(input) {
//     const numbers = input.split(':').map(Number); 
//     if (numbers.some(isNaN)) return null; 
//     return numbers.reduce((a, b) => a + b, 0) / numbers.length || 0;
// }


// function showAverage() {
//     const input = document.getElementById('nums').value; 
//     const average = calculateAverage(input);
//     document.getElementById('output').textContent = 
//         average !== null ? `Average: ${average}` : "Please enter valid numbers!";
// }


// const user = {
//     name: 'toko',
//     surname: 'kh',
//     age:20,
//     address:function (){
//        console.log('varancovi');
       
//     }
// }
// console.log(
//     user.name,
//     user.surname,
//     user.age,
    
    
// );
// user.address()

// const user10 =user;
// user10.name='temo'

// console.log(user10.name);


// const New=[0,1,2,{name:'sam'},4]
// for( let i=0;i<New.length;i++){
//     console.log(New[i]);
    
// }
// console.log(New);


// const Saxeli = ['gio','dato','saba','nika']

// for (const names of Saxeli){
//     console.log(names);
    
// }


// function round(){
//     return parseInt(Math.random()*5)+1
// }
// let result = round()

// console.log(result);
 
// while(result !==3){
//     result=round()
// console.log(result);

// }
// //  for each
// const numbers1 = ['geo','eng','usa','ind','frc']
// numbers1.forEach(function(element,index){
//     console.log(index + 'text'+element);
    
// })
// // Map
// const map1 = ['geo','eng','usa','ind','frc']
// map1.map(function(element,index){
//     return index + 'text'+element
    
// })
// console.log(map1);

// // Filter
// const arrays =[12,23,45,67]

// const filter1 =arrays.filter(function(element){
//     return element >= 35
// })
// console.log(arrays);

// console.log(filter1);
// // Find იმ რიცხვს და იმ ცვლადს ამოიღებს რომელიც არის მასივში ,თუ შეიტან ისეთ რიცხვს ან ცვლადს რომელიც არ არის მასივში გამოიტანს undefinds
// const find1 = arrays.find(function(el){
//     return el == 3
//     // return el >20 გამოიტანს იმ პირველ რიცხვს რომელიც მეტია 20-ზე
// })
// console.log(find1);


// let numbers = [1, 2, 3];
// numbers.forEach((num) => console.log(num * 2));


// let doubled = numbers.map((num) => num * 2);
// console.log(doubled);


// // ES6 way
// // object
// const guest = {
//     name:'george',
//     surname:'washington',
//     from:'Usa'
// }
// const {name,surname,from} =guest
// console.log(name,surname,from);
// // arrays
// const randoms = ['usa','france','italy']
// const [usa,france,italy] = randoms
// console.log(usa,france,italy);
// // arrays გამოტოვება
// const Country= ['Usa','france','Italy']
// const [a, ,b] = Country
// console.log(a,b);


// const names2 = {
//     name3:'a',
//     surname3:'b',
//     age:22,
//     address: {
//       country:'Usa',
//       city:'DC'
//     },
//     preaddress:['georgia','france','italy']
// }
// const {name3,surname3,age,address:{country,city},preaddress=[a,,b]} =names2
// console.log(name,surname,age,country,city,a,b);

// const ff = ({address:{city}}) =>{
// return "city is" + ' ' + city
// }
// console.log(ff(names2));

// // ES6 function
// // use this one ``
// const us = (name) => {
//     return `Hello  ${name}`
// }
// console.log(us('Tornike'));

// // better version than last one
// const uss = name => `Hi ${name}`
// console.log(uss('Tom'));
// // თუ მონაცემს ამოვშლით ან არ შევიყვანთ ობიექტსი კოდი არ გაიქრაშება აჩვენებს მხოლოდ undefiend
// const ob = {
//     name:'t',
//     age:40
// }
// const {address:{cities}={}}=ob
// console.log(cities);


// // Deep copy
// const user0 = {
//     name:'George',
//     surname:'washington',
//     from:{
//         country:'USA',
//         city:'New-York'
//     }
// }
// const user9={
//     ...user0,
//     from:{
//         ...user0.from
//     }
// }
// user9.from.country='ENG'
// console.log(user0.from.country);
// console.log(user9.from.country);


// const calculatesum = (...args)=>{
//     let total=0
//     for(const num of args){
//         total+=num;
//     }
//     return total
// }
// console.log(calculatesum(2,2,3,4,5,6,7,));


function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
async function makeToy(timeToMake) {
    console.log("Toy production started...");
    await mySetTimeout(timeToMake);
    console.log("Toy production completed!");
}

async function deliverToys(timeToDeliver) {
    console.log("Toy delivery started...");
    await mySetTimeout(timeToDeliver);
    console.log("Toy delivery completed!");
}

async function toyShopWorkflow(timeToMake, timeToDeliver) {
    console.log("Welcome to the Toy Shop!");

    
    await makeToy(timeToMake);

    
    await deliverToys(timeToDeliver);

    console.log("All tasks are done!");
}


const timeToMake = 3000; 
const timeToDeliver = 2000; 

toyShopWorkflow(timeToMake, timeToDeliver);
