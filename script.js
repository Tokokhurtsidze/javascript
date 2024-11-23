 

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


// // function mySetTimeout(delay) {
// //     return new Promise((resolve) => {
// //         setTimeout(resolve, delay);
// //     });
// // }
// // async function makeToy(timeToMake) {
// //     console.log("Toy production started...");
// //     await mySetTimeout(timeToMake);
// //     console.log("Toy production completed!");
// // }

// // async function deliverToys(timeToDeliver) {
// //     console.log("Toy delivery started...");
// //     await mySetTimeout(timeToDeliver);
// //     console.log("Toy delivery completed!");
// // }

// // async function toyShopWorkflow(timeToMake, timeToDeliver) {
// //     console.log("Welcome to the Toy Shop!");

    
// //     await makeToy(timeToMake);

    
// //     await deliverToys(timeToDeliver);

// //     console.log("All tasks are done!");
// // }


// // const timeToMake = 3000; 
// // const timeToDeliver = 2000; 

// // toyShopWorkflow(timeToMake, timeToDeliver);


// const percent = (data)=>{
//     let sum=0
//     for(const num of data){
//         sum +=num
//     }
//     const result = data.map((el)=>((el/sum)*100).toFixed(3))
//     return result
// }
// console.log(percent([1,4,5]));


// const perc= (numb)=>{
//     sum=0
//     for(num of numb){
//         sum+=num
//     }
//     const results= numb.map((el)=>((el/sum)*100).toFixed(2))
//     return results
// }

// console.log(perc([2,3,4]));


// const c=[1,2,3,4]
// // ბოლოში ჩაამატა 5
// c.push(5)
// // ბოლოდან ამოიღო 
// c.pop()
// // პირველ ელემენტს შლის მასივიდან
// c.shift()
// // ამატებს პირველ ელემენტს
// c.unshift(0)
// // ამოჭრის ელემენტებს საწყისსა და საბოლოო ინდექსებს შორის
// // console.log(c.slice(1,2));
// // ამოჭრის საწყისიდან ნ რაოდენობამდე მითითებულ ინდექსებს
// console.log(c.splice(2,3));



// const arr =([start,end],arr2)=>{
//     // const result=[]
//     // result.push(arr1[0])
//     // for(const num of arr2){
//     //     result.push(num)
//     // }
//     // result.push(arr1[1]) 

//     // return result
// return [start,...arr2,end]
// }
// console.log(arr([1,2],[5,6,7,8]));


// const saxeli ='toko'
// const s="da da"
// // ადიდებს ასოებს
// console.log(saxeli.toUpperCase());
// // იძებნება თუ არა სტრინგი,თუ არ მოიძებნა აბრუნებს -1 ს
// console.log(saxeli.indexOf('o'));
// // მთავრდება თუ არა v თი
// console.log(saxeli.endsWith('v'));
// // ამოაქვს ინდეხსიდან ასოები ო=1 , ბოლო ო=3 და შლის მას
// console.log(saxeli.substring(1,3));
// // ყოფს ქვეტექსტებად
// console.log(s.split(" "));



// const upper = (words) => {
//     const result = [];
//     for (const st of words) {
//         const capp = [];
//         for (const w of st.split('_')) {
//             const s = w[0].toUpperCase() + w.slice(1);
//             capp.push(s);
//         }
//         result.push(capp.join(' ')); 
//     }
//     return result;
// };
// console.log(upper(['toko_kh','gio_kh','saba_kh']));



// const upp = (words) => {
//     // const result = [];
//     // for (const w of words) {
//     //     const up = [];
//     //     for (const s of w.split('-')) { 
//     //         const m = s[0].toUpperCase() + s.slice(1); 
//     //         up.push(m);
//     //     }
//     //     result.push(up.join(' ')); 
//     // }
//     // return result;

//     // error code
     
//     // return words.map((w)=>w.split(' '))
//     // map((s)=>s[0].toUpperCase+s.slice(1))
//     // .join(" ")
//     return words.map((w) => 
//         w.split('_').map((s) => s[0].toUpperCase() + s.slice(1)).join(' ')
//     );

