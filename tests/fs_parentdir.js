var should = require('should')
    , toolbelt = require(__dirname+'/../index')
    , path = require('path')
    , sep = path.sep
    , fs = require('fs');

describe('fs/parentdir', function(){
    
    var pd = null;


    it('should be loadable',function(){
         pd = toolbelt.pick('fs/parentdir');
         pd.should.be.a('function');
    });

    it('should resolve absolute path on linux/osx', function(){ 

        var result = pd('/foo/bar/baz');

        result.should.be.a('string');
        result.should.be.eql(path.normalize('/foo/bar'));
    });


    it('should resolve absolute path from a file on linux/osx', function(){

        var result = pd('/foo/bar/baz.html');

        result.should.be.a('string');
        result.should.be.eql(path.normalize('/foo/bar'));
    });

    it('should resolve absolute path from a directory on windows', function(){

        var result = pd('c:\\foo\\bar\\baz');

        result.should.be.a('string');
        result.should.be.eql('c:\\foo\\bar');
    });

    it('should resolve absolute path from a file on windows', function(){

        var result = pd('c:\\foo\\bar\\baz.html');

        result.should.be.a('string');
        result.should.be.eql('c:\\foo\\bar');
    });

    it('should resolve from the current working directory', function(){

        var result = pd('.');

        result.should.be.a('string');
        result.should.be.eql(path.resolve(process.cwd()+sep+'..'));
    });

    it('should resolve relative to current working directory', function(){

        var result = pd('..');
        
        result.should.be.a('string');
        result.should.be.eql(path.resolve(process.cwd()+sep+'..'+sep+'..'));
    });
    

    it('should return the parents parent directory', function(){

        var result = pd('../..');

        result.should.be.a('string');
        result.should.be.eql(path.resolve(process.cwd()+sep+'..'+sep+'..'+sep+'..'));
    });

    it('should return the parent directory and respect the from parameter', function(){

        var from = path.resolve(process.cwd()+sep+'..');
        var result = pd('..',from);
        var expectedResult = path.resolve(process.cwd()+sep+'..'+sep+'..'+sep+'..');

        result.should.be.a('string');
        result.should.be.eql(expectedResult);
    });
});