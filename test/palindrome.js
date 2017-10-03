var palindrome = require('../palindrome')
var chai = require('chai');
var expect=chai.expect;



describe('testing palindrome()', function (){
  
    context('given a word it is spelled the same backwards', function() {
      it('returns racecar as true being a palindrome', function() {
         var word = palindrome('racecar');
        expect(word).to.equal(true);
      });
   
    });
     
});
