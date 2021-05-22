// Assign button to generate password
const generateBtn = document.querySelector("#generate");


// Create function to prompt user to enter number of characters for password
function getPasswordLength(){
    const  passwordLength = 0;
    while(passwordLength  > 128 || passwordLength  < 8){
      passwordLength = prompt('Please enter a valid password length (8 to 128 characters)');
    }
      return passwordLength;
}

// Assign constants to character types for user to choose from - using ASCII character codes
const UPPERCASEcharCodes = arrayFromLowToHigh(65, 90)
const LOWERCASEcharCodes = arrayFromLowToHigh(97, 122)
const NUMBERScharCodes = arrayFromLowToHigh(48, 57)
const SPECIALcharCodes = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64).concat(
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
))

// Create function to allow users to select which character types will be used in generated password
function getPasswordCharTypes(){
    const includeUppercase = confirm('Would you like to include Upper case characters?')
    const includeLowercase = confirm('Would you like to include Lower case characters?')
    const includeNumbers = confirm('Would you like to include numerical characters?')
    const includeSymbols = confirm('Would you like to include special (!,@,*,&) characters?')
        if(includeUppercase == true) {
            includeUppercase + UPPERCASEcharCodes
        }
        if(includeLowercase == true) {
            includeLowercase + LOWERCASEcharCodes
        }
        if(includeNumbers == true) {
            includeNumbers + NUMBERScharCodes
        }
        if(includeSymbols == true) {
            includeSymbols + SPECIALcharCodes
        }
}

// Create function to assign ASCII character ranges into an array
function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

// Create function to combine all functions and write password for user
function writePassword() {
    const password = writePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    String.fromCharCode(65)
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);