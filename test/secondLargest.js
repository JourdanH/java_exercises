var secondLargest = require('../secondLargest')
var chai = require('chai');
var expect=chai.expect;



describe('testing secondLargest()', function (){
  
    context('given an array of numbers like [1,2,10, 9]', function() {
      it('returns 9 as second largest', function() {
        var result = secondLargest([1,2,10, 9]);
        expect(result).to.eql(9);
      });
   
    });
     
});