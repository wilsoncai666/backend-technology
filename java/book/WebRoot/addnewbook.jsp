<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>添加书籍</title>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript">
    	$(function(){
    			//获得下拉菜单的内容 即书籍类别
    			fillcategory();
    		
    	});
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
    	var i=0;
    	function addPic(){
    		var myf = "<p>请选择文件:<input type='file'"+
    " name='myf'/><br>是否设为封面:<input name='face' type='radio' value='"+i+"'/></p>";
    		$("#pic").append(myf);
    		i++;
    	}
    </script>
  </head>
  <body>
   	<div align="center">
   		<!-- 文件上传：1.form必须是post 2. enctype -->
   		<form action="book" method="POST" enctype="multipart/form-data"> 
   			<input type="hidden" name="method" value="add"/>
   			<p>书籍名字:<input type="text" name="name"/></p>
   			<p>所属类别:<select id="categoryid" name="categoryid">
   				</select></p>
   			<p>书籍作者:<input type="text" name="author"/></p>
   			<p>书籍价格:<input type="text" name="price"/></p>
   			<p>出版日期:<input type="text" name="publishdate"/></p>
   			<p>书籍库存:<input type="text" name="booknum"/></p>
   			<button onclick="addPic()" type="button">添加书籍图片</button>
   			<div id="pic">
   			</div>
   			<input type="submit" value="提交"/>
   		</form>
   	</div>
  </body>
</html>







