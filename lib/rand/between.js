var between = function(minVal,maxVal,floatVal){
    if(isNaN(minVal) || isNaN(maxVal)){throw new Error('Parameter type error');}
    var randVal = minVal+(Math.random()*(maxVal-minVal));
    return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
}

module.exports = between;