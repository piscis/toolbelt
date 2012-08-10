/**
 * has
 * 
 * Checks if a given property path for an json object exists.
 * 
 * @example
 * <code>
 *  var obj = {foo:{bar:{baz:"snafu"}}};
 *  has(obj, "foo.bar.baz"); // returns true
 *  has(obj, "foo.bar.bam"); // returns false
 * </code>
 */
var has = function(p, a){
    
    if(p != null && a != null && typeof p =='object' && typeof a == 'string'){
    
        a = a.split(".");
        
        for(var i in a){
            var key = a[i];

            if (p[key] == null){
                return false;
            }
            p = p[key];
        }
        return true;
        
    }else{
        return false;
    }
};

module.exports = has;