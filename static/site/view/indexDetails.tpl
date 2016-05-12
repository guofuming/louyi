<div id="indexDetails">
	<div class="head">
		<span class="back"></span>
		<span class="head_center"><%= lang.indexDetails.title %></span>
	</div>
	<div class="container-fluid ullist">
	  <div class="row">
	    <div class="col-xs-12">

			<% for (var i=0; i<result.length; i++) { %>
		    	<div class="ullist_li">
			    	<h5><b><%= result[i].full_title %></b></h5>
			    	<% if (result[i].img) { %>
		    		<i><img src="<%= result[i].img %>" alt=""> </i>
		    		<% }%>
			    	<blockquote>
		  				<p>
		  				<%= result[i].content %>
			    		<a href="<%= result[i].url %>" target="_bank"> 更多 >></a>
			    		</p>
			    		<footer><%= result[i].src %></footer>
					</blockquote>
			    	<p></p>
			    	<p><small>时间：<%= result[i].pdate %></small></p>
			    	<p><small>发布时间：<%= result[i].pdate_src %></small></p>
			    </div>
		    <% } %>

	    </div>
	  </div>
	</div>
</div>