// };

// console.log(upp(['tom-cruise', 'tom hardy']));




// const deepcopy = (obj) => {
//     if (obj === null || typeof obj !== 'object') {
//         return obj; 
//     }

//     // თუ ობიექტი არის მასივი
//     if (Array.isArray(obj)) {
//         return obj.map((item) => deepcopy(item));
//     }

//     // თუ ობიექტი არის ჩვეულებრივი ობიექტი
//     const result = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result[key] = deepcopy(obj[key]); // რეკურსიული კოპირება
//         }
//     }
//     return result;
// };

// const person2 = {
//     name3: 'a',
//     surname3: 'b',
//     age: 22,
//     address: {
//         country: 'Usa',
//         city: 'DC',
//     },
//     preaddress: ['georgia', 'france', 'italy'],
// };
// const persons2 = deepcopy(person2);
// persons2.name3 = "giga"; 

// console.log("Original:", person2);
// console.log("Deep Copy:", persons2);


// // whole html tags
// const html= document.documentElement
// console.log(html);
// // body
// const body= document.body
// console.log(body);
// // body
// const head= document.head
// console.log(head);


// const aa = document.querySelector(".cc").firstElementChild
// console.log(aa);

// // ჯავასკრიპტში გადინამიურებული ტექსტი
// const divi=document.createElement("div")
// const h2i=document.createElement("h2")
// const  texti=document.createTextNode("Tom")

// const h2i2=document.createElement("h2")
// const  texti2=document.createTextNode("sam")

// h2i2.append(texti2)

// divi.append(h2i,h2i2)
// h2i.append(texti)

// // ფერის შეცვლა
// h2i.style.color="brown"

// h2i2.classList.add("ex")
// h2i2.setAttribute("id","tag")
// document.body.append(divi)

// // შემოტანილი div ის მოშორება
// const div2 =document.createElement("div")
// document.body.append(div2)
// div2.remove()



// const btn2 = document.querySelector("#btn")
// // ღილაკზე დაჭერის შემთხვევაში გამოიტანს lucky day-ს
// // btn2.onclick =function() {
// //     console.log("lucky day");
    
// // }
// // batter version than last one
// btn2.addEventListener("click",()=>{
//     console.log("best choice");
    
// })

// // თუ დააჭერ ღილაკს ამოგიგდებს თეგის მონაცემებს რა კლას ან აიდს შეიცავს და ასე შემდეგ
// const btnbox = document.querySelector("#btn-box")
// // btnbox.addEventListener("click",(e) =>{
// //      console.log(e.target);
     
// // })


// btnbox.addEventListener("click",(e) =>{
//     e.target.style.color="red"
//     e.target.style.background="black"

//     t.style.color="brown"

// })


// const t = document.createElement("h3")
// const o = document.createTextNode("George")

// t.append(o)

// document.body.append(t)


// // const longtext = document.getElementById('text');
// // const button = document.getElementById('btn');

// // button.addEventListener("click", () => {
// //     longtext.style.display = 'none';
// // });

// // // second
// // const div = document.createElement('div');
// // div.setAttribute('id', 'div1');

// // const h2 = document.createElement('h2');
// // h2.textContent = 'Gandalf'; 

// // const href = document.createElement('a');
// // href.setAttribute('href', '#');
// // href.textContent = 'Go to profile'; 

// // div.appendChild(h2);
// // div.appendChild(href);

// // document.body.appendChild(div);
// // // third
// // // let score = 0;


// const class1 = document.querySelector(".ss")
// const sss=class1.querySelectorAll("p")
// sss.forEach(el => el.style.color="red")
// // console.log(sss);


// const ul = document.querySelector("ul")

// const links =ul.querySelectorAll("a")

// // გააყავისფრებს მხოლოდ ლუწებს 
// // for(let i=0;i<links.length;i+=2){
// //     links[i].style.color="brown"
// // }


// // for (let link of links){
// //     const href =link.getAttribute("href")
// //     if(!href)continue
// //     if(href.startsWith("/"))continue
// //         if(href.includes("://"))break
// // link.style.color="red"
// // }

