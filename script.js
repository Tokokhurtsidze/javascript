 

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



    