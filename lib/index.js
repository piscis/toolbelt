var toolbelt = {

    getModule: function(modulePath){
        return require(__dirname+'/'+modulePath);
    },
    listModules: function(){
        return ['base/extend'];
    }
}

module.exports = toolbelt;