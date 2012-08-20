var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('sort/queue', function(){

    var sortqueue;
    var fixture_one = [
        {id:2},
        {id:4},
        {id:1},
        {id:3}
    ];

    var fixture_two = [
        {id:'A'},
        {id:'C'},
        {id:'D'},
        {id:'B'}
    ];

    var numericSort = function(a,b){
        return a-b;
    }

    it('should be able to load',function(){

         sortqueue = toolbelt.pick('sort/queue');
         sortqueue.should.be.a('function');
    });


    it('should return the queue unmodified if key is invalid',function(){

        var res = sortqueue(fixture_one,'none_existing',numericSort);

        res.should.be.an.instanceOf(Array);
        res.length.should.be.eql(fixture_one.length);
        res[0].should.be.eql(fixture_one[0]);
    });

    it('should return a sorted queue',function(){

        var res = sortqueue(fixture_one,'id',numericSort);

        res.should.be.an.instanceOf(Array);
        res.length.should.be.eql(fixture_one.length);
        res[0].should.have.ownProperty('id');
        res[0].should.have.property('id',1);

    });

    it('should be compadible with natsort',function(){

        var natsort = toolbelt.pick('sort/natsort');
        var res = sortqueue(fixture_two,'id',natsort);

        res.should.be.an.instanceOf(Array);
        res.length.should.be.eql(fixture_one.length);
        res[0].should.have.property('id','A');
        res[3].should.have.property('id','D');
    });

});