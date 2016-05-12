
define(function(require, exports, module){

      require('../site/router/router.js?a=2');

      require("../resource/css/public.css");
      require("../component/bootstrap-3.3.5-dist/css/bootstrap.min.css");
      require("../component/bootstrap-3.3.5-dist/css/bootstrap-theme.min.css");

      

      if(window.location.hash == '') {
        window.location.href = '#index'; 
      } 

      $("body").on('tap','#content_wrapper',function(e){
        if(!$(e.target).hasClass('head_left')){
          if($("#nav").hasClass('offset')){
            $("#content_wrapper,.head,#nav").toggleClass('offset');
          }
        }
      })


      window.share = {
        loading:function(para){
          if(!para){
            $("#pageLoad,#pageLoadDiv").show();
          }else{
            $("#pageLoad,#pageLoadDiv").hide();
          }
        },
        getParameter:function(para){
          var name,val;
          var para = window.location.href;
          var wyhPara = para.split('?')[1];
          var newArr = wyhPara.split('&');
          var newObj={};

          for(var i=0; i<newArr.length; i++){
            name = newArr[i].split('=')[0];
            val = newArr[i].split('=')[1];
            newObj[name]=val;
          }

          return newObj;

        }
      }
});
