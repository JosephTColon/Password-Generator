// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numbers = ['1','2','3','4','5','6','7','8','9','0',];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','<','>','?','/','|',];

var characterLength = 8;
var choiceArr = []
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generates password based on promts
function generatePassword(){

}

//generates multiple prompts to get a password together  
function getPrompts(){
    choiceArr = []
    characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
        alert("character length has to be a number, 8 - 128 digits. Please try again.");
        return false;
    }

    if (confirm("would you like UPPERCASE letters in your password?")) {
        choiceArr = choiceArr.concat(upperCase);
    }

    if (confirm("would you like lowercase letters in your password?")) {
        choiceArr = choiceArr.concat(lowerCase);
    }

    if (confirm("would you like special characters in your password?")) {
        choiceArr = choiceArr.concat(specialChar);
    }

    if (confirm("would you like Numbers in your password?")) {
        choiceArr = choiceArr.concat(numbers);
    }
    return true;
}