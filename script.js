// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Make loop to contain at least one of each
// character types and between 8 and 128 characters.

function getPasswordOptions() {
  var passwordLength = prompt("Enter a password length between 8 and 128.");

  if (passwordLength < 8 || passwordLength > 128) {
    return "Invalid password length. Please enter a value between 8 and 128.";
  }

  var lowercase = prompt("Do you want lowercase characters? [y/n]");
  if (lowercase.toLowerCase() !== 'y' && lowercase.toLowerCase() !== 'n') {
    return "Invalid input. Please enter 'y' or 'n'.";
  }
  if (lowercase.toLowerCase() === 'n') {
    lowercase = false;
  } else {
    lowercase = true;
  }

  var uppercase = prompt("Do you want uppercase characters? [y/n]");
  if (uppercase.toLowerCase() !== 'y' && uppercase.toLowerCase() !== 'n') {
    return "Invalid input. Please enter 'y' or 'n'.";
  }
  if (uppercase.toLowerCase() === 'n') {
    uppercase = false;
  } else {
    uppercase = true;
  }

  var numeric = prompt("Do you want numeric characters? [y/n]");
  if (numeric.toLowerCase() !== 'y' && numeric.toLowerCase() !== 'n') {
    return "Invalid input. Please enter 'y' or 'n'.";
  }
  if (numeric.toLowerCase() === 'n') {
    numeric = false;
  } else {
    numeric = true;
  }

  var specialCharacters = prompt("Do you want special characters? [y/n]");
  if (specialCharacters.toLowerCase() !== 'y' && specialCharacters.toLowerCase() !== 'n') {
    return "Invalid input. Please enter 'y' or 'n'.";
  }
  if (specialCharacters.toLowerCase() === 'n') {
    specialCharacters = false;
  } else {
    specialCharacters = true;
  }
  return {
    length: parseInt(passwordLength),
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    specialCharacters: specialCharacters,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var characters = [];
  if (options.lowercase) {
    characters = characters.concat(lowerCasedCharacters);
  }
  if (options.uppercase) {
    characters = characters.concat(upperCasedCharacters);
  }
  if (options.numeric) {
    characters = characters.concat(numericCharacters);
  }
  if (options.specialCharacters) {
    characters = characters.concat(specialCharacters);
  }
  if (characters.length === 0) {
    return "You must select at least one character type.";
  }
  var password = '';
  for (let i = 0; i < options.length; i++) {
    var randomChar = getRandom(characters);
    password += randomChar;
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);