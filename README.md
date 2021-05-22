Making my own edits to pre-made code to a webpage that generates random passwords allowing the user to customize their own password. When prompted, the user will encounter multiple prompts that will ask the user how they would like to generate their password. Such prompts will ask how many characters, between 8-128, would like to be used and if uppercase, lowercase, and special characters would like to be used in the generated password. 
This specific activity is geared towards writing specific functions that meet all the criteria for the new random password and the user will have their new generated password displayed once following through all the alerted prompts.


GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page