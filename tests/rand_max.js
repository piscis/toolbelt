var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('rand/max', function(){

    var rmax; 

    it('should be loadable',function(){
         rmax = toolbelt.pick('rand/max');
         rmax.should.be.a('function');
    });

    it('should return a number',function(){

        var num = rmax(30,1);
        num.should.be.a.Number;
        (num<30 && num>0).should.be.ok;
    });

    it('should respect the float parameter',function(){

        var length = 1;
        var num = rmax(30,length);
        num.should.be.a.Number;
        (num<30 && num>0).should.be.ok;
        (new String(num).split('.')[1].length==length).should.be.ok; 
    });

    it('should throw an error if parameter is invalid',function(){
        
        (function(){
            rmax('abc');
        }).should.throw();
        
    });
});