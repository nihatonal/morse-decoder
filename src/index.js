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
    var wordList = expr.match(/.{1,10}/g)
  var result = [];
  var newCode;



  for (var i = 0; i < wordList.length; i++) {
    var x = wordList[i].replace(/00000000/g, "").replace(/10/g, ".").replace(/11/g, "-").replace(/000000/g, "").replace(/0000/g, "").replace(/00/g, "").replace("**********", " ");
    result.push(x);
    newCode = result.join(" ")
  }

  var messageConverted = [];

  newCode.split("  ").map(function(word) {
    word.split(" ").map(function(letter) {
      messageConverted.push(MORSE_TABLE[letter]);
    });
    messageConverted.push(" ");
  });

return messageConverted.join("").trim("");
}

module.exports = {
    decode
}