// const isValid = (el) => el.hasAttribute("href")
// const isOurs = (el) => !el.getAttribute("href").startsWith("/")
// const Protected = (el) => !el.getAttribute("href").includes("://")
// const setColor = (el) => el.style.color="red"

// const diflinks =Array.from(links)
// diflinks
// .filter(isValid)
// .filter(isOurs)
// .filter(Protected)
// .forEach(setColor)


// // გამოიტანს კოდს 4 წამის შემდეგ
// setTimeout(()=>{
// console.log("toko");
// },4000)

// dance = (move,callback)=>{
//     console.log(move);
//     callback()
    
// }
// dance("long dance",()=>{
// console.log("wow");

// });

// // promises kodis daweris shemdeg vizaebt then() da catch() rata ar daiqrashos da gamoitanos kodi
// const res= new Promise((resolve,reject)=>{
//     if(Math.random()>0.4){
//         resolve("right")
//     }else{
//         reject("wrong")
//     }
// })

// res
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// .finally(()=>console.log("this was taught"))





// // promises უკეთესი ვერსია 
// // async function sums(){
// //     return 1+2
// // }


// // async function results(){
// //     const ress = await sums()
// //     return ress
// // }

// // console.log(results());


// async function toys(){
  
//         if(Math.random()>0.4){
//             return "undefected"
//         }else{
//            return "Defected"
//         }
    
// }


// async function selltoys (status){
//     if(status==="undefected"){
      
//             if(Math.random()>0.5){
//               return "Toy has been sold"
//             }else{
//                 return "unsuccesful"
//             }
        
//     }
// }


// async function promisefully(){
//     try {
//         const status=await toys()
//         const result=await selltoys(status)
//         console.log(result);
        
//     } catch (error) {
//         console.log(result); 
//     }
// }
// toys()
// .then((status)=>selltoys(status))
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))


// const rep = (str, x, cb)=>{
//     result=str
// for(let i=0;i<x;i++){
//     result=cb(result)
// }
// return result
// }
// const j=rep("toko",4,(str)=>`!${str}!`)
// console.log(j);


// function repeat(str,x,cb){
//     if(x==0) return str
//     return repeat(cb(str),x-1,cb)

// }
// const h= repeat("sam",2,(str)=>`#${str}#`)
// console.log(h);

 
// function guess(num){
// return new Promise((resolve,reject)=>{
// if(typeof num!=='number') rej("error")
// if(num%2==1) setTimeout(()=>resolve("odd"),1000) 
// if(num%2==0) setTimeout(()=>reject("even"),2000)
// })
// }

// guess(4)
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej))


// function repeat(str,x,cb){
//     if(x==0) return str
//     return repeat(cb(str),x-1,cb)

// }
// const h= repeat("sam",2,(str)=>`#${str}#`)
// console.log(h);


const expo = (number,power,cb) =>{
if(power==0)return 1
return cb(number,expo(number,power-1,cb))
}
const ex=expo(3,4,(a,b)=>a*b)
console.log(ex);

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res =>res.json())
// .then(res=>console.log(res))
// .catch(res=>console.log(err))

function usercard(title, body) {
    const postDiv = document.createElement("div"); 
    postDiv.style.border = "1px solid #ddd";
    postDiv.style.margin = "20px";
    postDiv.style.padding = "15px";
    postDiv.style.borderRadius = "8px";
    postDiv.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    postDiv.style.backgroundColor = "#fff";

    const h1 = document.createElement("h1");
    h1.innerHTML = title; 

    const p = document.createElement("p");
    p.innerHTML = body; 
    postDiv.append(h1, p);
    return postDiv; 
}

async function fetchdata(){
    try {
        const rawdata = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!rawdata.ok) {
            throw Error("Not a good request")
        } 
        const data = await rawdata.json(); 
        data.forEach((post) => {
            const postElement = usercard(post.title, post.body); 
            document.body.append(postElement); 
        });
        
        
        
    } catch (error) {
        console.log(error.message);
        
        
    }
}
fetchdata()
