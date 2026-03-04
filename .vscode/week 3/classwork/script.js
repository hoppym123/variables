// basic numbers/ basic math operations
const wholeNumber = 5; // whole numbers are of type number
console.log(typeof wholeNumber);
const decimalNumber = 3.14; //decimal numbers are also of type number
console.log(typeof decimalNumber);
const negativeNumber = -10; //negative numbers are still of type number
console.log(typeof negativeNumber);
const infinityNumber = 1 / 0; // infinity is of type number
console.log(typeof infinityNumber);
const notANumber = "hello" / 10; // NaN is of type number
console.log(typeof notANumber);
//arithmetic operations
const number1 = 10;
const number2 = 5;
const number3 = 2;

let result1 = number1 + number2 + number3; // addition
//result1 = `the number one is ${number1}, the number two is ${number2}, and the number three is ${number3}`;//template literal concatenation
console.log(result1);
const result2 = number3 + number2 + number1; // same as above, order does not matter
console.log(result2);
const result3 = number2 + number1 + number3; // same as above, order does matter
console.log(result3);
const result4 = number1 - number2 - number3; // subtraction
console.log(result4);
const result5 = number1 * number2 * number3; // multiplication
console.log(result5);
const result6 = number1 / number2 / number3 % number3; // division
console.log(result6);  
const result7 = number1 % number3; // modulus (remainder of division)
console.log(result7);     
// infinity number
const infinity = number1 / 0;
console.log(infinity);
//exponentiation
const exponentiationResult = number1 ** number3; // 10 to the power of 2
console.log(exponentiationResult);