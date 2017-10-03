

(function(){

  function hangman(choice, guess){
    let word= choice;
    let position = word.indexOf(guess);
    let count=0

  while (position !== -1) {
    count++;
    position = word.indexOf(guess, position +1);
  }

  if (count == 0){
    return count;
  }

  else return count
  }
  module.exports=hangman;
})();
