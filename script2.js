function generatePassword(){
    const length = getPasswordLength ();
    const finalPasswordCharPoolArray = getPasswordCharPoolArray();
    return assemblePassword(finalPasswordCharPoolArray, length);
  }
  
  function getPasswordLength(){
    let passLength = 0;
    while(passLength > 128 || passLength < 8){
      passLength = prompt('Please enter a valid password length (8 to 128 characters)');
    }
      return passLength;
  }
  
  function getPasswordCharPoolArray(){
      const charPoolArray = [];
      const charTypes = [' lowercase', ' uppercase', ' special characters *,!,#,^'];
      const charTypesArray = {
            lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
            uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            specialChar: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '?', '/', '<', '>'],
            numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      }
      charTypes.forEach(handleCharTypes);
      function handleCharTypes(charType){
          const addCharType = confirm(`Would you like ${charTypes} included in your password?`);
          if(addCharType){
              charPoolArrays[charType].forEach(function(char){
                charPoolArray.push(char);
             })
          } 
      }
      return charPoolArray;
  }

  generatePassword();

  function getRandomInt(max) {
      return Math.floor(Math.random() * max)
  }