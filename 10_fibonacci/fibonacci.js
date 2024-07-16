const fibonacci = function(a) {
    if(a < 0) return "OOPS";
    if (+a === 0) {
        return 0;
    } else if(+a === 1 || +a === 2) {
        return 1;
    } else {
        return fibonacci(+a - 2) + fibonacci(+a - 1);
    }

};

// Another solution:
// const fibonacci = function(countArg) {
//     // checks argument's type and makes sure we use 
//     // a number throughout rest of function.
//     let count
//     if (typeof countArg !== 'number') {
//         count = parseInt(countArg)
//     } else {
//         count = countArg
//     }

//     if (count < 0) return "OOPS";
//     if (count == 0) return 0;

//     let firstPrev = 1;
//     let secondPrev = 0;

//     for (let i = 2; i <= count; i++) {
//         let current = firstPrev + secondPrev;
//         secondPrev = firstPrev;
//         firstPrev = current;
//     }

//     return firstPrev;

// };

// Do not edit below this line
module.exports = fibonacci;
