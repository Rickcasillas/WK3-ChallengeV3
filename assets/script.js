// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
    var userInput = window.prompt("How long would you like the password to be?")
    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
        window.alert("Invalid")
        return
    }

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Invalid")
    }

    var UserWantsNumbers = window.confirm("Include numbers?")
    var UserWantsNumbers = window.confirm("Include symbols?")
    var UserWantsNumbers = window.confirm("Include lowercase?")
    var UserWantsNumbers = window.confirm("Include uppercase?")

    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var symbols = ["!", "@", "#", "$", "%"]
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
