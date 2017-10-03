var nickName = require('../nickName')
var chai = require('chai');
var expect=chai.expect;



describe('testing nickName()', function (){
  
    context('given a full name and a possible nickname determine if the nickname is shorter and consists of letters in the full name ', function() {
      it('returns true as the result of lusa as a nickname of Luke Segars', function() {
        var result = nickName('lusa','Luke Segars');
        expect(result).to.equal(true);
      });
   
    });
     
});
