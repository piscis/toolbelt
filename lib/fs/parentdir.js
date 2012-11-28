var util = require('util')
    , path = require('path')
    , sep = path.sep;


module.exports = function(p, from){
  
  var p = p.trim()
      , from = from || process.cwd();

  if(p && typeof p == 'string' && p != ''){

      if(p=='.'){
        p = path.resolve(from);
      }else if(p.indexOf('..')==0){
        p = path.normalize(p)
        p = path.resolve(from, p);
      }

      p = path.normalize(p);

    return p.substr(0, p.lastIndexOf(path.sep));

  }else{
    throw new Error('Please specify a path');
  }
};