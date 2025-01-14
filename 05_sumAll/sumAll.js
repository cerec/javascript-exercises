const sumAll = function (initial, end) {
    //process all ERROR handling before executing anything else
    if ((initial < 0 || end < 0) ||
        (!Number.isInteger(initial) || !Number.isInteger(end))) {
        return 'ERROR'
    }

    //before sum, make sure that initial is the lower value
    let result = 0;
    if (initial < end) {
        for (let i = initial; i <= end; i++) {
            result += i;
        }
        return result;
    } else {
        for (let i = end; i <= initial; i++) {
            result += i;
        }
        return result;
    }
}
// Do not edit below this line
module.exports = sumAll;
