var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('base/stack',function(){

    var stack;

    describe('stack',function(){

        it('should be loadable',function(){

             stack = toolbelt.pick('base/stack');
             stack.should.be.a('function');
        });

        it('return an array without an error',function(done){

            var w = function(data,cb){
    
                setTimeout(function() {
                    data = data+1;
                    cb(false,data);
                },100);
            };

            stack([1,2,3,4,"LAST"], w, function(err, data){

              (err==null).should.be.ok;
              data.should.be.an.instanceOf(Array);

              done();
            });
        });

        it('should throw an error',function(done){

            var w = function(data,cb){

                setTimeout(function() {
                    data = data+1;
                    cb(true,data);
                },100);
            };

            stack([1,2,3,4,"LAST"], w, function(err, data){

                (function(){
                    done();
                    if(err)  throw new Error('stack worker has discovered an error.');
                }).should.throw();
               
            });
        });
    });
});