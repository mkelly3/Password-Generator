// Assignment code here
let numberValue = prompt("Please enter a number: ")

if (numberValue < 8 || numberValue >128){
  alert("Your password needs to be between 8 and 128 characters");
}
else{
  confirm("Your Password is "+numberValue+" characters");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);