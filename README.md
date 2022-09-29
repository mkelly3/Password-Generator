# Password-Generator

## Image 
![PassWord](./assets/Password%20Generator.JPG)
- [WebPage](https://mkelly3.github.io/Password-Generator/)

## Overview
This application generates a random password. The user inputs specific paramaters including the password lenght and the character type used such as uppercase, lowercase, special characters and numbers. If the certain parameters are not meet the user is alerted and asked to input new values. 

## Technologies Used
- JavaScript
- CSS
- HTML
- Git
- GitHub

## Code Snippet

This code snippet uses the prompt,alert and confirm functions in JavaScrip.
``` 
{
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
```

## Author Links
- [GitHub](https://github.com/mkelly3)
- [Linkedin](https://www.linkedin.com/in/morgan-kelly15/)