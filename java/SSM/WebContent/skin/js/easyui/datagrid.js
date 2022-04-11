$(function(){
	
	$("#et").datagrid({
		//真正的自动展开/收缩列的大小，以适应网格的宽度，防止水平滚动。
		fitColumns : true,
		//自适应
		fit : true,
		//访问后台请求
		url : contextPath + "/datagrid/datagrid",
		//设置斑马线
		striped : true,
		//在从远程站点加载数据的时候显示提示消息。
		loadMsg : "正在玩命加载，请稍等...",
		//行号
		rownumbers : true,
		//如果为true，则只允许选择一行
		singleSelect : false,
		//设置分页工具栏（在底部加载工具栏）
		pagination : true,
		//设置当前页
		pageNumber : 1,
		//设置每页记录数
		pageSize : 2,
		//显示每页记录数列表
		pageList : [2,10,30,50,100],
		
		//设置标题和单元格值
		columns : [[
		            {title:"主键ID",field:"id",width:20,checkbox:true},
		            {title:"父ID",field:"pid",width:150,align:"center"},
		            {title:"权限名称",field:"name",width:180,align:"center"},
		            {title:"地址",field:"url",width:100,align:"center"},
		            {title:"状态",field:"status",width:140,align:"center",
		            	/**
		            	 * value表示单元格的值（当前单元格）
		            	 * row表示一行的对象
		            	 * index表示单元格在哪一行上（下标0开始）
		            	 * */
		            	formatter:function(value,row,index){
		            		
		            		/**
		            		 * js
		            		 *     1.== 只比较内容是否相等
		            		 *     2.=== 
		            		 *     先比较类型,类型不同，返回false
		            		 *     反之为true（类型相同），再比较内容是否相等
		            		 *     内容相等返回true，否则false
		            		 *     
		            		 * */
		            		
		            		if(value == "0"){
		            			return "禁用";
		            		}else if(value == "1"){
		            			return "启动";
		            		}
		            		
		            		return "";
		            	}
		            },
		            {title:"备注",field:"remark",width:100,align:"center"}
		            
		            ]]
	
	});
	
});