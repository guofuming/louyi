<div id="nav" class="nav">
	<div class="icon">
		<label><img src='../static/resource/images/portrait.jpeg'  alt=""></label>
		<span><%= lang.navName %></span>
	</div>
	<ul>
		<% for(var i=0; i<lang.navTextArray.length; i++){ %>
			<% var url = lang.navTextArray[i].url,liClass='' %>
			<% url == '#' + routerName ? (liClass = 'on') : ''%>
			<li class="<%= liClass %>"><a href="<%= url %>"><%= lang.navTextArray[i].title %></a></li>
		<% } %>
	</ul>
</div>