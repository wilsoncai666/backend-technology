$(function(){
	
	//初始化登录窗口
	$("#login-dialog").dialog({
		title : '登录',
		width : 280,
		height : 190,
		modal : true,
		buttons : [
			           {
			        	  text : "登录",
			        	  iconCls : "icon-ok",
			        	  handler : function(){
			        		  //登录操作
			        		  login();
			        	  }
			           },{
			        	   text : "重置",
			        	   iconCls : "icon-no",
			        	   handler : function(){
			        		   //重置表单项数据
			        		   $("#login-form").form("reset");
			               }
			           }
		           ]
	});
	
	//初始化用户名
	$("#uname").textbox({
		required : true,
		missingMessage : "请输入用户名",
		width : 180,
		iconCls : "icon-man"
	});
	
	//获取用户名焦点
	$("#uname")
		.siblings("span")
		.find("input[type=text]")
		.focus();
	
	//初始化密码
	$("#pwd").textbox({
		required : true,
		missingMessage : "请输入密码",
		width : 180,
		iconCls : "icon-lock",
		type : "password"
	});
	
	//keyCode是event事件中的属性    13表示键盘中的回车键
	$("#uname").textbox("textbox").keyup(function(e){
		if(e.keyCode == 13){
			login();
		}
	});
	
	$("#pwd").textbox("textbox").keyup(function(e){
		if(e.keyCode == 13){
			login();
		}
	});
	
});

//登录操作
function login(){
	$("#login-form").form("submit",{
		//发送请求访问后台
		url : contextPath + "/login/login",
		//提交之前触发onSubmit函数
		onSubmit : function(p){
			//p对象表示附加参数 自定义参数key为etoak（可以随意设置）
			p.etoak = "et1703"
			//效验表单项是否通过，通过返回true，
			//反之false，返回false不触发 ，url请求
			return $(this).form("validate");
		},
		//后台响应是触发success函数
		success : function(result){
			/**
			 * success函数
			 * 注意事项：
			 *     jquery ajax 响应数据时会把json字符串转成json对象
			 *     jquery easyui 响应数据时不会把json字符串转成json对象
			 *     
			 *     使用jquery函数$.parseJSON()，
			 *     把json字符串转换成json对象
			 * */
			var data = $.parseJSON(result);
			if(data.code == 200){
				//js  get请求
				window.location.href = 
					contextPath + "/index/index";
			}else{
				 if(data.code == -1){
					//获取用户名焦点
					$("#uname")
						.siblings("span")
						.find("input[type=text]")
						.focus();
				 }else if(data.code == -2){
					//获取密码焦点
					 $("#pwd")
						.siblings("span")
						.find("input[type=password]")
						.focus();
				 }
				 
				 //显示错误信息
				 $.messager.show({
					 title : "提示",
					 msg : data.msg,
					 width : 270,
				     height : 120
				 });
			}
		}
	});
}







