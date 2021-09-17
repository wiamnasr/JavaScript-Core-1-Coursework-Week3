/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

We have supplied functions which will help you with some of these checks.

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}

// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
  return /[a-z]/.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
  return /[0-9]/.test(string);
}

// Returns true if string contains at least one symbol.
function containsSymbol(string) {
  return /[!#$%.*&]/.test(string);
}

function isLongEnough(string) {
  return string.length >= 5;
}

function validatePasswords(passwords) {
  final_result = [];
  let checking_pass = passwords.map((str) => {
    return (
      containsSymbol(str) &&
      containsNumber(str) &&
      isLongEnough(str) &&
      containsLowercaseLetter(str) &&
      containsUppercaseLetter(str)
    );
  });
  // console.log(checking_pass);

  let findDuplicates = function (arr) {
    return arr.filter((item, index) => arr.indexOf(item) != index);
  };

  let searchValue = findDuplicates(passwords);
  // console.log(searchValue);

  let dup_position = [];

  for (var i = 0; i < searchValue.length; i++) {
    dup_position.push(passwords.lastIndexOf(searchValue[i]));
  }

  // console.log(dup_position);

  if (dup_position.length > 0) {
    for (var pos = 0; pos < dup_position.length; pos++) {
      // console.log(dup_position[pos]);
      checking_pass[dup_position[pos]] = false;
    }
    // console.log(checking_pass);
  }

  return checking_pass;
}

let testArr = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"];

console.log(validatePasswords(testArr));

/* ======= TESTS - DO NOT MODIFY ===== */

test("Example 1", () => {
  expect(
    validatePasswords([
      "Se%5",
      "TktE.TJTU",
      "384#HsHF",
      "dvyyeyy!5",
      "tryT3729",
    ])
  ).toEqual([false, false, true, false, false]);
});

test("Example 2", () => {
  expect(
    validatePasswords([
      "StUFf27%",
      "Pl3nty!",
      "Jai33",
      "shajsaUA**&&",
      "Pl3nty!",
    ])
  ).toEqual([true, true, false, false, false]);
});
