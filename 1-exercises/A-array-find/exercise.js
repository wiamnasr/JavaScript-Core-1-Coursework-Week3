/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

// function findLongNameThatStartsWithA(nameList){
//   let letters = "";
//   for (i in nameList){
//     letters = nameList[i].split("");
//     if (letters.length > 7 && letters.indexOf("A")==0){
//       letters = nameList[i].join;
//     }
//   }
//   return letters;
// }

function findLongNameThatStartsWithA(name) {
  if (name.length > 7 && name.indexOf("A") == 0) {
    return name;
  }
}

var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
