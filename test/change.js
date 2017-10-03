var changeMachine = require('../change')
var chai = require('chai');
var expect=chai.expect;



describe('testing changeMachine()', function (){
  
    context('gives amount of change in bills', function() {
      it('given 47 dollars give an array of change equal to ([2,0,1,2]) ', function() {
        var change = changeMachine(47);
        expect(change).to.eql([2,0,1,2]);
      });
   
    });
     
});
