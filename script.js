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
var passwordStore = "";
var userLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to generate password
function generatePassword(length) {
  for (i = 8; i <= userLength; i++) {
    
    if (lowerChoice === true) {
      randomLower();
    }
    if (upperChoice === true) {
      randomUpper();
      i++
    }
    if (specialChoice === true) {
      randomSpecial();
      i++
    }
    if (numberChoice === true) {
      randomNumber();
      i++
    }
  }
}
// Function to confirm use choices
function confirmChoices() {
  var userLength = parseInt(prompt("Please select the length of your password. Please choose a number between 8 - 128"));
  if ((userLength > 8) && (userLength <= 128)) {
    alert("Your chosen password length is: " + userLength);
  }
  else {
    alert("You have not selected a number between 8 - 128.");
    return
  }
  var lowerChoice = confirm("Do you want lower case letter as part of your password?");
  var upperChoice = confirm("Do you want upper case letters as part of your password?");
  var numberChoice = confirm("Do you want numbers as part of your password?");
  var specialChoice = confirm("Do you want special characters as part of your password?");

  if (lowerChoice === true) {
    alert("You have choosen lowercase letters");
  }
  if (upperChoice === true) {
    alert("You have choosen uppercase letters");
  }
  if (numberChoice === true) {
    alert("You have choosen numbers");
  }
  if (specialChoice === true) {
    alert("You have choosen special characters");
  }
  if (lowerChoice && upperChoice && numberChoice && specialChoice === false) {
    alert("Please select at least one character type");
  }
}
// Function to get a random number and push choosen number to a global string
function randomNumber() {
  var randomNum = Math.floor(Math.random() * 10);
  passwordStore.push(randomNum);
}

// Function to get a random lower letter and push the letter to a global string
function randomLower() {
  var randomLowerLetter = Math.floor(Math.random() * 26);
  passwordStore.push(arrLowerLetter[randomLowerLetter]);
}

//  Function to get a random uppercase letter and push to a global string
function randomUpper() {
  var randomUpperLetter = Math.floor(Math.random() * 26);
  passwordStore.push(arrUpperLetter[randomUpperLetter]);
}
// Function to get a random special character from an array of special character
function randomSpecial() {
  var randomSpecialLetter = Math.floor(Math.random() * 12);
  passwordStore.push(arrSpecialCharacter[randomSpecialLetter]);
}
generatePassword(userLength);
confirmChoices();
writePassword();

generateBtn.addEventListener("click", writePassword);

