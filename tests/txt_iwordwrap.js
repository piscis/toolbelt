var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('txt/iwordwrap', function(){

    var iwordwrap;

    it('should be loadable',function(){
        iwordwrap = toolbelt.pick('txt/iwordwrap');
        iwordwrap.should.be.a('function');
    });

    it('should return a shortend object',function(){

        var res = iwordwrap('CaWaBunGa-CaWaBunGa');

        res.should.be.a('string');
        res.should.be.eql('CaWaB...unGa');
    });

    it('should return a string but not shortend',function(){

        var res = iwordwrap('CaWaBunGa');

        res.should.be.a('string');
        res.should.be.eql('CaWaBunGa');
    });
});