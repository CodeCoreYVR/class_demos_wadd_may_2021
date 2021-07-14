var string="hello";

function reverseString(string) {
    
    var splitString = string.split(""); 
 
    
    var reverseArray = splitString.reverse(); 
 
   
    var joinArray = reverseArray.join(""); 
        return joinArray; 
}
 
console.log(reverseString(string));
