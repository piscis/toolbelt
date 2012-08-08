var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('sort/natsort', function(){

    var natsort;
    var ipList = ['10.5.2.2','10.5.1.6','10.5.1.1'];
    var quality = ['A1','1X','B1'];

    it('should be loadable',function(){

         natsort = toolbelt.pick('sort/natsort');
         natsort.should.be.a('function');
    });

    it('should sort an list of IP addresses',function(){

        var resFinal = [
            '10.5.1.1',
            '10.5.1.6',
            '10.5.2.2'
        ];

        var res = ipList.sort(natsort);

        res.should.be.an.instanceOf(Array);
        res.should.be.eql(resFinal);
    });

    it('should sort an list of quality items',function(){

        var resFinal = [
            '1X',
            'A1',
            'B1'
        ];

        var res = quality.sort(natsort);

        res.should.be.an.instanceOf(Array);
        res.should.be.eql(resFinal);
    });
});