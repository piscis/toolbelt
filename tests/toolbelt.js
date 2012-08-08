var should = require("should");

describe('Toolbelt', function(){

    var toolbelt;

    describe('instance',function(){

        it('should be requireable',function(){
            toolbelt = require(__dirname+'/../index');
        });
    });

    describe('getModule', function(){

        it('should load base components', function(){
            var extend = toolbelt.pick('base/extend');
            extend.should.be.a('function');
        });
    })

    describe('listModule',function(){

        it('should list all available modules',function(){
        });
    });
});