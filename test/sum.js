
var sum = require('../sum')
var chai = require('chai');
var expect=chai.expect;



describe('testing sum()', function (){
  
    context('given numbers  5 and 4', function() {
      it('returns 9 as sum', function() {
        var total = sum(5,4);
        expect(total).to.equal(9);
      });
   
    });
     
});
