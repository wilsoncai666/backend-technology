<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="/pages/commons/include.jsp" %>
<script type="text/javascript" 
src="${pageContext.request.contextPath }/skin/js/modules/system/login.js"></script>
</head>
<body>


	<div id="login-dialog">
		<form id="login-form" method="post">
			<table cellpadding="4" cellspacing="4" 
				style="margin: 15px auto">
				<!-- 用户名 -->
				<tr>
					<td>
						用户名
					</td>
					<td>
						<input id="uname" name="uname"/>
					</td>
				</tr>
				<!-- 密码 -->
				<tr>
					<td>
						密码
					</td>
					<td>
						<input id="pwd" name="pwd"/>
					</td>
				</tr>
			</table>
		</form>
	</div>

</body>
</html>