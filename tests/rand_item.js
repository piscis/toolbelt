var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('rand/item', function(){

    var ritem;

    var fixture_one = [0,1,2];
    var fixture_two = {a:1,b:2};
    var fixture_three = "ABCD";
    var fixture_four = 12;

    it('should be loadable',function(){

        ritem = toolbelt.pick('rand/item');
        ritem.should.be.a('function');
    });

    it('should pick a random entry',function(){

        var entry = ritem(fixture_one);
        entry.should.be.a.Number;
        (entry==0 || entry==1 || entry==2).should.be.ok;
    });

    it('should pick a random key from an object',function(){

        var entry = ritem(fixture_two);
        entry.should.be.a.String;
        (entry=="b" || entry=="a").should.be.ok;
    });

    it('should pick a random pos from a string',function(){

        var entry = ritem(fixture_three);
        entry.should.be.a.String;
        (entry=="A" || entry=="B" || entry=="C" || entry=="D").should.be.ok;
    });

    it('should pick a random position from a number',function(){

        var entry = ritem(fixture_four);
        entry.should.be.a.Number;
        (entry=="1" || entry=="2").should.be.ok;
    });

    it('should return undefined when specify "undefined"',function(){

        var entry = ritem(undefined);
        (typeof entry == 'undefined').should.be.ok;
    });

});