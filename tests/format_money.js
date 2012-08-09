var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('format/money',function(){

    var money;

    describe('money',function(){

        it('should be loadable',function(){
             money = toolbelt.pick('format/money');
             money.should.be.a('function');
        });

        it('return a string', function(){
            var formatedString = money(1000.1151, 3, ',','.');
            formatedString.should.be.a('string');
        });

        it('should respect decimal length (randix)', function(){
            var formatedString = money(1000.1151, 3, ',','.');
            formatedString.should.be.equal('1.000,115');
        });

        it('should respect decimal delimiter', function(){
            var formatedString = money(1000.111, 2, '.',',');
            formatedString.should.be.equal('1,000.11');
        });

        it('should respect thousands separator', function(){
            var formatedString = money(1000.111, 2, '.','-');
            formatedString.should.be.equal('1-000.11');
        });

        it('should use default formating parameters', function(){
            var formatedString = money(1000.111);
            formatedString.should.be.equal('1.000,11');
        });

    });
});