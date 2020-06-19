// Assignment Code
var generateBtn = document.querySelector("#generate");
// this var was provided

var arrLowerLetter = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrUpperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrSpecialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var specialChoice = true;
var upperChoice = true;
var lowerChoice = true;
var numberChoice = true;
var randomNum = 0;

var userLength = parseInt(prompt("Please select the length of your password. Please choose a number between 8 - 128"));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to generate password
function generatePassword() {
confirmChoices();
var passwordStore = [];
console.log(passwordStore);
  for (i = 0; i <= userLength; i++) {
    console.log(userLength);
    
    if (lowerChoice) {
      var randomLowerLetter = Math.floor(Math.random() * arrLowerLetter.length);
      console.log(randomLowerLetter);
      var lowerPick = arrLowerLetter[randomLowerLetter];
      console.log(lowerPick);
      passwordStore.push(lowerPick);

    }
   
    if (upperChoice) {
      var randomUpperLetter = Math.floor(Math.random() * arrUpperLetter.length);
      console.log(randomUpperLetter);
      passwordStore.push(arrUpperLetter[randomUpperLetter]);
    }
    
    if (numberChoice) {
      var randomNum = Math.floor(Math.random() * 10);
      passwordStore.push(randomNum);
    }
    
    if (specialChoice) {
      var randomSpecialLetter = Math.floor(Math.random() * arrSpecialCharacter.length);
      passwordStore.push(arrSpecialCharacter[randomSpecialLetter]);
    } 
   
  }
  return passwordStore
  
}
// Function to confirm use choices
function confirmChoices() {
  // var userLength = parseInt(prompt("Please select the length of your password. Please choose a number between 8 - 128"));
  if ((userLength > 8) && (userLength <= 128)) {
    alert("Your chosen password length is: " + userLength);
  }
  else {
    alert("You have not selected a number between 8 - 128.");
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

writePassword();

generateBtn.addEventListener("click", writePassword);
