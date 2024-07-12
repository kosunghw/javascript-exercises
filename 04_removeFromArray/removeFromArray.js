const removeFromArray = function(array, ...theArgs) {
    for (const argument of theArgs) {
        let i = 0;
        do {
            if (array[i] === argument) {
                array.splice(i, 1);
                continue;
            }
            i++;
        } while (i < array.length);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
