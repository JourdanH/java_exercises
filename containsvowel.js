
function containsVowel(word) {

  for (var j = 0; j < word.length; j++) {

      if (word.charAt(j) == 'a') {
        return true;
      }else if (word.charAt(j)=='e') {
        return true;
      }else if (word.charAt(j)=='i') {
        return true;
      }else if (word.charAt(j)=='o') {
        return true;
      }else if (word.charAt(j)=='u') {
        return true;
      }

  }

};
 module.exports=containsVowel;