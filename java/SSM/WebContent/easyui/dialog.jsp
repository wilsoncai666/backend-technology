<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="include.jsp" %>
<script type="text/javascript"
src="${pageContext.request.contextPath }/skin/js/easyui/dialog.js"></script>
</head>
<body>
	<div id="et">
	 
	</div>
	<input />
	
	<!-- 
		href="javascript:void(0);"
		href="#" 空链接
	 -->
	 
	<%-- --%>
	<div id="et-toolbar">
		<a href="javascript:void(0);" class="easyui-linkbutton"
			data-options="iconCls:'icon-add'">
			添加
		</a>
		<a href="javascript:void(0);" class="easyui-linkbutton"
			data-options="iconCls:'icon-remove'">
			删除
		</a>
	</div>
	
	<a href="javascript:void(0);" class="easyui-linkbutton"
			data-options="iconCls:'icon-ok'" onclick="d_open();">
			打开窗口
    </a>
</body>
</html>