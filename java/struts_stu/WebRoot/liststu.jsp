<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>首页</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
   
  </head>
  <body>
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          	按条件查询
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
	      <form class="form-horizontal" role="form" 
		  method="POST" action="list_student.action">
			<input type="hidden" name="currentPage" value="1"/>
		  <div class="form-group">
		    <label for="name" class="col-sm-2 
		    control-label">书籍名字:</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" 
		      id="name" value="${name}" name="name" placeholder="name">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="email" class="col-sm-2 
		    control-label">email:</label>
		    <div class="col-sm-10">
		       <input type="text" class="form-control" 
		      id="email"  value="${email}" name="email" placeholder="email">
		    </div>
		  </div>
		  <div class="form-group">
		    <div class="col-sm-offset-2 col-sm-10">
		      <button type="button" 
		      class="btn btn-default"
		      onclick="queryByConditions()"
		       >提交</button>
		        <button type="button" 
		      class="btn btn-danger"
		       onclick='export2Excel()'>导出到EXCEL</button>
		    </div>
		  </div>
		</form>  	
      </div>
    </div>
  </div>

</div>
 	<table class="table table-hover table-striped
 	table-bordered table-condensed">
 		<thead>
 			<tr>
 				<td>编号</td>
 				<td>名字</td>
 				<td>年龄</td>
 				<td>邮箱</td>
 				<td>性别</td>
 				<td>密码</td>
 				<td>操作</td>
 			</tr>
 		</thead>
 		<tbody  id="data">
	 		<%-- <c:forEach items="${page.rows}" var="stu">
	 				<tr>
	 					<td>${stu.id}</td>
	 					<td>${stu.name}</td>
	 					<td>${stu.age}</td>
	 					<td>${stu.email}</td>
	 					<td>${stu.gender}</td>
	 					<td>${stu.pwd}</td>
	 					<td><button type='button' onclick='et(${stu.id})' class="btn btn-primary">更新</button></td>
	 				</tr>
 			</c:forEach> --%>
 		</tbody>
 	</table>
 	<div style="text-align:center">
 		<button type='button' class='btn btn-primary' id='first'>首页</button>
 		<button type='button'  class='btn btn-primary' id='pre'>上一页</button>
 		<button type='button'class='btn btn-primary' id='next'>下一页</button>
 		<button type='button' class='btn btn-primary' id='end'>尾页</button>
 	</div>
 	<!-- 模态框 -->
 	
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ajaxfileupload.js"></script>
    <script>
    var tj="";
    function queryByConditions(){
    	var name = $("#name").val();
		var email = $("#email").val();
		
		 tj = "";
		if(name!=null && name!=""){
			tj+="&name="+name
		}
		if(email!=null && email!=""){
			tj+="&email="+email;
		}
		queryData(1,tj);
    }
    	var next,pre,pageCount;
    	$(function(){
    		queryData(1,tj);
    		$("#first").click(function(){
    			queryData(1,tj);
    		});
    		$("#pre").click(function(){
    			queryData(pre,tj);
    		});
    		$("#next").click(function(){
    			queryData(next,tj);
    		});
    		$("#pageCount").click(function(){
    			queryData(pageCount,tj);
    		});
    	})
    	function queryData(cp,tj){
    		$.ajax({
    			type:"post",
    			url:"querySome_student",
    			data:"currentPage="+cp+tj,
    			dataType:"json",
    			success:function(msg){
    				console.log(msg);
    				pre = msg.pre;
    				next = msg.next;
    				pageCount = msg.pageCount;
    				var trs="";
    				$.each(msg.rows,function(i,stu){
    					trs+="<tr><td>"+stu.id+"</td><td>"+stu.name+"</td><Td>"+stu.age+"</td><Td>"+stu.email+"</td><Td>"+stu.gender+"</td><Td>"+stu.pwd+"</td><button type='button' onclick='et("+stu.id+")' class='btn btn-primary'>更新</button></tr>"
    				});
    				$("#data").html(trs);
    			}
    		});
    	}
    	/* function et(id){
    		window.location.
    		href="queryStuById_student.action?id="+id;
    	}
    	function etoak(cp){
    		
    		var name = $("#name").val();
    		var email = $("#email").val();
    		
    		var tj = "";
    		if(name!=null && name!=""){
    			tj+="&name="+name
    		}
    		if(email!=null && email!=""){
    			tj+="&email="+email;
    		}
    		window.location.href="list_student.action?currentPage="+cp+tj;
    	} */
   </script>
  </body>
</html>


