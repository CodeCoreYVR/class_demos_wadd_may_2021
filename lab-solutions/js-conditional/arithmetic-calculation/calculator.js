//Ashish Poudel
var num = process.argv.slice(2);

console.log(num);

const number1 = num[0];
var t = parseInt(number1); 
console.log(number1);

const operator = num[1];
console.log(operator);

const number2 = num[2];
var q = parseInt(number2); 
console.log(number2);

let calculation = "";


    if(operator=='+'){
        calculation=t +q;
        console.log(calculation);

    }
    else if (operator=='-'){
        calculation=t-q;
        console.log(calculation)
    }
    else if (operator=='/'){
        calculation=t/q;
        console.log(calculation)
    }
    else if (operator=='x'||operator=='X'){
        calculation=t*q;
        console.log(calculation)
    }
    else {
        
        console.log(" the right operator");
    }
