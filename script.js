 

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
