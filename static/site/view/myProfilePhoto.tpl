<div class="fbimportbtnarea">
	<input type="text" class="val" placeholder = ' 输入图片描述...'>
    <input id="file" type="file">
    <span class='save'>上传图片</span>
	<ul>
		<% for(var i=0; i < lang.length; i++) {%>
			<li class="">
				<span><%= lang[i].about %></span>
				<img src="<%= lang[i].url %>" alt="">
				<div data-id='<%= lang[i].objectId %>' class="operation"><a>删除</a></div>
			</li>
		<% } %>
	</ul>
</div>

