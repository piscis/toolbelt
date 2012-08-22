var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('rand/between', function(){

    var rbetween; 

    it('should be loadable',function(){
        rbetween = toolbelt.pick('rand/between');
        rbetween.should.be.a('function');
    });

    it('should return a number',function(){

        var num = rbetween(15,30);
        num.should.be.a.Number;
        (num<31 && num>=15).should.be.ok;
    });

    it('should respect the float parameter',function(){

        var length = 1;
        var num = rbetween(15,30,length);
        num.should.be.a.Number;
        (num<31 && num>=15).should.be.ok;
        (new String(num).split('.')[1].length==length).should.be.ok; 
    });

    it('should throw an error if parameter is invalid',function(){
        
        (function(){
            rbetween('abc',2,1);
        }).should.throw();

        (function(){
            rbetween(2,'abc',1);
        }).should.throw();

    });
});