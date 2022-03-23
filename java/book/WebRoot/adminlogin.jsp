<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>My JSP 'adminlogin.jsp' starting page</title>
  </head>
  <body>
   <div align="center">
   		<h2>管理员登陆</h2>
   		<hr>
   		<form action="login" method="POST">
   			用户名字:<input type="text" name="name"/><br>
   			登陆密码:<input type="password" name="pwd"/><br>
   			<input type="submit" value="提交"/>
   		</form>
    </div>
  </body>
</html>







