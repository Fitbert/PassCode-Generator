// Assignment Code
var generateBtn = document.querySelector("#generate");


// make sure button works
function generatePassword() {
  
  //prompt user to password lenght least 8 characters and no more than 128 characters
  let keyLength = prompt("Please pick a lenght of password from 8 to 128 charaters.");
  
  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  let text = "Would you like to include Lowercase letters?";
  if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  //let answer = prompt("Would you like to include Uppercase letters?");
  
  let text2 = "Would you like to include Uppercase letters?";
  if (confirm(text2) == true) {
    text2 = "You pressed OK!";
  } else {
    text2 = "You canceled!";
  }
  //let person = prompt("Would you like to include numeric items?");
  
  let text3 = "Would you like to include numeric items?";
  if (confirm(text3) == true) {
    text3 = "You pressed OK!";
  } else {
    text3 = "You canceled!";
  }
  
  //let person = prompt("Would you like to include special characters?");
  let text4 = "Would you like to include special characters?";
  if (confirm(text4) == true) {
    text4 = "You pressed OK!";
  } else {
    text4 = "You canceled!";
  }
  
  console.log("hey you clicked the button")
  
//input should be validated and at least one character type should be selected
//if (keyLenght <8 || keyLength > 128) { text}

if (text2 && text3 && text4 === !true){
  return(" Your password does not meet requirements.")
}

//return("your password here")
}
//available chars to pull from code idea from Traverst Media Youtube
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol() {
  const Symbols = "!@#$%^&*"
  return Symbols[Math.floor(Math.random() * Symbols.length)];
}
console.log(getRandomSymbol())
//var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
//var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
//var specialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
//var numeric ="0123456789"
//var multiSelect =[];

//call for critieria material
// if (lowercaseABC) {multiSelect += lowercase;}
// if (uppercaseABC) {multiSelect += uppercase;}
// if (numeric) {multiSelect += numbers;}
// if (specialSymbols) {multiSelect += Symbols;}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
