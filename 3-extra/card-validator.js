function validate_cardNumber(cardNum) {
  // casting cardNum into a set to see if it has length > 1 => meaning has representation of more than one unique number
  let unique_nums = new Set(cardNum);

  // Sum of cardNum digits must be greater than 16, using reduce method:
  // Split into array to be able to use reduce to get sum
  let sum_num = cardNum
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

  // using isNan to check if its not true then its a number
  if (
    !isNaN(cardNum) &&
    cardNum.length == 16 &&
    unique_nums.size > 1 &&
    cardNum[cardNum.length - 1] % 2 == 0 &&
    sum_num > 16
  ) {
    return `${cardNum} is Valid!`;
  } else {
    return `${cardNum} is NOT Valid!`;
  }
}

// Failing Tests
let test1 = "a92332119c011112"; //(invalid characters)
let test2 = "4444444444444444"; //(only one type of number)
let test3 = "1111111111111110"; //(sum less than 16)
let test4 = "6666666666666661"; //(odd final number)

// Working Tests

let test5 = "6666666666661666";
let test6 = "9999777788880000";

console.log(validate_cardNumber(test6));

/*
REQUIREMENTS:

=> test for:

    <Y> cardNum is all numbers
    <Y> cardNum.length === 16
    <Y> at least 2 digits represents out of [0,1,2,3,4,5,6,7,8,9] => use Set()??
    <Y> cardNum[-1]%2 === 0
    <Y> cardNum.reduce((a, b) => a + b, 0) //must be greater than 16

*/
let sum_num = test6
  .toString()
  .split("")
  .map(Number)
  .reduce(function (a, b) {
    return a + b;
  }, 0);

console.log(sum_num > 16);

let unique_nums = new Set(test6);

console.log(unique_nums.size);

console.log(test6[test6.length - 1] % 2);
