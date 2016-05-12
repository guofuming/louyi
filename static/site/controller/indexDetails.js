define(function(require, exports, module){
	var mId = routerName,vview,
		tpl = require("../view/indexDetails.tpl");

	vview = Backbone.View.extend({

		el:"#content",

		template: _.template(tpl),

		initialize:function(){
		},

		render:function(){
			share.loading();
			this.ajaxInfo();
			this.$el.html('');
			console.log();
		},

		bindEvt:function(){
			var dom = $("#"+mId),This=this;
			// console.log($("body").html())
			$(".head .back").on('tap',function(e){
				window.history.go(-1);
		    })
		},

		ajaxInfo:function(){
			var This = this;
			$.getJSON('http://op.juhe.cn/onebox/news/query?callback=?', {q:decodeURI(share.getParameter().info),key : '6c5eb0c81cf5195a27354e53122b95c3'}, function(json) {
				// console.log(json)
			// alert(json.error_code)
				This.$el.append(This.template(json));

				share.loading('hide');
				This.bindEvt();
			});
		}
	});

	var nViewLogin = new vview;

	module.exports = nViewLogin;
});

