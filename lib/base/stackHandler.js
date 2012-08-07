var stackHandler = function(stack, callback) {

    var counter = 0;
    var result = [];

    var next = function(first) {

        if(!first) { counter++; }

        if(counter == stack.length) {
            callback(null, result);
            return;
        }

        // Long running operation
        setTimeout(function() {
            console.log(data:stack[counter]);
            result.push({data:stack[counter]});
            next(); 
        }, 100)
    }

    next(true);
}

stackHandler([1,2,3,4,"LAST"], function(e, data) {
  console.dir(data);
});