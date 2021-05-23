// Assign button to generate password
const generateBtn = document.querySelector("#generate");

// Assign constants to character types for user to choose from
const uppercaseCharCodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const lowercaseCharCodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbersCharCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialCharCodes = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '?', '/', '<', '>']

// Create function to prompt user to enter number of characters for password
// Using confirmation prompts, user will OK or Cancel to select character types 
function generateRandomPassword() {
    const charPoolArray = [];
    var resultingPassword = "";
    const passwordLength = prompt('How many characters do you want your password to contain? Strong passwords contain at least 8-128 characters!')
    if(passwordLength <8 || passwordLength > 128){
        alert('Please select a number of characters between 8-128 characters.')
        return;
    }
    // Each confirmation to push character type into a character pool array
        if(confirm('Would you like to include Upper case characters?')){
            charPoolArray.push(uppercaseCharCodes);
        }
        if(confirm('Would you like to include Lower case characters?')){
            charPoolArray.push(lowercaseCharCodes);
        }
        if(confirm('Would you like to include numerical characters?')){
            charPoolArray.push(numbersCharCodes);
        }
        if(confirm('Would you like to include special (!,@,*,&) characters?')){
            charPoolArray.push(specialCharCodes);
        }
        // Loop if user does not select a number between 8-128
        if(charPoolArray.length===0){
            alert('At least one character type must be selected! Please try again!');
            return;
        } else {
        for(var i = 0; i < passwordLength; i++){
            var randomCharType = Math.floor(Math.random()*charPoolArray.length);
            const selectedCharType = charPoolArray[randomCharType];
            var randomChar = Math.floor(Math.random()*selectedCharType.length);
            resultingPassword += selectedCharType[randomChar];
        }
    }
    // Resulting password displayed in password textarea
    document.getElementById("password").textContent = resultingPassword
    return resultingPassword;
}
  

  // Add on click event listener to begin prompting user
generateBtn.addEventListener("click", generateRandomPassword);