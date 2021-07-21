function reverseString(str) 
{
    return str;
}
console.log(reverseString("hello"));
//rubal codes you can also reverseString by using split and join method


var string="hello";

function reverseString(string) {
    
    var splitString = string.split(""); 
 
    
    var reverseArray = splitString.reverse(); 
 
   
    var joinArray = reverseArray.join(""); 
        return joinArray; 
}
 
console.log(reverseString(string));
