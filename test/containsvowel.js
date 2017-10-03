var containsVowel = require('../containsvowel')
var chai = require('chai');
var expect=chai.expect;



describe('testing containsVowel()', function (){
  
    context('given a word return true if word contains a vowel', function() {
      it('returns true in the word lion', function() {
        var result = containsVowel('lion');
        expect(result).to.equal(true);
      });
   
    });
     
});
