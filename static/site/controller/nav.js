define(function(require, exports, module){

	var mId = routerName,viewLogin,tpl = require("../view/login.tpl");
	viewLogin = Backbone.View.extend({

		el:"#centent",

		template: _.template(tpl),

		initialize:function(){
		},

		render:function(){
			this.$el.html(this.template());
			this.bindEvt();
		},

		bindEvt:function(){
			var dom = $("#"+mId),This=this;
		
			
		}

	});

	var nViewLogin = new viewLogin;

	module.exports = nViewLogin;
});

