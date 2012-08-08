var should = require('should');
var toolbelt = require(__dirname+'/../index');
var fs = require('fs');

describe('fs/copy', function(){

    var copy;
    var src = __dirname+'/fixtures/sourcefile.txt';
    var dst = __dirname+'/fixtures/destfile.txt'
    
    beforeEach(function(done){
        
        fs.unlink(dst, function (err){
            done();
        });
    });

    it('should be loadable',function(){
         copy = toolbelt.pick('fs/copy');
         copy.should.be.a('function');
    });

    it('should copy a file asynchronously',function(done){

        copy(src,dst,function(err) {

            (typeof err == 'undefined').should.be.ok;

            if(typeof err == 'undefined') {

                fs.readFile(dst,function(err,data) {

                    (err==null).should.be.okay;
                    (data!=null).should.be.okay;
                    data.should.be.an.instanceOf(Buffer);
                    data.toString().should.be.eql('CaWaBuNgA');

                    done();
                });

            } else {

                done();
            }
        });
    });
});