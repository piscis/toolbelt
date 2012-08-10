var should = require('should');
var toolbelt = require(__dirname+'/../index');

describe('txt/wordwrap',function(){

    var wordwrap;

    describe('wordwrap',function(){

        it('should be loadable',function(){
             wordwrap = toolbelt.pick('txt/wordwrap');
             wordwrap.should.be.a('function');
        });

        it('should return a string', function(){

            var example = "Thundercats polaroid <br/>\n";
            example += "sartorial synth <br/>\n";
            example += "messenger bag wes <br/>\n";
            example += "anderson.";

            var wrapedTxt = wordwrap('Thundercats polaroid sartorial synth messenger bag wes anderson.', 20, '<br/>\n');
            wrapedTxt.should.be.a('string');
            wrapedTxt.should.be.eql(example);
        });

        it('should cut the text', function(){

            var example = "Thundercat<br/>\n";
            example += "s polaroid <br/>\n";
            example += "sartorial <br/>\n";
            example += "synth <br/>\n";
            example += "messenger <br/>\n";
            example += "bag wes <br/>\n";
            example += "anderson.";

            var wrapedTxt = wordwrap('Thundercats polaroid sartorial synth messenger bag wes anderson.', 10, '<br/>\n',true);
            wrapedTxt.should.be.a('string');
            wrapedTxt.should.be.eql(example);
            
        });

    });
});