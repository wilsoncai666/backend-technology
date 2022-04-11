$(function(){
	
	//初始化用户模块列表 start
	$("#user_list").datagrid({
		url : contextPath + "/user/query",
		toolbar : "#user_list_toolbar",
		fit : true,
		fitColumns : true,
		rownumbers : true,
		pagination : true,
		pageNumber : 1,
		pageSize : 10,
		pageList : [10,50,100],
		columns : [[
		            {field:'id',title:'主键ID',checkbox:true,align:"center"},    
		            {field:'username',title:'用户名',align:"center",width:30,sortable:true},
		            {field:'password',title:'密码',align:"center",width:120},
		            {field:'nickname',title:'昵称',align:"center",width:40},
		            {field:'email',title:'邮箱',align:"center",width:60},
		            {field:'tel',title:'联系方式',align:"center",width:45},
		            {field:'status',title:'状态',align:"center",width:25,
		            	formatter:function(value,row,index){
		            		if(value == "0"){
		            			return "冻结";
		            		}else if(value == "1"){
		            			return "启用";
		            		}
		            		return "";
		            	}},
		            {field:'createTime',title:'创建时间',align:"center",width:80}
		            ]]
	});
	//初始化用户模块列表 end
	
});

//增删查改 操作事件
var objEvent = {
		add : function(){
			dialog("user_add").dialog({
				href : contextPath + "/user/userAddUpdate?d=" + Math.random(),
				title : "新增用户",
				width : 450,
				height : 350,
				buttons : [
					           {
					        	   text : "提交",
					        	   iconCls : "icon-ok",
					        	   handler : function(){
					        		  $("#user_form").form("submit",{
					        			  url : contextPath + "/user/doAdd",
					        			  onSubmit : function(){
					        				  return $(this).form('validate');
					        			  },
					        			  success : function(result){
					        				  var data = $.parseJSON(result);
					        				  if(data.code == 200){
					        					  $("#user_add").dialog("close");
					        					  $("#user_list").datagrid("reload");
					        				  }
					        				  //显示错误信息
				        					  $.messager.show({
				        						 title : "提示",
				        						 msg : data.msg,
				        						 width : 270,
				        					     height : 120
				        					  });
					        			  }
					        		  });
					        	   }
					           },
					           {
					        	   text : "重置",
					        	   iconCls : "icon-no",
					        	   handler : function(){
					        		   $("#user_form").form("clear");
					        	   }
					           }
				           ]
			});
		},
		del : function(){
			//是否选中一行记录
			var rows = $("#user_list").datagrid("getSelections");
			if(rows.length == 0){
				//显示错误信息
				$.messager.show({
					 title : "提示",
					 msg : "请选中一行用户记录！",
					 width : 270,
				     height : 120
				});
			  return;
			}
			
			$.messager.confirm(
					'提示', '您确定删除？', function(r){
				if (r){
					/*var ids = [];
					for(var i=0;rows.length;i++){
						var row = rows[i];
						ids.push(row.id);
						//ids[i] = row.id
					}
					ids = ids.join(",");*/
					
					//遍历选中rows信息并格式化id
					var data = $.map(rows, function(row){
						  return row.id;
					});
					
					$.ajax({
						url : contextPath + "/user/delete",
						contentType : "application/json; charset=UTF-8",
						data : JSON.stringify(data),
						type : "post",
						dataType : "json",
						success : function(result){
							if(result.code == 200){
								$("#user_list").datagrid("reload");
							}
							$.messager.show({
								 title : "提示",
								 msg : result.msg,
								 width : 270,
							     height : 120
							});
						}
					});
				}
			});


			
		},
		query : function(){
			dialog("user_query").dialog({
				href : contextPath + "/user/query",
				title : "查询用户",
				width : 450,
				height : 350,
				buttons : [
				           {
				        	   text : "查询",
				        	   iconCls : "icon-search",
				        	   handler : function(){
				        		   $("#user_list").datagrid("load",{
				        			   username : $("#username").textbox("getValue"),
				        			   nickname : $("#nickname").textbox("getValue"),
				        			   email    : $("#email").textbox("getValue"),
				        			   tel      : $("#tel").numberbox("getValue"),
				        			   status   : $("#status").combobox("getValue")
				        		   });
				        		   $("#user_query").dialog("close");
				        	   }
				           }
				           ]
			});
		},
		update : function(){
			//是否选中一行记录
			var rows = $("#user_list").datagrid("getSelections");
			if(rows.length != 1){
				//显示错误信息
				$.messager.show({
					 title : "提示",
					 msg : "请选中一行用户记录！",
					 width : 270,
				     height : 120
				});
			  return;
			}
			//获取一行记录
			var row = rows[0];
			
			dialog("user_update").dialog({
				href : contextPath + "/user/userAddUpdate?d=" + Math.random() + "&userId=" + row.id ,
				title : "修改用户",
				width : 450,
				height : 350,
				buttons : [
				           	{
					        	   text : "修改",
					        	   iconCls : "icon-ok",
					        	   handler : function(){
					        		  $("#user_form").form("submit",{
					        			  url : contextPath + "/user/doUpdate",
					        			  onSubmit : function(p){
					        				  p.id = $("#userId").attr("v");
					        				  return $(this).form('validate');
					        			  },
					        			  success : function(result){
					        				  var data = $.parseJSON(result);
					        				  if(data.code == 200){
					        					  $("#user_update").dialog("close");
					        					  $("#user_list").datagrid("reload");
					        				  }
					        				  //显示错误信息
				        					  $.messager.show({
				        						 title : "提示",
				        						 msg : data.msg,
				        						 width : 270,
				        					     height : 120
				        					  });
					        			  }
					        		  });
					        	   }
					           },
					           {
					        	   text : "重置",
					        	   iconCls : "icon-no",
					        	   handler : function(){
					        		   $("#user_form").form("clear");
					        	   }
					           }
				           ]
			});
		}
}

//封装easyui dialog
function dialog(obj){
	//定义一个jquery对象
	var objId = $("#" + obj);
	//判断对象是否存在
	if(objId.size() > 0){//对象存在
		return objId;
	}
	//对象不存在
	var html_ = '<div id="' + obj + '" data-options="closed:false,modal:true,cache:false"></div>';
	//把元素追加到jsp页面 body元素最后面（也就是最后一行）
	objId = $(html_).appendTo(document.body);
	//$(document.body).append(html_);
	return objId;
}












