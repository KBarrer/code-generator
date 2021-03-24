// Assignment code here
function options() {
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

  var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*?";
  var randPassword = Array(pwdLen).fill(pwdChars).map(function(x) {return x[Math.floor(Math.random() * x.length)]}).join('');
  console.log(randPassword);

};
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", options);
generateBtn.addEventListener("click", writePassword);
