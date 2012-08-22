var item = function(list){

    if(typeof list == 'undefined'){
        return list;
    }else {

        if(typeof list == 'number'){
            list=new String(list);
        }else if(list instanceof Object){
            list=Object.keys(list);
        }else if(list===null){
            return null;
        }

        return list[Math.floor(Math.random()*list.length)];
        
    }
};

module.exports = item;