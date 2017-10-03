var avg = require('../avg')
var chai = require('chai');
var expect=chai.expect;



describe('testing avg()', function (){
  
    context('given 3 numbers 6, 7 and 2', function() {
      it('returns 5 as avg', function() {
        var answer = avg(6,7,2);
        expect(answer).to.equal(5);
      });
   
    });
     
});