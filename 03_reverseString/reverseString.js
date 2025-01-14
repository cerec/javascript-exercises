const reverseString = function (string) {
    const arrayWithChars = [...string];
    let invertedChars = [];

    for (let index = arrayWithChars.length; index >= 0; index--) {
        const element = arrayWithChars[index];
        invertedChars.push(element);
    }
    return invertedChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
