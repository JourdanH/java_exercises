var greaterThan = require('../greaterThan')
var chai = require('chai');
var expect=chai.expect;



describe('testing greaterThan()', function (){
  
    context('given 2 numbers you will determine if the first is higher than the second', function() {
      it('returns true when given 4 and 5', function() {
         var result = greaterThan(4, 5);
        expect(result).to.equal(true);
      });
   
    });
     
});