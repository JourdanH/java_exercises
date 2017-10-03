var hangman = require('../hangman')
var chai = require('chai');
var expect=chai.expect;



describe('testing hangman()', function (){
  
    context('given a letter you will get the count in the word', function() {
      it('returns count of 4 for the number of the letter i in Mississippi', function() {
         var guess = hangman('Mississippi', 'i');
        expect(guess).to.equal(4);
      });
   
    });
     
});