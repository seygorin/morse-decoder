const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const LETTER_LENGTH = 10;
    const SPACE_LENGTH = 10;
    let result = "";
  
    for (let i = 0; i < expr.length; i += LETTER_LENGTH) {
      const letter = expr.slice(i, i + LETTER_LENGTH);
      if (letter === "*".repeat(SPACE_LENGTH)) {
        result += " ";
      } else {
        let morseLetter = "";
        for (let j = 0; j < letter.length; j += 2) {
          const morseSymbol = letter.slice(j, j + 2);
          if (morseSymbol === "10") {
            morseLetter += ".";
          } else if (morseSymbol === "11") {
            morseLetter += "-";
          }
        }
        result += MORSE_TABLE[morseLetter];
      }
    }
  
    return result;
}

module.exports = {
    decode
}
