// Assignment code here

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","+","?","~","-"];



//Function to determine the length of the password
function passwordLength(){
  
  //prompts the user to enter a number value
  let numberValue = prompt("Choose the number of characters you want your password to be (between 8-128): ");

  if (numberValue < 8 || numberValue >128){
    alert("Your password needs to be between 8 and 128 characters");
    passwordLength();
  }
  //makes sure a number value is entered 
  else if (isNaN(numberValue)){
    alert("Please enter a number between 8-128");
    passwordLength();
  }
  else {
    confirm("Your Password is "+numberValue+" characters");
  }

  return numberValue;
}

passwordLength();



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