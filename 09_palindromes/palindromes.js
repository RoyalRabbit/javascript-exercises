const palindromes = function (str) {
    const filtered = str.replace(/\s/g,'').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    const reverseArray = filtered.split('').reverse().join('');
    return filtered === reverseArray;
};

// Do not edit below this line
module.exports = palindromes;
