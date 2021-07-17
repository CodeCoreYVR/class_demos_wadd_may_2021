let input =process.argv.slice(2);

 const number =  input[0];
 //console.log(number);
 const number1 = input[1];
 //console.log(number1);


for (let i=1; i <= 100; i++) {
    if (i % number1 === 0 ) {
      
        console.log(i);
       
}
}