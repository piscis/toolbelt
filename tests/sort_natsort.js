var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('sort/natsort', function(){

    var nats;
    var ipList = ['10.5.2.2','10.5.1.6','10.5.1.1'];
    var quality = ['A1','1X','B1'];
    var appended = {};

    it('should be loadable',function(){

         nats = toolbelt.pick('sort/natsort');
         nats.should.be.a('function');
    });

    it('should sort an list of IP addresses',function(){

        var resFinal = [
            '10.5.1.1',
            '10.5.1.6',
            '10.5.2.2'
        ];

        var res = ipList.sort(nats);

        res.should.be.an.instanceOf(Array);
        res.should.be.eql(resFinal);
    });

    it('should sort an list of quality items',function(){

        var resFinal = [
            '1X',
            'A1',
            'B1'
        ];

        var res = quality.sort(nats);

        res.should.be.an.instanceOf(Array);
        res.should.be.eql(resFinal);
    });

    it('should be okay when appended to an object',function(){

        var resFinal = [
            '1X',
            'A1',
            'B1'
        ];

        appended.nats = nats;

        var res = quality.sort(appended.nats);

        res.should.be.an.instanceOf(Array);
        res.should.be.eql(resFinal);
    });

});