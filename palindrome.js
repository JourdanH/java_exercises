(function(){

    // let word = "madamimadam"
    // let newWord= word.split('');
    // let wordString= newWord.join();
    // let reverseWord =newWord.reverse();
    // let reverseString= reverseWord.join();

function palindrome(word){
    if (word.split('').reverse().join('') == word){
      return true}
    else {
      return false}
}
    module.exports = palindrome;
})();
