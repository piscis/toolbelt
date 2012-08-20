var sortqueue = function(queue, key, sort){

    var sortList = [];
    var itemList = [];
    var invalidList = [];
    var finalList = [];
    
    if(queue && sort && queue instanceof Array && sort instanceof Function){
        
        for(var i in queue){
        
            if(queue[i].hasOwnProperty(key)){
                itemList.push(queue[i]);
                sortList.push(queue[i][key]);
            }else{
                invalidList.push(queue[i]);
            }
        }
        
        sortList = sortList.sort(sort);
        
        for(var i in sortList){
        
            for(var x in itemList){
                if(itemList[x][key]==sortList[i]){
                    finalList.push(itemList[x]);
                }
            }
        }
        
        return finalList.concat(invalidList);
        
    }else{
        return queue;
    }

};

module.exports = sortqueue;