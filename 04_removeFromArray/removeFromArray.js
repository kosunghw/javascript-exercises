const removeFromArray = function(array, ...theArgs) {
    let newArray = [];
    for (const item of array) {
        if (!theArgs.includes(item)) {
            newArray.push(item);
        } 
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
