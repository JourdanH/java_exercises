var rabbit = require('../cherokee')
var chai = require('chai');
var expect=chai.expect;



describe('testing rabbit()', function (){
  
    context('given starting population of 200 birthrate of .1 and number of weeks of 5', function() {
      it('returns 322 as  the population of hares', function() {
        var hares = rabbit(200,.1,5);
        expect(hares).to.equal(322);
      });
   
    });
     
});
