// (function(){
//
//   function hangman(choice, guess){
//     let word= choice;
//     let position = word.indexOf(guess);
//     let count=0
//
//   while (position !== -1) {
//     count++;
//     position = word.indexOf(guess, position +1);
//   }
//
//   if (count == 0){
//     console.log("Nope, that letter doesn't exist in this word.")
//   }
//
//   else {console.log("Yeah, the letter "+guess+" exists "+count+" times in my word.")
//   };
//
//
// };
// hangman("mississippi", "i");
// })();

(function(){

  function hangman(choice, guess){
    let word = choice;
    let reps=0;
    let count = 0;
      for (let reps=0; reps<word.lenth-1; reps++) {

        if ("mississippi".indexOf("i") !==0) {
          count += 1
         console.log("count");
          }
        else {console.log("Nope, that letter doesn't exist in this word.")}


    };
  };
  hangman("mississippi", "i");
})();
