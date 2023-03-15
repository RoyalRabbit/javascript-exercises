const removeFromArray = function(array, ...args) {
    //Check each index of array  
    const returnArray=[]
    outer:
    for (const argument of array) {
        //Check it against args to remove
        for (const other of args) {
            //if matches, continue to next index of array
            if (other === argument) {
                continue outer;
            }
            //else add to return array
        }
        returnArray[returnArray.length]=argument;
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
