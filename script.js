// Assignment Code
var generateBtn = document.querySelector("#generate");

// make sure button works
function getPassword() {

  //prompt user to password lenght least 8 characters and no more than 128 characters
  let keyLength = prompt("Please pick a lenght of password from 8 to 128 charaters.");

  var uppercase = confirm("Your password should have an uppercase letter!")
  //if (userInput != '' && userInput != null) {
  // return("Does not meet requirements.") 
  // }
  var lowercase = confirm("Your password should have a lowercase letter!")
  var Symbols = confirm("Your password should have a symbol!")
  var numbers = confirm("Your password should have a number!")

  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // let text = "Would you like to include Lowercase letters?";
  // if (confirm(text) == true) {
  //   text = "You pressed OK!";
  // } else {
  //   text = "You canceled!";
  // }
  //let answer = prompt("Would you like to include Uppercase letters?");

  // let text2 = "Would you like to include Uppercase letters?";
  // if (confirm(text2) == true) {
  //   text2 = "You pressed OK!";
  // } else {
  //   text2 = "You canceled!";
  // }
  // //let person = prompt("Would you like to include numeric items?");

  // let text3 = "Would you like to include numeric items?";
  // if (confirm(text3) == true) {
  //   text3 = "You pressed OK!";
  // } else {
  //   text3 = "You canceled!";
  // }

  //let person = prompt("Would you like to include special characters?");
  // let text4 = "Would you like to include special characters?";
  // if (confirm(text4) == true) {
  //   text4 = "You pressed OK!";
  // } else {
  //   text4 = "You canceled!";
  // }
  // var uppercaseABC = confirm("Your password should have an uppercase letter!");
  // console.log("hey you clicked the button")

  //input should be validated and at least one character type should be selected
  if (keyLength < 8 || keyLength > 128) {
    writePassword("Your password does not meet length requirement")
  }

  // if (text === text2 && text3 && text4 === false){
  //   return(" Your password does not meet requirements.")
  //}

  //return("your password here")

  //available chars to pull from code idea from Traverst Media Youtube
  function getRandomLower() {
    console.log()
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const Symbols = "!@#$%^&*()?<|=+:;,[]"
    return Symbols[Math.floor(Math.random() * Symbols.length)];
  }

  //List of defined variables
  var uppercaseABC = getRandomUpper;
  var lowercaseABC = getRandomLower;
  var specialSymbols = getRandomSymbol;
  var numeric = getRandomNumber();
  var multiSelect = [];
  var randomKey = ""

  //call for critieria material
  if (lowercaseABC) { multiSelect += lowercaseABC; }
  if (uppercaseABC) { multiSelect += uppercaseABC; }
  if (numeric) { multiSelect += numeric; }
  if (specialSymbols) { multiSelect += specialSymbols; }
  console.log(multiSelect)
  for (i = 0; i < keyLength; i++) {
    randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
  }
  console.log(randomKey)
  return (randomKey);

}
console.log("you got to here!")

// Write password to the #password input
var passwordText = document.querySelector("#password");
function writePassword(randomKey) {
  if (password.length === 0) {
    return;
  }
  passwordText.value = randomKey;
}

// Add event listener to generate button. This is a Call To Action (CTA button)
generateBtn.addEventListener("click", function () { writePassword(getPassword()) });
