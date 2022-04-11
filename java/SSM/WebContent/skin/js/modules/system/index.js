$(function(){
	
	//权限 start
	$("#per_tree").tree({
		url : contextPath + "/index/getPerTree",
		animate : true,
		lines : true,
		onClick : function(node){
			
			var url = node.attributes.url;
			if(url != null && url != ''){
				//url = contentPath + url;
				
				var content 
					= '<iframe src="' + contextPath + url + '" frameborder="0" width="100%" height="100%" scrolling="auto"></iframe>';
				var obj = {
					id : node.id,
					title : node.text,
					content : content
				}
				//添加选项卡
				tabs(obj);
			}
			
		}
	});
	//权限 end
	
	//选项卡 start
	$("#content_tabs").tabs({
		fit : true,
		border : false
	});
	//选项卡 end
	
});

//动态添加选项卡
function tabs(obj){
	
	var options = {
		//选项卡面板的ID属性。
		id : obj.id,
		//选项卡面板的标题文本。	
		title : obj.title,
		//选项卡面板的内容。
		content : obj.content,
		//关闭选项卡
		closable : true
	};
	
	//当前参数title选项卡是否存在
	var exists = 
		$("#content_tabs").tabs("exists",obj.title);
	if(exists){
		//选中参数title选项卡
		$("#content_tabs").tabs("select",obj.title);
		//通过标题获取当前选项卡
		var tab = 
			$("#content_tabs").tabs("getTab",obj.title);
		//更新当前选项卡
		$("#content_tabs").tabs("update",{
			tab : tab,
			options : options
		});
	}else{
		$("#content_tabs").tabs("add",options);
	}
}







