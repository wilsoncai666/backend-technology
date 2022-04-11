<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="include.jsp" %>
<script type="text/javascript" 
	src="${pageContext.request.contextPath }/skin/js/easyui/textbox.js"></script>
</head>
<body>
	
	<!-- 
		1.class="easyui-textbox"表示实例化一个textbox组件对象
		2.data-options表示可以获取textbox组件属性和事件，
			但是不能获取（使用）方法，得通过js的方式来调用方法,
			调用组件方法，必须先实例化组件对象
		
		注意事项：	
			disabled（禁用）:不可以向后台传值
			readonly（只能）:可以向后台传值
	 -->
	<input class="easyui-textbox" 
		   data-options="width:200,height:40,prompt:'请输入信息！',
		   				value:'et1703',type:'text',
		   				multiline:false,disabled:false,readonly:false,
		   				iconCls:'icon-man',
		   				onChange:function(newValue, oldValue){
		   					console.log(newValue + '|' + oldValue);
		   				}" />
	
	<!-- 原始input元素 -->	   
	<input type="text" />
	
	<hr/><br/>
	
	<!-- 
		js写法
		使用js写法，必须定义id属性，easyui使用js不兼容class属性
    -->
	<input id="et" />
	<br/>
	<input type="button" value="设置值" onclick="setVal();"/>
	<input type="button" value="获取值" onclick="getVal();"/>
	<input type="button" value="禁用" onclick="disable();"/>
	<input type="button" value="启用" onclick="enable();"/>
	<input type="button" value="重置" onclick="reset();"/>
</body>
</html>