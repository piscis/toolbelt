var should = require('should');
var toolbox = require(__dirname+'/../index');

describe('base/uuid',function(){

    var uuid;

    describe('uuid',function(){

        it('should be loadable',function(){

             uuid = toolbox.getModule('base/uuid');
             uuid.should.be.a('function');
        });

        it('return a valid UUID',function(){

            var num = uuid();
            num.should.be.a('string');
        });

        it('should generate random UUIDs',function(){

            var num1 = uuid();
            var num2 = uuid();

            num1.should.not.be.eql(num2);
        });

    });
});