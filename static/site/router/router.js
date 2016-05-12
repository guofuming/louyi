define(function(require, exports, module){
	var varsion = 0;
	var vModule = [
			'index','nav','setting'
		];
	var Backbone=require("backbone");
	var router = Backbone.Router.extend({
	  routes: {
	    ":para":  "all",    // #help
	    "index/:para":  "indexAll",    // #help
	  },
	  all: function(para) {
	  	// console.log("all")
	  	varsion = 3;
	  	for(var i=0; i < vModule.length; i++){
	  		if(para == vModule[i]){
	  			// varsion++;
	  			this.loadController(para);
	  			for(var i=0; i<lang.navTextArray.length; i++){
	  				if(lang.navTextArray[i].url == '#'+para){
	  					window.routerNameText = lang.navTextArray[i].title;
	  				}
	  			}
	  		}else{
	  			window.location.href = '#index';
	  		}
	  	}
	  },
	  indexAll:function(para){
	  	var This = this;
	  	var subsetArray = [
	  		'indexDetails'
	  	];
	  	$.each(subsetArray,function(i){
	  		if(subsetArray[i] == para){
	  			This.loadController(para);
	  		}else{
	  			window.location.href = '#index';
	  		}
	  	})
	  },
	  loadController:function(para){
		window.routerName = para;
	  	var src = '../controller/'+para+'.js?v='+varsion;
	  	// alert(src)
	  	require.async(src,function(c){
	  		c.render();
	  	});
	  },
	});
	new router;
    Backbone.history.start();

	module.exports = router;
});

