$(function(){
	
	$.messager.show({
		
		title : "提示",
		width : 270,
		height : 100,
		timeout : 5000,
		msg : "我是messager-show!",
		showType : "slide",
		
	});
	
	$.messager.alert("提示","我是messager-alert","info",
			function(){
				alert("alert");
			});
	
	$.messager.confirm("提示","是否删除！",function(b){
		//b参数 ：点击确定返回true 点击取消返回false
		if(b){
			alert("确定");
		}else{
			alert("取消");
		}
	});
	
	
	$.messager.prompt("提示","请输入信息！",function(r){
		//r参数：表示输入信息，并接收信息
		if(r){
			alert(r);
		}else{
			alert("取消");
		}
	});
	
	
	
	
	
	
	
	
	
	
});
