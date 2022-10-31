// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  let answerKey = {
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    w: "",
    x: "",
    y: "",
    z: "",
  };

  // function to check if character is a letter
  function charIsLetter(char) {
    if (typeof char !== "string") {
      return false;
    }

    return char.toLowerCase() !== char.toUpperCase();
  }

  // function to check if string has all unique characters
  function unique_char(string) {
    for (let i = 0; i < string.length; i++) {
      for (let j = i + 1; j < string.length; j++) {
        if (string[i] == string[j]) {
          return false;
        }
      }
    }
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // error handling
    if (alphabet == null || alphabet.length != 26) {
      return false;
    }

    // to check if alphabet is unique
    let uniqueCheck = unique_char(alphabet);
    if (uniqueCheck == false) {
      return false;
    }

    // to finish defining the answerKey with given cipher
    let i = 0;
    for (let orig in answerKey) {
      answerKey[orig] = alphabet[i];
      i++;
    }

    // make sure to lowercase the input + variables
    let lowerCaseMessage = input.toLowerCase();
    let encodedMessage = "";
    let decodedMessage = "";

    // ENCODING SECTION
    if (encode == true) {
      //go through lowerCaseMessage
      for (let j = 0; j < lowerCaseMessage.length; j++) {
        let letter = lowerCaseMessage[j];
        // checks for special symbols and adds to encoded message
        if (!charIsLetter(letter)) {
          encodedMessage += letter;
        }
        // encodes letters into encodedMessage
        else {
          encodedMessage += answerKey[letter];
        }
      }
      return encodedMessage;
    }
    // DECODING SECTION
    else {
      // go through the message
      for (let k = 0; k < lowerCaseMessage.length; k++) {
        let currentLetter = lowerCaseMessage[k];
        // checks for special symbols and leaves alone in decode
        if (currentLetter == " ") {
          decodedMessage += currentLetter;
        }
        // decodes the remaining letters
        else {
          for (let orig in answerKey) {
            if (answerKey[orig] == currentLetter) {
              decodedMessage += orig;
            }
          }
        }
      }
      return decodedMessage;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
