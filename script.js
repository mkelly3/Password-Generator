// Assignment code here

var letters ="abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*(?+-><=.";
var length;
var upperCase;
var number;
var specialChar;
var lowerCase;


//Function to determine the length of the password
function passwordLength(){
  
  //prompts the user to enter a number value
  length = prompt("Choose the number of characters you want your password to be (between 8-128): ");

  if (length < 8 || length >128){
    alert("Your password needs to be between 8 and 128 characters");
    passwordLength();
  }
  //makes sure a number value is entered 
  else if (isNaN(length)){
    alert("Please enter a number between 8-128");
    passwordLength();
  }
  else {
    confirm("Your Password is "+length+" characters");
  }

  return length;
}

//passwordLength();


//function to confirm what type of characters are used in the password

function characterType(){

  upperCase = confirm("Do you want upper case letters in your password");
  lowerCase = confirm("Do you want lower case letters in your password");
  number = confirm("Do you want numbers in your password");
  specialChar = confirm("Do you want special characters in your password");

  //if else statment to check if at least one character type was chosen
  if(upperCase === false && lowerCase === false && number === false && specialChar === false){
    alert("Please select at least 1 character type for your password");
    characterType();
  }
  else {
    alert("Your Password is being Generated!");
  }

}

//characterType();


//function to generate a randome password
function generatePassword(){

  passwordLength();
  console.log(length)
  characterType();
  password ="";

  if(upperCase === true && lowerCase === true && number ===true && specialChar === true){
    password += letters + letters.toUpperCase + numbers + specialCharacters;
  }
  else if(upperCase === true && lowerCase === true && number ===true){
    password += letters + letters.toUpperCase + numbers;
  }
  else if(upperCase === true && lowerCase === true && specialChar === true){
    password += letters + letters.toUpperCase+ specialCharacters;
  }
  else if(upperCase === true && number ===true && specialChar === true){
    password += letters.toUpperCase + numbers + specialCharacters;
  }
  else if(lowerCase === true && number ===true && specialChar === true){
    password += letters + numbers + specialCharacters;
  }
  else if(upperCase === true && lowerCase === true){
    password += letters + letters.toUpperCase;
  }
  else if(number ===true && specialChar === true){
    password += numbers + specialCharacters;
  }
  else if(upperCase === true&& specialChar === true){
    password += letters.toUpperCase + specialCharacters;
  }
  else if( lowerCase === true && number ===true){
    password += letters + numbers;
  }
  else if(upperCase === true && number ===true){
    password += letters.toUpperCase + numbers;
  }
  else if(lowerCase === true && specialChar === true){
    password += letters + specialCharacters;
  }
  else if(upperCase === true){
    password += letters.toUpperCase;
  }
  else if(lowerCase === true ){
    password += letters;
  }
  else if( number === true){
    password += numbers;
  }
  else{
    password += specialCharacters;
  }

  for(var i=0; i < length; i++)
  {

    password += password.charAt(Math.floor(Math.random() * password.length))
  }
  return password;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password =generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);