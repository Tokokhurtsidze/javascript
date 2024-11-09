 

function math(a, b) {
if(a==b){
   return"ტოლია"
}else{
 return"არ არის ტოლი"
}
}
console.log(math(5,6));




function math1(a, b) {
    if(a==b){
       return"ტოლია"
    }else{
     return"არ არის ტოლი"
    }
    }
    console.log(math1("8",8));


function fahrenhait(c){
return(c - 32)*5/9
if(typeof fahrenhait!="number"){
    return false
}else{
 return true
}
}
console.log(fahrenhait(56));



function calculator(num1, num2, num3){
    if((typeof num1 !== "number" || typeof num2 !== "number")){
        return false

    }
    switch(num3){
        case "+":
        return num3=num1+num2
        case "-":
            return num3=num1-num2
        case "*":
                return num3=num1*num2
      case "/":
        return num3=num1/num2
    }
  
}

console.log(calculator(2,3,"*"));



const cars=[1,2,3,4]
console.log(cars[2]);


let i = 2;
for (let i = 0; i < 10; i++) {
  // some statements
  console.log("t");
  
}
i=1;
while (i<3){
    console.log('hello');
    i++;
    
}


// პირველი დავალება

function getYoungestUserName(users) {
    if (users.length === 0) return null;

    let youngestUser = users[0];

    for (let i = 1; i < users.length; i++) {
        if (users[i].age < youngestUser.age) {
            youngestUser = users[i];
        }
    }

    return youngestUser.name;
}

const users = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
];

console.log(getYoungestUserName(users));






// მეორე დავალება

const user = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
];

const user1= [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
];

user1[0].name='Toko'
user1[0].age=20

console.log(user);
console.log(user1);


// მესამე დავალება

function random() {
    return parseInt(Math.random() * 6) + 1; 
}

function game() {
    let attempts = 0; 
    let battempts = 0;
    let aroll = 0;
    let broll = 0;

    
    while (aroll !== 4) {
        aroll = random();
        attempts++;
    }

   
    while (broll !== 4) {
        broll = random();
        battempts++;
    }

   
    if (attempts < battempts) {
        console.log(`winner is Toko Score: ${attempts}`);
    } else if (attempts > battempts) {
        console.log(`winner is Dato  Score: ${battempts}`); 
    } else {
        console.log("draw"); 
    }
}


game();





// პირველი მაგალითის ამოხსნა
const cal =(...number) => {
    if(number.length <=2){
        return "რიცხვების რაოდენობა უნდა იყოს 2-ზე მეტი"
    }

    const sumOfnumber= number[0] + number[1];
    const numTimes = number[2] * number[3];

    return [sumOfnumber,numTimes]
}
console.log(cal(2,3,4,5));

// მეორე მაგალითის ამოხსნა
  const user5 = {
   banks : [
{ Address :{city: "Los Angeles"}},
{ Address :{city:"Califronia"}},
{ Address :{city:"New-York"}},
{ Address :{}}
   ]
}
console.log(user5.banks[2].Address.city);
console.log(user5.banks [{}, {}, {}]);


// მესამე მაგალითი

const person4 = {
    firstname: "Toko",
    Lastname: "Khurtsidze",
    From: "Georgia",
    Address: {
        city:"Tbilisi"
    }

};

const person5 = {
    ...person4,
    Address: {
        ...person4.Address
    }
};
person5.firstname = "Giorgi";
person5.Address.city="Rustavi";

console.log(person4.firstname, person4.Lastname,person4.From,person4.Address.city);
console.log(person5.firstname, person5.Lastname,person5.From,person5.Address.city);







const types = (string, valueToReplace,valueToReplaceWith) => {
    let index= string.indexOf(valueToReplace)
    let newstring=string
    .substr(0,index)
    + valueToReplaceWith
    + string.substr(index+valueToReplace.lenght)
    return newstring

}
console.log(types("i prefer black to blue "," black "," white "))


const upper = (sentence) => {
    const words = sentence.split(" ");
    const upperWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return upperWords.join(" ");
};

console.log(upper("hello world"));


const arr = [
    { name: "Lasha", age: 30 },
    { name: "Saba", age: 20 },
    { name: "Ana", age: 25 }
];

const sortByAge = (users) => {
    return users.slice().sort((a, b) => a.age - b.age);
};

console.log(sortByAge(arr));
 
 

    

