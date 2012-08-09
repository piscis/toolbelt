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

module.exports = iwordwrap;