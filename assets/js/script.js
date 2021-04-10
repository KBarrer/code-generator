var getRandomLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
var getRandomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
var getRandomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 
var getRandomSymbol = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}"]

var possibleChar = [];

function generatePassword() {
  var pwdLen = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(pwdLen) || pwdLen < 8 || pwdLen > 128) pwdLen = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

  var alphaUpper = confirm("Would you like to use uppercase letters?");
  var alphaLower = confirm("Would you like to use lowercase letters?");
  var number = confirm("Would you like to use numbers?");
  var symbol = confirm("Would you like to use special characters?");

  while (!alphaUpper && !alphaLower && !number && !symbol) {
    alert("You must select at least one character type!");
    alphaUpper = confirm("Would you like to use uppercase letters?");
    alphaLower = confirm("Would you like to use lowercase letters?");
    number = confirm("Would you like to use numbers?");
    symbol = confirm("Would you like to use special characters?");
  }

  if (alphaLower) {
    possibleChar += (getRandomLower.join(""));
  }
  // do all of the options!!!!!
  if (alphaUpper) {
    possibleChar += (getRandomUpper.join(""));
  }
  
  if (number) {
    possibleChar += (getRandomNumber.join(""));
  }
  
  if (symbol) {
    possibleChar += (getRandomSymbol.join(""));
  }

  var passwordOptions = {
    pwdLen: pwdLen,
    alphaUpper: alphaUpper,
    alphaLower: alphaLower,
    number: number,
    symbol: symbol
  };

  var options = passwordOptions;

for (var i = 0; i < pwdLen; i++){

  var password = possibleChar;

};



  var randPassword = Array(pwdLen).fill(possibleChar).map(function(x) {return x[Math.floor(Math.random() * x.length)]}).join('');


  var passwordText = document.querySelector("#password");
    
  passwordText.value = randPassword;
  
  return;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);









































// function generatePassword() {


// // 2 for loops 
// // one goes over all options together

// for (i = 0; i < pwdLen; i++) {

// }

// //   // one mix in guarantee characters

// //   // return result .join

// };

// console.log(generatePassword());



