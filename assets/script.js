// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomint(min, max) {
    if (!max) {
        max = min
        min = 0
    }
  
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}

function getrandomitem(list) {
    return list(randomint(0, options.length - 1))
}

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
    var UserWantsSymbols = window.confirm("Include symbols?")
    var UserWantsLowercase = window.confirm("Include lowercase?")
    var UserWantsUppercase = window.confirm("Include uppercase?")

    var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*"]
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    var options = []

    if (UserWantsNumbers === true) {
        options.push(numbersList)
    }

    if (UserWantsSymbols === true) {
        options.push(symbolsList)
    }

    if (UserWantsLowercase === true) {
        options.push(lowercaseList)
    }

    if (UserWantsUppercase === true) {
        options.push(uppercaseList)
    }

    var generatePassword = ""

    for (var i = 0; 1 < passwordLength; i++) {
        var randomlist = getrandomitem(options)
        var randomchar = getrandomitem(randomlist)
        generatedPassword += randomchar
    }

    return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
