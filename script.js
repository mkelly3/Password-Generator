// Assignment code here

var letters ="abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*(?+-><=.";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var length = 8; //if it defaults password must be 8 characters
var upperCase = true;
var number = true;
var specialChar = true;
var lowerCase = true;


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


//function to generate a random password
function generatePassword() {

  passwordLength();
  characterType();

  var password ="";
  var password1 ="";

  if(upperCase === true && lowerCase === true && number === true && specialChar === true){
    password += letters + upperCaseLetters + numbers + specialCharacters;
    // console.log(password);
  }
  else if(upperCase === true && lowerCase === true && number ===true){
    password += letters + upperCaseLetters+ numbers;
    // console.log(password);
  }
  else if(upperCase === true && lowerCase === true && specialChar === true){
    password += letters + upperCaseLetters + specialCharacters;
    // console.log(password);
  }
  else if(upperCase === true && number ===true && specialChar === true){
    password += upperCaseLetters + numbers + specialCharacters;
    // console.log(password);
  }
  else if(lowerCase === true && number ===true && specialChar === true){
    password += letters + numbers + specialCharacters;
    // console.log(password);
  }
  else if(upperCase === true && lowerCase === true){
    password += letters + upperCaseLetters;
    // console.log(password);
  }
  else if(number ===true && specialChar === true){
    password += numbers + specialCharacters;
    // console.log(password);
  }
  else if(upperCase === true&& specialChar === true){
    password += upperCaseLetters + specialCharacters;
    // console.log(password);
  }
  else if( lowerCase === true && number ===true){
    password += letters + numbers;
    // console.log(password);
  }
  else if(upperCase === true && number ===true){
    password += upperCaseLetters + numbers;
    // console.log(password);
  }
  else if(lowerCase === true && specialChar === true){
    password += letters + specialCharacters;
    // console.log(password);
  }
  else if(upperCase){
    password += upperCaseLetters;
    // console.log(password);
  }
  else if(lowerCase === true ){
    password += letters;
    // console.log(password);
  }
  else if( number === true){
    password += numbers;
    //console.log(password);
  }
    
  else{
    password += specialCharacters;
    // console.log(password);
    }

    //for loop to go through all of the characters in password to generate a random one
    for(var i = 0; i < length; i++){
      //random characters from Password
      var random = Math.floor(Math.random() * password.length);
      //adding the randomly selected characters to a new password
      password1 += password.substring(random,random + 1);

  }
  
  return password1;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password =generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);