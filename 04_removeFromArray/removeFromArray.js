const removeFromArray = function (arr, ...del) {
    let result = arr;

    del.forEach(element => {
        result = result.filter(item => item !== element || typeof item !== typeof element);
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
