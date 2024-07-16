const findTheOldest = function(arr) {

    arr.map(item=>{
        if(!item.yearOfDeath){
            item.age = (new Date()).getFullYear() - item.yearOfBirth;
        } else {
            item.age = item.yearOfDeath - item.yearOfBirth;
            return item;
        }
    })

    const sortedArray =  arr.sort((a,b) => {
        return a.age > b.age ? -1 : 1;
    })[0];

    return sortedArray;
};

// Do not edit below this line
module.exports = findTheOldest;
