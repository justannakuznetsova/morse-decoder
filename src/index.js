// in a Morse code 3 spaces are used to separate words
// 1 space is used to separate characters
const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

// Let's look at the work of the code with a simple input: 'm e', or console.log(decode('0000001111**********0000000010'));

function decode(numbers) {
  let letters = [];
  let words = '';
  let result = '';
// 1. separate the input in strings with 10 chars in each 
  for (let i = 0; i < numbers.length; i = i + 10) {
    let letter = numbers.slice(i, i + 10);
    letters.push(letter);
  }
  // console.log(letters) 
  /* [ '0000001111', '**********', '0000000010' ] */
  
  for (let i = 0; i < letters.length; i++) {
    if (letters[i][0] === '*') {
      result += ' ';
      
      // console.log(result);
      // m + space
      
    } else {
      for (let j = 0; j < letters[i].length; j++) {
        if (letters[i][j] === '1') {
          if (letters[i][j + 1] === '0') {
            words += '.';
          } else {
            j++;
            words += '-';
          }
          // console.log(words);
          /*
              -
              --
              .
          */
        }
      }
      result += MORSE_TABLE[words];
      // console.log(result)
      /*
        m
        m e 
      */
       words = ''; // to count inputs we got, otherwise instead of m e (-- + .), we will get m g (-- + --.)
    }
  }
  return result;
}

module.exports = {
  decode,
};
