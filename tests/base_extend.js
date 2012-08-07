var should = require('should');
var toolbox = require(__dirname+'/../index');

describe('base/extend', function(){

    var extend;

    it('should be loadable',function(){

         extend = toolbox.getModule('base/extend');
         extend.should.be.a('function');
    });

    it('should extend objects',function(){

        var a = {a:1};
        var b = {b:2};

        var c = extend(a,b);

        c.should.be.a('object');
        c.should.be.eql({a:1,b:2});
    });

    it('should deep extend objects',function(){

        var a = {a:1,b:{c:2}};
        var b = {d:3,b:{e:3}};
        var f = extend(true,a,b);

        f.should.be.a('object');
        f.should.be.eql({a:1,b:{c:2,e:3},d:3});
    });
});