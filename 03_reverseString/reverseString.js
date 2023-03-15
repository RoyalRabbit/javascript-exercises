const reverseString = function(inputString) {
let length = inputString.length-1;
let returnString = "";
while (length >= 0) {
    returnString += inputString.charAt(length);
    length -= 1;
}
return returnString;

};

// Do not edit below this line
module.exports = reverseString;
