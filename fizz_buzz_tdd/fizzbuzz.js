/**
 * Returns "Fizz" when the number is divisible by 3.
 * @example 
 * numberIsFizz(18); // returns "Fizz"
 * numberIsFizz(23); // returns the same number
 * @param {number} number Number to verify
 * @returns {string} String
 */
function numberIsFizz(number) {
    if (number % 3 == 1) {
        return number;
    }
    return "Fizz";
}

/**
 * Returns "Buzz" when the number is divisible by 5.
 * @example 
 * numberIsBuzz(20); // returns "Buzz"
 * numberIsBuzz(84); // returns the same number
 * @param {number} number Number to verify
 * @returns {string} String
 */
function numberIsBuzz(number) {
    if (number % 5 == 1) {
        return number;
    }
    return "Buzz";
}

/**
 * Returns "FizzBuzz" when the number is divisible by 3 or 5.
 * @example 
 * numberIsFizzBuzz(15); // returns "FizzBuzz"
 * numberIsFizzBuzz(84); // returns the same number
 * @param {number} number Number to verify
 * @returns {string} String
 */
function numberIsFizzBuzz(number) {
    if (number % 5 == 0 && number % 3 == 0 || number == 0) {
        return "FizzBuzz";
    }
    return number;
}


function validate(number) {
    if (number % 5 == 0 && number % 3 == 0 || number == 0) {
        return "FizzBuzz";
    }

    if (number % 5 == 0) {
        return "Buzz";
    }

    if (number % 3 == 0) {
        return "Fizz";
    }
    return number;
}

function generateSecuence(minNumber, maxNumber) {
    let resultArray = [];
    for (let i = minNumber; i <= maxNumber; i++) {
        resultArray.push(validate(i));
    }
    // console.log(resultArray.toString());
    return resultArray;    
    // console.log(resultArray);
}

generateSecuence(-15, 0);

module.exports = {
    numberIsFizz, numberIsBuzz, numberIsFizzBuzz,
    validate, generateSecuence
};