<div class="head">
	<span class="head_left"></span>
	<span class="head_center"><%= routerNameText %></span>
</div>
<div id="news" class="container-fluid">
	<div class="row">
		<div class="col-xs-12">
			<ul>
			<% for (var i=0; i<json.length; i++){ %>
      			<li><%= json[i] %><a href="#index/indexDetails?info=<%= json[i] %>">更多>></a></li>
			<% }%>
			</ul>
		</div>
	</div>
</div>

