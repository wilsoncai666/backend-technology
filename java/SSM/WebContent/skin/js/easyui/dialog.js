$(function(){
	
	$("#et").dialog({
		
		title : "我是个dialog",
		width : 450,
		height : 350,
		modal : true,
		closed : true,
		//href : "calendar.jsp",
		toolbar : "#et-toolbar",
		buttons : [
		           
		           {
		        	   text : "保存",
		        	   iconCls : "icon-ok",
		        	   handler : function(){
		        		   alert("保存");
		        	   }
		           },
		           {
		        	   text : "关闭",
		        	   iconCls : "icon-cancel",
		        	   handler : function(){
		        		   $("#et").dialog("close");
		        	   }
		           }
		           
		           ]
	});
	
});

//打开窗口
function  d_open(){
	$("#et").dialog("open");
}







