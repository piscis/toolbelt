//var longText = "Super Duper Long Description from the manual for the dashboard";
//var shortText = "Main Screen";

var iwordwrap = function(txt, max, fill){

    var sTxt = txt, 
    max = max || 12, 
    fill = fill || '...';

    if(txt.length>=max){
        var offset = Math.floor(((max-fill.length) / 2));
        var offsetLeft = (offset*2)<(max+fill.length) ? (offset+1) : offset;

        sTxt =  txt.substr(0,offsetLeft) + fill + txt.substr((0-offset));
    }

    return sTxt;
}

//console.log(iwordwrap(longText)); // Super...oard
//console.log(iwordwrap(shortText)); // Main Screen

module.exports = iwordwrap;