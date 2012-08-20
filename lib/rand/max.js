var max = function randomToN(maxVal,floatVal){
   var randVal = Math.random()*maxVal;
   return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
}

module.exports = max;