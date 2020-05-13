let word = prompt("Enter your chosen word: ");
//let means: can not reassign it (=final?)
let guessedLetters = [];
let svg = Snap("#hangman");
var wrongGuesses = 0;
console.log(word);
showWord(word);

document.onkeyup = function(event) {
  if (guessedLetters.includes(event.key)) {
    //letter was already guessed
  } else {
    guessedLetters.push(event.key);
    if (word.includes(event.key)) {
      showWord(word);
    } else {
      wrongGuesses++;
      console.log(`Number of wrong guesses ${wrongGuesses}`);
      drawHangman(wrongGuesses);
    }
  }
};

function showWord(word) {
  let hiddenword = word;

  for (var i = 0; i < hiddenword.length; i++) {
    if (
      !guessedLetters.includes(hiddenword[i].toLowerCase()) &&
      hiddenword[i] !== " "
    ) {
      hiddenword = hiddenword.replace(hiddenword[i], "*");
    }
  }
  document.getElementById("word").innerText = hiddenword;
}

function drawHangman(wrongGuesses) {
  if (wrongGuesses === 1) {
    // three "=" when the type of the compared things has to be equal too
    svg.line(50, 450, 150, 450);
  } else if (wrongGuesses === 2) {
    svg.line(100, 100, 100, 450);
  } else if (wrongGuesses === 3) {
    svg.line(100, 100, 300, 100);
  } else if (wrongGuesses === 4) {
    svg.line(300, 100, 300, 150);
  } else if (wrongGuesses === 5) {
    svg.circle(300, 175, 25);
  } else if (wrongGuesses === 6) {
    svg.line(300, 200, 300, 300);
  } else if (wrongGuesses === 7) {
    svg.line(300, 250, 250, 210);
  } else if (wrongGuesses === 8) {
    svg.line(300, 250, 350, 210);
  } else if (wrongGuesses === 9) {
    svg.line(300, 300, 250, 340);
  } else if (wrongGuesses === 10) {
    svg.line(300, 300, 350, 340);
  }
}
