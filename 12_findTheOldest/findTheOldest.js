const findTheOldest = function(array) {
    const oldest = array.reduce((oldest, current)=>{
        const oldAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = findAge(current.yearOfBirth, current.yearOfDeath);
        return oldAge > currentAge ? oldest : current;
    })
    return oldest;
};

function findAge(birthyear, deathyear) {
    if (!deathyear) deathyear = new Date().getFullYear();
    return deathyear - birthyear;
};
// Do not edit below this line
module.exports = findTheOldest;
