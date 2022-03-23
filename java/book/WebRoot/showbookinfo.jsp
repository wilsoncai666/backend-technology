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
    <script>
    	$(function(){
    		queryBookByIdWithPics();		
    	});
    	//根据书籍ID查询书籍信息【包括图片信息】
    	function queryBookByIdWithPics(){
    		$.ajax({
    			type:"post",
    			url:"book",
    			data:"method=queryBookByIdWithPics&id=${param.id}",
    			dataType:"json",
    			success:function(msg){
    				console.log(msg);
    				$("#bookname").text(msg.name);
    				$("#bookauthor").text(msg.author);
    				$("#bookprice").text(msg.price);
    				$("#booknum").text(msg.booknum);
    				$("#bookpdate").text(msg.pdate);
    				var pics = "";
    				$.each(msg.pics,function(i,pic){
    						pics+="<img width='200px' height='200px' src='<%=path%>"+pic.realpath+"'></img>";
    					
    				});
    				$("#pics").html(pics);
    			}
    			
    		});
    	}
    </script>

  </head>
  <body>
   <div style="text-align:center;">
   		<h2>书籍详细信息</h2>
   		<p>书名:<span id="bookname" ></span></p>
   		<p>作者:<span id="bookauthor" ></span></p>
   		<p>价格:<span id="bookprice" ></span></p>
   		<p>数量:<span id="booknum" ></span></p>
   		<p>出版日期:<span id="bookpdate" ></span></p>
   		<div id="pics"></div>
   		
   </div>
  </body>
</html>







