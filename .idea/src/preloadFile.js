var preloadFunc = function(){ };
preloadFunc.prototype = {
    preload: function(){
        console.log("On Preload function of preloadFunc");
    },
    create: function(){
        console.log("On Create function of preloadFunc");
        this.game.state.start("menuState");
    }
}
