const findTheOldest = function(array) {
    array.forEach(obj=>{
        if (!obj.yearOfDeath) obj.yearOfDeath = new Date().getFullYear()
    })
    const oldest = array.reduce((accumulator, current)=>{
        const currentAge = current.yearOfDeath - current.yearOfBirth;
        const oldestAge = accumulator.yearOfDeath - accumulator.yearOfBirth;
        return currentAge > oldestAge ? current : accumulator;
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
