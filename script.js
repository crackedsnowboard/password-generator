// Assignment Code
var generateBtn = document.querySelector("#generate");
// this var was provided

var arrLowerLetter = ["abcdefghijklmnopqrstuvwxyz"];
var arrUpperLetter = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var arrSpecialCharacter = ["!@#$%^&*()"];
var lowerChoice;
var upperChoice;
var numberChoice;
var specialChoice;
var userLength;
var passwordSecret = [];
var randomNum;
var randomFunction = [randomNumber, randomSpecial, randomLower, randomUpper];
var passwordStore = ""
var userLength;

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function confirmChoices() {
  var userLength = parseInt(prompt("Please select the length of your password. Please choose a number between 8 - 128"));
  if ((userLength > 8) && (userLength <= 128)) {
    alert("Your chosen password length is: " + userLength);
  }
  else {
    alert("You have not selected a number between 8 - 128.");
    return
  }

  lowerChoice.push(confirm("Do you want lower case letter as part of your password?"));
  upperChoice.push(confirm("Do you want upper case letters as part of your password?"));
  numberChoice.push(confirm("Do you want numbers as part of your password?"));
  specialChoice.push(confirm("Do you want special characters as part of your password?"));
}

function randomNumber() {
  var randomNum = Math.floor(Math.random() * 10);
  passwordStore.push(randomNum);
}

function randomLower() {
  var randomLowerLetter = Math.floor(Math.random() * 26);
  passwordStore.push(arrLowerLetter[randomLowerLetter]);
}

function randomUpper() {
  var randomUpperLetter = Math.floor(Math.random() * 26);
  passwordStore.push(arrUpperLetter[randomUpperLetter]);
}

function randomSpecial() {
  var randomSpecialLetter = Math.floor(Math.random() * 12);
  passwordStore.push(arrSpecialCharacter[randomSpecialLetter]);
}

function generatePassword() {
  for (i = 8; i <= userLength; i++) {
    if (lowerChoice) {
      randomLower();
    }
    if (upperChoice) {
      randomUpper();
      i++
    }
    if (specialChoice) {
      randomSpecial();
      i++
    }
    if (numberChoice) {
      randomNumber();
      i++
    }
  }
  return passwordStore;
}


confirmChoices();
generatePassword();


generateBtn.addEventListener("click", writePassword);

