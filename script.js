var generateBtn = document.querySelector("#generate");

function generatePassword(){
  const length = getPasswordLength ();
  const passwordCharPool = getPasswordCharPool();
  return assemblePassword(passwordCharPool, length);
}

function getPasswordLength () {
  let passLength = 0;
  while(passLength > 128 || passLenth < 8){
    passLength = prompt('Please enter a valid password length (8 to 128 characters)');
    return passLength;
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);