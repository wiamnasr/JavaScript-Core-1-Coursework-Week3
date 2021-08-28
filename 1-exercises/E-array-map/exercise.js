// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numMult = numbers.map((number) => number * 100);

console.log(numMult);

function multNum(num){
    return num*100;
}

var numMult2 = numbers.map(multNum);
console.log(numMult2);


var numMult3 = numbers.map(function multNum(num) {
  return num * 100;
});
console.log(numMult3);


var numMult4 = numbers.map(function(num){
    return num * 100;
});
console.log(numMult4);

var multNum5 = numbers.map(num => {
    return num * 100;
});
console.log(multNum5);
