const sumAll = function(a, b) {
    
    if (checkError(a,b)) return "ERROR";
    if (b > a) {
        return recSum(a, b);
    } else return recSum(b, a)
};

//Check for errors
const checkError = function(a,b) {
    if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") return true;
    else return false;
}

//Recursive sum function
const recSum = function (a, b){
    if (a === b) return a;
    return b+sumAll(a,b-1);
}
// Do not edit below this line
module.exports = sumAll;
