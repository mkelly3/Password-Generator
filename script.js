// Assignment code here

var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var characters = "";
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


//function to confirm what type of characters are used in the password

function characterType(){

  var upperCase = confirm("Do you want upper case letters in your password");
  var lowerCase = confirm("Do you want lower case letters in your password");
  var number = confirm("Do you want numbers in your password");
  var specialChar = confirm("Do you want special characters in your password");

  //if else statment to check if at least one character type was chosen
  if(upperCase === false && lowerCase === false && number === false && specialChar === false){
    alert("Please select at least 1 character type for your password");
    characterType();
  }
  else {
    alert("Your Password is being Generated!");
  }

}

characterType();

// //functions that prompts users if they want lowercase, uppercase, numbers or special characters in the password
// function useUpperCase(){
//   var upperCase = prompt("Do you want uppercase letters in your password? (yes or no) ");

//   if(upperCase === null || upperCase === ""){
//     alert("Please answer Yes or no");
//     useUpperCase();
//   }
//   else if(upperCase === "yes" || upperCase === "Yes") {
//     upperCase = true;
//     return upperCase;
//   }
//   else if(upperCase === "no" || upperCase === "No") {
//     upperCase = false;
//     return upperCase;
//   }
//   else{
//     alert("Please answer Yes or no");
//     useUpperCase();
//   }

// }

// // useUpperCase();


// function useLowerCase()  {
//   var lowerCase = prompt("Do you want lowercase letters in your password? (yes or no) ");

//   if(lowerCase === null || lowerCase === ""){
//     alert("Please answer Yes or no");
//     useLowerCase();
//   }
//   else if(lowerCase === "yes" || lowerCase === "Yes") {
//     lowerCase = true;
//     return lowerCase;
//   }
//   else if(lowerCase === "no" || lowerCase === "No") {
//     lowerCase= false;
//     return lowerCase;
//   }
//   else{
//     alert("Please answer Yes or no");
//     useLowerCase();
//   }
  
// }

// // useLowerCase();


// function useSpecialChar() {
//   var special = prompt("Do you want special characters in your password? (yes or no) ");

//   if(special === null ||special === ""){
//     alert("Please answer Yes or no");
//     useSpecialChar;
//   }
//   else if(special === "yes" || special === "Yes") {
//     special = true;
//     return special;
//   }
//   else if(special === "no" || special=== "No") {
//     special= false;
//     return special;
//   }
//   else{
//     alert("Please answer Yes or no");
//     useSpecialChar();
//   }
// }

// // useSpecialChar();

// function useNumbers(){
//   var num = prompt("Do you want numbers in your password? (yes or no) ");

//   if(num === null || num=== ""){
//     alert("Please answer Yes or no");
//     useNumbers();
//   }
//   else if(num === "yes" || num === "Yes") {
//     num = true;
//     return num;
//   }
//   else if(num === "no" || num === "No") {
//     num= false;
//     return num;
//   }
//   else{
//     alert("Please answer Yes or no");
//     useNumbers();
//   }
// }

// useNumbers();



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



//function to generate a randome password
function generatePassword(){
  passwordLength();
  useUpperCase();
  useLowerCase();
  useSpecialChar();
  useNumbers();


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);