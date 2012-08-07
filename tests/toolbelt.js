var should = require("should");

describe('Toolbelt', function(){

    var toolbox;

    describe('instance',function(){

        it('should be requireable',function(){
            toolbox = require(__dirname+'/../index');
        });
    });

    describe('getModule', function(){

        it('should load base components', function(){
            var extend = toolbox.getModule('base/extend');
            extend.should.be.a('function');
        });
    })

    describe('listModule',function(){

        it('should list all available modules',function(){
        });
    });
});