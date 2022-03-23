<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML >
<html>
  <head>
    <base href="<%=basePath%>">
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript">
    	var currentPage,pageCount,next,pre;
    	var conditions = "";//条件
    	function fillcategory(){
    		$.ajax({
    			type:"post",
    			url:"book",
    			data:"method=queryAllCategory",
    			dataType:"JSON",
    			success:function(msg){//===>List
    				console.log(msg);
    				var op = "<option value='-1'>==请选择==</option>";
    				$.each(msg,function(i,category){
    					op+="<option value='"+category.id+"'>"+category.name+"</option>"
    					
    				});
    				$("#categoryid").html(op);
    			},
    			error:function(xmlhttp,status){
    				console.log(xmlhttp+"==>"+status);
    			}
    		});
    	}
    	$(function(){
    			queryData(1,conditions);
    			//填充类别下拉菜单
    			fillcategory();
    			$("#first").click(function(){
    				queryData(1,conditions);
    			});
    			$("#pre").click(function(){
    				queryData(pre,conditions);
    			});
    			$("#next").click(function(){
    				queryData(next,conditions);
    			});
    			$("#end").click(function(){
    				queryData(pageCount,conditions);
    			});
    			$("#updatepanel").hide();
    			
    			
    	});
    	function queryData(cp,conds){
    		$.ajax({
				type:"post",
				url:"book",
				data:"method=querySomeBook&currentPage="+cp+conds,
				dataType:"json",
				success:function(msg){//page
					console.log(msg);
					var tr="";
					$.each(msg.data,function(i,book){
						tr+="<tr><td>"+(msg.start+i+1)+"</td><td>"+book.name+"</td><td>"+book.author+"</td><td>"+book.price+"</td><td>"+book.pdate+"</td><td>"+book.booknum+"</td><td>"+(book.status=="0"?"下架":"上架")+"</td><td><button type='button' onclick=\"changestatus('"+book.id+"')\">"+(book.status=="0"?"上架":"下架")+"</button> <button type='button' onclick=\"updatebook('"+book.id+"')\">修改</button> <button type='button' onclick=\"showbookinfo('"+book.id+"')\">详情</button></td></tr>";
					
 					});
					//给全局参数赋值
					currentPage = msg.currentPage;
					pre  = msg.pre;
					next = msg.next;
					pageCount = msg.pageCount;
					$("#currentP").text(currentPage);
					$("#pageC").text(pageCount);
					
					$("#books").html(tr);
				},
				error:function(xmlhttp,status){
					console(xmlhttp+"-->"+status);
				}
				
				
			});
    	}
    	
    	function querySomeByConditions(){
    		//每次conditions都要清空
    		conditions="";
    		var status=$("#status").val();
    		var categoryid = $("#categoryid").val();
    		var name = $("#name").val();
    	
    		if(status!="-1"){//状态条件
    			conditions+="&status="+status;
    		}
    		if(categoryid!="-1"){//类别条件
    			conditions+="&categoryid="+categoryid;
    		}
    		if(name!=""){//书名条件
    			conditions+="&name="+name;
    		}
    		queryData(1,conditions);
    	}
    	/* 请求:  请求行:    方法  资源  协议版本     POST  /book HTTP/1.1
    			 请求头:	   Host:localhost:
    				 	   Accept:text/json
    				 
    			消息体:		
    						method=queryBookById&id=xxx
    	
    	*/
    	function updatebook(bookid){
    		//1.根据ID查询书籍信息 
    		$.ajax({
    			type:"post",
    			url:"book",
    			data:"method=queryBookById&id="+bookid,
    			dataType:"json",
    			success:function(msg){
    				$("#bname").val(msg.name);
    				$("#bprice").val(msg.price);
    				$("#bpdate").val(msg.pdate);
    				$("#bauthor").val(msg.author);
    				$("#bid").val(msg.id);
    			},
    			error:function(xmlHttp ,status){
    				console.log(xmlhttp+"===>"+status);
    			}
    			
    		});
    		
    		
    		//3.显示div
    		$("#updatepanel").show();
    		
    	}
    	function checknull(){
    		if($("#bname").val()==""){
    			alert("书名必填");
    			return false;
    		}
    		return true;
    	}
    	function changestatus(bookid){
    		$.ajax({
    			type:"post",
    			url:"book",
    			data:"method=changestatus&id="+bookid,
    			dataType:"json",
    			success:function(msg){
    				
    				if(msg.flag=="success"){
    					//重新加载数据
    					queryData(currentPage,conditions);
    				}
    				//alert(msg);
    			},
    			error:function(xmlHttp ,status){
    				console.log(xmlhttp+"===>"+status);
    			}
    			
    		});
    	}
    	function showbookinfo(bookid){
    		window.location.href="showbookinfo.jsp?id="+bookid;
    	}
    	function exportSomeByConditions(){
    		conditions="";
    		var status=$("#status").val();
    		var categoryid = $("#categoryid").val();
    		var name = $("#name").val();
    	
    		if(status!="-1"){//状态条件
    			conditions+="&status="+status;
    		}
    		if(categoryid!="-1"){//类别条件
    			conditions+="&categoryid="+categoryid;
    		}
    		if(name!=""){//书名条件
    			conditions+="&name="+name;
    		}
    		//根据条件导出到Excel表格中
    		exportToExcel(conditions);
    	}
    	function exportToExcel(conds){
    		window.location.href="book?method=exportToExcel"+conds;
    	}
    </script>
  </head>
  <body>
    <button onclick="window.location.href='addnewbook.jsp'" type="button" >添加新书</button>
    <div align="center">
    	状态:<select id="status" name="status">
    			<option value="-1">==请选择==</option>
    			<option value="1">上架</option>
    			<option value="0">下架</option>
    		</select>
    	类别:<select id="categoryid" name="categoryid"></select>
    	书名:<input type="text" id="name" name="name"/>
    	<input type="button" onclick="querySomeByConditions()" value="查询" />
    	<input type="button" onclick="exportSomeByConditions()" style="background:lightgreen;width:130px;height:30px" value="导出为EXCEL" />
     </div>
    
    <table border="1" cellspacing="0" width="700px" align="center">
    	<caption>书籍列表</caption>
    	<thead>
    		<tr>
    			<th>书籍编号</th>
    			<th>书籍名字</th>
    			<th>书籍作者</th>
    			<th>书籍价格</th>
    			<th>出版时间</th>
    			<th>书籍数量</th>
    			<th>书籍状态</th>
    			<th>操作</th>
    		</tr>
    	</thead>
    	<tbody id="books">
    		
    	</tbody>
    </table>
    <div align="center">
    	<div style="padding-left:200px;float:left">
    	<b>总共<span id="pageC"></span>页，当前是第
    	<span id="currentP"></span>页</b>
    	</div>
    	<div style="">
   	 	 <button type="button" id="first" >首页</button>
   		 <button type="button" id="pre" >上一页</button>
   		 <button type="button" id="next" >下一页</button>
  	 	 <button type="button" id="end" >末页</button>
  	 	 </div>
    </div>
    <div id="updatepanel" style="display:none;text-align:center;">
    	<hr style="width:90%" >
    	<form action="book" onsubmit="return checknull()" method="POST">
    		<input type="hidden" name="method" value="updatebook"/>
    		<input type="hidden" name="id" id="bid" />
    		<p>
    		书名:<input type="text" id="bname" name="name"/>
    		价格:<input type="number" id="bprice"  name="price"/>
    		</p>
    		<p>
    		作者:<input type="text" id="bauthor" name="author"/>
    		出版时间：<input type="date" id="bpdate" name="publishdate"/>
    		</p>
    		<button type="submit" >提交</button>
    	</form>
    </div>
  </body>
</html>







