// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  let lowerAlphabet = {};

  for (let charCode = 97; charCode < 123; charCode++) {
    lowerAlphabet[charCode] = String.fromCharCode(charCode);
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    let origCodeArray = [];
    let newCodeArray = [];
    let encodedMessage = "";
    let lowerCaseMessage = input.toLowerCase();

    // check to see if shift value is correct
    if (shift < -25 || shift > 25 || shift == 0) {
      return false;
    }

    // to reverse shift order if decode or encode
    if (encode == false) {
      shift *= -1;
    }

    // loop through lowerCaseMessage + insert into origCodeArray
    for (let i = 0; i < lowerCaseMessage.length; i++) {
      origCodeArray[i] = lowerCaseMessage.charCodeAt(i);
    }

    // loop through origCodeArray + add shift
    for (let i = 0; i < origCodeArray.length; i++) {
      // define temp post-shift code variable
      let postShiftCode = origCodeArray[i] + shift;
      let superShifted;

      // for special characters
      if (origCodeArray[i] < 97 || origCodeArray[i] > 122) {
        encodedMessage += String.fromCharCode(origCodeArray[i]);
        newCodeArray[i] = origCodeArray[i];
      }
      // if shift still BTWN 'a/z'
      else if (postShiftCode > 96 && postShiftCode < 123) {
        newCodeArray[i] = origCodeArray[i] + shift;
        superShifted = origCodeArray[i] + shift;
      }
      // if shifts past 'z'
      else if (postShiftCode > 122) {
        let firstShift = 122 - origCodeArray[i];
        superShifted = 96 + (shift - firstShift);
        newCodeArray[i] = superShifted;
      }
      // if shifts past 'a'
      else if (postShiftCode < 97) {
        let firstShift = origCodeArray[i] - 97;
        superShifted = 123 + (firstShift + shift);
        newCodeArray[i] = superShifted;
      }

      // >> loop through lowerAlphabet and compare against superShifted
      for (let alphabetCode in lowerAlphabet) {
        if (newCodeArray[i] == alphabetCode) {
          encodedMessage += lowerAlphabet[alphabetCode];
        }
      }
    }

    return encodedMessage;
    // jen ostrich message >>
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
