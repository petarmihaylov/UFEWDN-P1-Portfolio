(function () {
  'use strict';

  describe('Give it some context', function () {

    var request = require('superagent');

    describe('#indexOf()', function() {
      it ('should return the home page', function(){
        request.post('localhost:9001').end(function(res){
          expect(res).to.exist;
          //expect(res.status).to.equal(200);
          //expect(res.body).to.contain('Studio350');
         });
      });
    });

  });
})();
