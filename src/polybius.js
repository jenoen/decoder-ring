// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  let polybiusKey = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    // your solution code here
    let lowercaseInput = input.toLowerCase();
    let encodedMessage = "";
    let decodedMessage = "";

    // ENCODER SECTION
    if (encode == true) {
      // loop through lowercaseInput
      for (let i = 0; i < lowercaseInput.length; i++) {
        let currentLetter = lowercaseInput[i];
        // if there is a space in the message
        if (currentLetter == " ") {
          encodedMessage += " ";
        }
        // if the current letter is either i/j >> add "42"
        if (currentLetter == "i" || currentLetter == "j") {
          encodedMessage += "42";
        }
        // loop through polyKey and see if currentLetter matches the value >> add numberKey to encodedMessage
        for (let keyCode in polybiusKey) {
          if (currentLetter == polybiusKey[keyCode]) {
            encodedMessage += keyCode;
          }
        }
      }
      return encodedMessage;
    }

    // DECODER SECTION
    // take out the spaces in the input
    else if (encode == false) {
      let noSpaceHiddenMessage = input.split(" ").join("");
      // check if length is odd number >> return false;
      if (noSpaceHiddenMessage.length % 2 != 0) {
        return false;
      }

      for (let j = 0; j < input.length; j += 2) {
        let doubleNumber = input[j] + input[j + 1];
        let currentLetter = input[j];
        // if currentLetter is a space
        if (currentLetter == " ") {
          decodedMessage += " ";
          j--;
        }
        // if doubleNumber is 42 >> must print out i/j
        else if (doubleNumber == "42") {
          decodedMessage += "(i/j)";
        }
        // add polylKey[doubleNumber] to decodedMessage
        else {
          decodedMessage += polybiusKey[doubleNumber];
        }
      }
      return decodedMessage;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
