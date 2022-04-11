<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="/pages/commons/include.jsp" %>
<script type="text/javascript" 
src="${pageContext.request.contextPath }/skin/js/modules/user/user.js"></script>
</head>
<body>
	<table id="user_list"></table>
	
	<div id="user_list_toolbar" style="overflow: hidden;">
		<div style="float: right;margin-right: 30px;">
			<a href="javascript:void(0);" 
				class="easyui-linkbutton"
				data-options="plain:true,iconCls:'icon-search'"
				onclick="objEvent.query();">
				查询
			</a>
			<a href="javascript:void(0);" 
				class="easyui-linkbutton"
				data-options="plain:true,iconCls:'icon-add'"
				onclick="objEvent.add();">
				新增
			</a>
			<a href="javascript:void(0);" 
				class="easyui-linkbutton"
				data-options="plain:true,iconCls:'icon-edit'"
				onclick="objEvent.update();">
				修改
			</a>
			<a href="javascript:void(0);" 
				class="easyui-linkbutton"
				data-options="plain:true,iconCls:'icon-remove'"
				onclick="objEvent.del();">
				删除
			</a>
		</div>
	</div>
	
</body>
</html>