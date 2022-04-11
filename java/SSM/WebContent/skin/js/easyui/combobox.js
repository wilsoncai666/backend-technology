$(function(){
	
	$("#et").combobox({
		
		url : contextPath + "/combobox/combobox",
		mode : "remote",
		panelHeight : 80,
		textField : "text",
		valueField : "value",
		/*data : [
		        {
		        	text : "java语言",
		        	value : "java"
		        },
		        {
		        	text : "C语言",
		        	value : "C"
		        },
		        {
		        	text : "C++语言",
		        	value : "C++"
		        }
		        ],*/
		 onSelect : function(r){
			 console.log(r.text);
			 console.log(r.value);
		 }
		
	});
	
});