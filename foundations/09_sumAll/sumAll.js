const sumAll = function(a, b) {

    if(a < 0 || b < 0) return "ERROR";

    const biggerNum = a > b ? a : b;
    const smallerNum = a < b ? a : b;

    let sum = 0;
    for(let i = smallerNum; i <= biggerNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
