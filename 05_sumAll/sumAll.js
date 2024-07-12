const sumAll = function(firstInteger, secondInteger) {
    let sum = 0;
    if (firstInteger < 1 || typeof firstInteger !== "number" || typeof secondInteger !== "number") {
        return "ERROR";
    } 
    if (firstInteger < secondInteger) {
        while (firstInteger <= secondInteger) {
            sum += firstInteger;
            firstInteger++;
        }
    } else {
        while (secondInteger <= firstInteger) {
            sum += secondInteger;
            secondInteger++;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
