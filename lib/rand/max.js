var max = function randomToN(maxVal,floatVal){
    if(isNaN(maxVal)){throw new Error('Parameter type error');}
    var randVal = Math.random()*maxVal;
    return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
}

module.exports = max;