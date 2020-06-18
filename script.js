// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterChoice = ["Lowercase letter", "Uppercase letter", "Number", "Special Character"];
var passwordComponents = [];
var passwordSecret = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Object. values() method is used to return an array whose elements are the enumerable property values found on the object. 
// The ordering of the properties is the same as that given by the object manually is a loop is applied to the properties.
  passwordText.value = password;
}

function generatePassword() {
  var userLength = prompt("Please select the length of your password. Please choose a number between 8-128");
  if ((userLength > 8) && userLength < 128) {
    console.log("user password length: " + userLength);
}
  else {
    alert("You have not selected a number between 8-128.");
  }

  for (var i = 0; i < 4; i++) {
    confirm("Do you want " + characterChoice[i] + "in your password?");
    passwordComponents.push(characterChoice[i]);
  }
// how to display the whole array in the alert? Why is their an error in my syntax?
  if (passwordComponents.index > 0) {
    alert("You have choosen the following password components: " + passwordComponents[] );
  }
  else if (passwordComponents /*includes number or other specific element - js method? */) {}
  // for (i = userLength; i < 129; i++)
// generate either random number, lower case letter, upper case letter or symbol
// push random selection into an empty array array.push

else {
  alert("You have not choosen any character types for your password!")
}








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
