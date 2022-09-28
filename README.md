# Password-Generator

## Image 
![PassWord](./assets/Password%20Generator.JPG)

## Overview

## Technologies Used
- JavaScript
- CSS
- HTML
- Git
- GitHub

## Code Snippet
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