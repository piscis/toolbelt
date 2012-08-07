var stack = function(list, worker, callback) {

    var counter = 0;
    var result = [];
    var next = function(first){

        if(!first) { counter++; }

        if(counter == list.length){

            callback(null, result);
            return;
        }

        var workerCallback = function(err,data){

            if(err) {
                callback(err);
            } else {
                result.push(data);
                next();
            }
        }

        worker(list[counter],workerCallback);
    }

    next(true);
};

module.exports = stack;