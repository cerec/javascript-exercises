const repeatString = function (string, num) {
    if (num < 0) { return 'ERROR' }
    let counter = 0;
    let result = '';
    while (counter < num) {
        result = result.concat(string);

        counter++;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
