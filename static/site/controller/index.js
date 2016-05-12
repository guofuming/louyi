define(function(require, exports, module){
	var mId = routerName,viewLogin,
		tpl = require("../view/index.tpl"),
		tplNav = require("../view/nav.tpl");

	viewLogin = Backbone.View.extend({

		el:"#content",

		template: _.template(tpl),
		templateNav: _.template(tplNav),

		initialize:function(){

		},

		render:function(){
			share.loading();
			this.ajaxInfo();
			this.$el.html('');
			$("body").append(this.templateNav());
		},

		bindEvt:function(){
			var dom = $("#"+mId),This=this;
			$(".head .head_left").on('tap',function(e){
         		$("#content_wrapper,.head,#nav").toggleClass('offset');
		    })
		},
		ajaxInfo:function(){
			var This = this;
			$.getJSON('http://op.juhe.cn/onebox/news/words?callback=?', {key : '6c5eb0c81cf5195a27354e53122b95c3'}, function(json) {
				var data= {};
				data.json = json.result;

				share.loading('show');
				This.$el.append(This.template(data));
				This.bindEvt();

			});
		}
	});

	var nViewLogin = new viewLogin;

	module.exports = nViewLogin;
});

