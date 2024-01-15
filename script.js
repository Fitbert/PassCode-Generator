// Assignment Code
 var generateBtn = document.querySelector("#generate");

// make sure button works
function getPassword() {

  //prompt user to password lenght least 8 characters and no more than 128 characters
  let keyLength = prompt("Please pick a lenght of password from 8 to 128 charaters.");
       if (keyLength < 8 || keyLength > 128) {
       writePassword("Your password does not meet length requirement")
  }
  

  var uppercase = confirm("Your password should have an uppercase letter!")
      if (uppercase != true ) {
      writePassword("Does not meet requirements.") 
   }
  var lowercase = confirm("Your password should have a lowercase letter!")
  var Symbols = confirm("Your password should have a symbol!")
  var numberss = confirm("Your password should have a number!")
  
  //input should be validated and at least one character type should be selected
  if (uppercase.lenth !== true){
    alert ("You must have one uppercase letter in your password.")
    
  }
    
  
  //available chars to pull from code idea from Traverst Media Youtube
  function getRandomLower() {
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

  // const numbers = [1,2,3,4,5,6,7,8,9,0]
  // const symbols =["!","@","#"]
  // const characterCodes = Array.from(Array(26).map( ( _, i) => i + 97));
  // const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
  // const uppercaseLetters = lowercaseLetters.map(letter=> letter.toUpperCase())



  //List of defined variables
  var uppercaseABC = getRandomUpper();
  var lowercaseABC = getRandomLower();
  var specialSymbols = getRandomSymbol();
  var numeric = getRandomNumber();
  var multiSelect = [];
  var randomKey = ""

//   //call for critieria material
  if (lowercaseABC) { multiSelect += lowercaseABC; }
  if (uppercaseABC) { multiSelect += uppercaseABC; }
  if (numeric) { multiSelect += numeric; }
  if (specialSymbols) { multiSelect += specialSymbols; }
  
  for (i = 0; i < keyLength; i++) {
    randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
  }
  console.log(randomKey);
  return (randomKey);

}
console.log("you got to here")

// Write password to the #password input
var passwordText = document.querySelector("#password");
function writePassword(randomKey) {
  if (password.length === 0) {
    return;
  }
  passwordText.value = randomKey;
}

 // Add event listener to generate button. This is a Call To Action (CTA button)
 generateBtn.addEventListener("click", function () { writePassword (getPassword()) });
