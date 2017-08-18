(function(){

    let word = "madamimadam"
    let newWord= word.split('');
    let wordString= newWord.join();
    let reverseWord =newWord.reverse();
    let reverseString= reverseWord.join();


    if (wordString == reverseString){
      console.log("true")}
    else {
      console.log("false")}

})();
