<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<body>
	
	<form id="query_form" method="post">
		<table cellpadding="4" cellspacing="4" 
				style="margin: 10px auto">
			<tr>
				<td>用户名</td>
				<td>
					<input id="username" name="username" 
						   		class="easyui-textbox"
						   		data-options="width:180"/>
				</td>
			</tr>
			<tr>
				<td>昵称</td>
				<td>
					<input id="nickname" name="nickname"
						   class="easyui-textbox"
						   data-options="width:180"/>
						   
				</td>
			</tr>
			<tr>
				<td>邮箱</td>
				<td>
					<input id="email" name="email"
						   class="easyui-textbox"
						   data-options="width:180"/>
				</td>
			</tr>
			<tr>
				<td>联系方式</td>
				<td>
					<input id="tel" name="tel"
						   class="easyui-numberbox"
						   data-options="width:180"/>
				</td>
			</tr>
			<tr>
				<td>状态</td>
				<td>
					<input id="status" name="status"
						   class="easyui-combobox"
						   data-options="
						   	 width:180,panelHeight:80,
						   	 valueField:'id',    
    						 textField:'text',
    						 url:'${pageContext.request.contextPath }/user/getStatus'"/>
				</td>
			</tr>
		</table>
	</form>
	
</body>
    