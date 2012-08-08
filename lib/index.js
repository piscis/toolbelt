var toolbelt = {

    pick: function(modulePath){
        return require(__dirname+'/'+modulePath);
    },
    list: function(){
        return ['base/extend'];
    }
}

module.exports = toolbelt;