<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<body>
	
	<form id="user_form" method="post" 
				enctype="multipart/form-data">
	
		<label id="userId" v="${u.id }"
				style="display: none;">
		</label>
	
		<table cellpadding="4" cellspacing="4" 
				style="margin: 10px auto">
			<tr>
				<td>用户名</td>
				<td>
					<c:choose>
						<c:when test="${empty u.id }">
							<input name="username" 
						   		class="easyui-textbox"
						   		data-options="required:true,width:180,
						   		validType:'remote[\'${pageContext.request.contextPath }/user/getUsername\',\'username\']'"/>
						</c:when>
						<c:otherwise>
							${u.username }
						</c:otherwise>
					</c:choose>
				</td>
			</tr>
			<c:if test="${empty u.id}">
				<tr>
					<td>密码</td>
					<td>
						<input name="password" value="${u.password }"
							   class="easyui-textbox"
							   data-options="type:'password',
							   	required:true,width:180"/>
					</td>
				</tr>
			</c:if>
			<tr>
				<td>昵称</td>
				<td>
					<input name="nickname" value="${u.nickname }"
						   class="easyui-textbox"
						   data-options="
						   	required:true,width:180"/>
				</td>
			</tr>
			<tr>
				<td>邮箱</td>
				<td>
					<input name="email" value="${u.email }"
						   class="easyui-textbox"
						   data-options="validType:'email',
						   	required:true,width:180"/>
				</td>
			</tr>
			<tr>
				<td>联系方式</td>
				<td>
					<input name="tel" value="${u.tel }"
						   class="easyui-numberbox"
						   data-options="
						   	required:true,width:180"/>
				</td>
			</tr>
			<tr>
				<td>状态</td>
				<td>
					<input name="status" value="${u.status }"
						   class="easyui-combobox"
						   data-options="
						   	 required:true,width:180,panelHeight:80,
						   	 valueField:'id',    
    						 textField:'text',
    						 url:'${pageContext.request.contextPath }/user/getStatus'"/>
				</td>
			</tr>
			<tr>
				<td>图片</td>
				<td>
					<c:choose>
						<c:when test="${empty u.id }">
							<input name="pic" 
						   		class="easyui-filebox"
						   		data-options="
						   	 	required:true,width:180,buttonText:'浏览'"/>
						</c:when>
						<c:otherwise>
							<img 
								src="${pageContext.request.contextPath }/user/getPic/${u.id}?d=<%=Math.random() %>" 
								width="100" height="50" />
							<a href="javascript:void(0);" onclick="delPic(this);">删除</a>
						</c:otherwise>
					</c:choose>
				</td>
			</tr>
		</table>
	
	</form>
	<script type="text/javascript">
		function delPic(obj){
			//obj表示a元素   a元素获取父元素 父元素表示td
			var td_ = $(obj).parent();
			    td_.empty();//清空td下所有元素
			
			//拼装easyui上传组件
			var html_ = 
				'<input name="pic"' + 
				'class="easyui-filebox"' +
				'data-options="required:true,width:180,buttonText:\'浏览\'"/>';
			//追加easyui上传组件
			$(td_).append(html_);
			//解析td元素下easyui组件  不解析加载不了样式
			$.parser.parse(td_);  
		}
	</script>
	
</body>
