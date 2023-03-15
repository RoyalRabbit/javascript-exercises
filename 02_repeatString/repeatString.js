const repeatString = function(message,num) {
    let returnStr=''
    if (num < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
            returnStr += message;
        }
    }
    return returnStr
};

repeatString();

// Do not edit below this line
module.exports = repeatString;
