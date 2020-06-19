// Assignment Code
var generateBtn = document.querySelector("#generate");
// this var was provided

var arrLowerLetter = ["abcdefghijklmnopqrstuvwxyz"];
var arrUpperLetter = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var arrSpecialCharacter = ["!@#$%^&*()"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Object. values() method is used to return an array whose elements are the enumerable property values found on the object. 
// The ordering of the properties is the same as that given by the object manually is a loop is applied to the properties.
  passwordText.value = password;
}

function generatePassword() {
  var userLength = parseInt(prompt("Please select the length of your password. Please choose a number between 8 - 128"));
  if ((userLength > 8) && (userLength < 128)) {
    alert("User password length: " + userLength);
  }
  else {
    alert("You have not selected a number between 8 - 128.");
  }

  var lowerChoice = confirm("Do you want lower case letter as part of your password?");
  var upperChoice = confirm("Do you want upper case letters as part of your password?");
  var numberChoice = confirm("Do you want numbers as part of your password?");
  var specialChoice = confirm("Do you want special characters as part of your password?");

  
  for (i = userLength; i <= 128; i++) {
    var passwordSecret = [];
    if (numberChoice) {
      var randomNum = Math.floor(Math.random() * 10);
      passwordSecret.push(randomNum); 
    }
    else if (lowerChoice) {
      var randomLowerLetter = Math.floor(Math.random() * 26);
      passwordSecret.push(arrLowerLetter[randomLowerLetter]); 
    }
    else if (upperChoice) {
      var randomUpperLetter = Math.floor(Math.random() * 26);
      passwordSecret.push(arrUpperLetter[randomLowerLetter]);
    }
    else if (specialChoice) {
      var randomSpecialLetter = Math.floor(Math.random() * 10);
      passwordSecret.push(arrSpecialCharacter[randomLowerLetter]);
    }
  }
  return passwordSecret;
}

writePassword();


generateBtn.addEventListener("click", writePassword);

  