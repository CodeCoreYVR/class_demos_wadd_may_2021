//Ashish_poudel
var myArgs = process.argv.slice(2);
var myArg = myArgs[0];
var t= myArg.toString();

var n = t.length;
console.log( n);
if(n>12){
    console.log("Too Long")
}
else if (n<8)
{
    console.log("Too Short")
}
else{
    console.log("Just okay")
}
