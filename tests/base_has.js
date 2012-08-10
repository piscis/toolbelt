var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('base/has', function(){

    var has;
    var fixture = {foo:{bar:{baz:"snafu"}}};    

    it('should be loadable',function(){
         has = toolbelt.pick('base/has');
         has.should.be.a('function');
    });

    it('should return false on a none valid path',function(){

        has(fixture, "foo.bar.bam").should.be.not.ok;
    });

    it('should return true on a valid path',function(){
        has(fixture,"foo.bar.baz").should.be.ok;
    });

    it('should return false if object is null',function(){
        has(null,"foo.bar.baz").should.be.not.ok;
    });
});