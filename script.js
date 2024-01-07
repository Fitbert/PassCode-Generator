// Assignment Code
var generateBtn = document.querySelector("#generate");
// make sure button works
function generatePassword() {
  console.log("hey you clicked the button")
//prompt user to password lenght least 8 characters and no more than 128 characters

//confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//input should be validated and at least one character type should be selected


return("your password here")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
