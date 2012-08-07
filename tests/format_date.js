var should = require('should');
var toolbox = require(__dirname+'/../index');

describe('format/date', function(){

    var dateFormat;

    // 2012-08-07 19:39:27
    var testTime = (new Date(1344361167946));

    it('should be loadable',function(){

         dateFormat = toolbox.getModule('format/date');
         dateFormat.should.be.a('function');
    });

    it('should return formated dated string',function(){

        var date = dateFormat('Y-m-d H:i:s',testTime);

        date.should.be.a('string');
        date.should.be.eql('2012-08-07 19:39:27');
    });
});