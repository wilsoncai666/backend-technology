<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="/pages/commons/include.jsp" %>
<script type="text/javascript" 
src="${pageContext.request.contextPath }/skin/js/modules/system/index.js"></script>
</head>
<body>
  	
  	<div class="easyui-layout" fit="true">   
	    <div data-options="region:'north',split:true,height:80">
	    	<div style="float: right;line-height: 72px;margin-right: 20px;">
	    		<span style="margin-right: 20px;">
	    			欢迎：${sessionScope.user.nickname }
	    		</span>
	    		<span style="margin-right: 20px;">
	    			<a href="${pageContext.request.contextPath }/login/logout">
	    				退出
	    			</a>
	    		</span>
	    	</div>
	    </div>   
	    <div data-options="region:'west',
	    				title:'导航',split:true,width:180">
	    	<ul id="per_tree"></ul>
	    </div>   
	    <div data-options="region:'center'">
	    	<div id="content_tabs">
	    	    
	    	</div>
	    </div>   
	</div>  
  	
  	
  	
</body>
</html>