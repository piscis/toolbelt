var should = require('should');
var toolbelt = require(__dirname+'/../index');
var fs = require('fs');

describe('fs/dirwalkParallel', function(){

    var dirwalk;
    var src = __dirname+'/fixtures/dirwalk';


    it('should be loadable',function(){
        dirwalk = toolbelt.pick('fs/dirwalkParallel');
        dirwalk.should.be.a('function');
    });

    it('should list all files in target dir parallel',function(done){

        dirwalk(src,function(err,data){

            (err==null).should.be.ok;
            data.should.be.an.instanceOf(Array);
            data.length.should.be.eql(3);
            done();
        });
    });
});