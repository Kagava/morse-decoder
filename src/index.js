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
    let string = '';
    let count = 10;
    let flagSpace = true;
    for (let i = 0; i < expr.length; i+=10) {
        if (expr[i] === '*') {
            flagSpace = false;
            string = string + ' ';
        }
        else {
            flagSpace = true;
            let letter = '';
            for (let j = i; j < i + count; j = j + 2) {
                let symbol = expr[j] + expr[j+1];
                if (symbol === '10') {
                    letter = letter + '.';
                }
                if (symbol === '11') {
                    letter = letter + '-';
                } 
            }
            string = string + MORSE_TABLE[letter];
        }
    }
    return string;
}

module.exports = {
    decode
}