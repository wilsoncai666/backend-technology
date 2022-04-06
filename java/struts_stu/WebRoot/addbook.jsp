<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
  	  <!-- 
  	POST /book  HTTP/1.1
  	Host:localhost:8080
  	------xxadfafdafdafdsaxxxxx
  	name="name"
  	xxx
  	------xxadfafdasfxc
  	
  	WEBServer  ServerSocket.getInputStream()
  	request.getInputStream()
  
   -->
  	<form class="form-horizontal" role="form" 
	action="book"  method="POST" 
	enctype="multipart/form-data">
		
	  <div class="form-group">
	    <label for="name" class="col-sm-2 
	    control-label">名字:</label>
	    <div class="col-sm-10">
	      <input type="text" class="form-control" 
	      id="name" name="name" placeholder="请输入名字">
	    </div>
	  </div>
	  <!-- 价格 -->
	  <div class="form-group">
	    <label for="price" class="col-sm-2 
	    control-label">价格:</label>
	    <div class="col-sm-10">
	      <input type="number" class="form-control" 
	      id="price" name="price">
	    </div>
	  </div>
	  <!-- 作者 -->
	  <div class="form-group">
	    <label for="author" class="col-sm-2 
	    control-label">作者:</label>
	    <div class="col-sm-10">
	      <input type="text" class="form-control" 
	      id="author" name="author">
	    </div>
	  </div>
	  <!-- 所属类别 -->
	  <div class="form-group">
	    <label for="categoryid" class="col-sm-2 
	    control-label">所属类别:</label>
	    <div class="col-sm-10">
	    	<select class="form-control" id="categoryid"
	    	 name="categoryid">
	    	</select>
	    </div>
	  </div>
	  <!-- 出版日期 -->
	  <div class="form-group">
	    <label for="publishdate" class="col-sm-2 
	    control-label">出版日期:</label>
	    <div class="col-sm-10">
	      <input type="date" class="form-control" 
	      id="publishdate" name="publishdate" >
	    </div>
	  </div>
	  <!-- 状态 -->
	  <div class="form-group">
	    <label for="status" class="col-sm-2 
	    control-label">状态:</label>
	    <div class="col-sm-10">
	      <select id="status" name="status">
	      	<option value="1">==上架==</option>
	      	<option value="0">==下架==</option>
	      </select>
	    </div>
	  </div>
	  <!-- 图片 -->
	  <div class="form-group">
	  	<button onclick="addPic()" type="button" 
	  class='btn btn-primary' style="margin-left:20px">添加图片</button>
	  	<div class="col-sm-10" id="pics">
	  		
	  	</div>
	  </div>
	  <div class="form-group">
	    <div class="col-sm-offset-2 col-sm-10">
	      <button type="submit" 
	      class="btn btn-default">提交</button>
	    </div>
	  </div>
	</form>  	
  
  
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script>
    	var i=0;
    	function addPic(){
    		var strs="请选择:<input type='file'"+
    	"name='pic'/>是否是封面:<input type='radio'"+
    	" name='fm' value='"+i+"'/>";
    		$("#pics").append(strs);
    		i++;
    	}
    	//当页面加载完毕的时候
    	$(function(){
    		queryAllCas();
    	});
    	//查询所有类别的方法
    	/*
    		POST  /book  Http/1.1
    		Host:xxx
    		
    		method=queryAllCas
    	*/
    	function queryAllCas(){  
			$.ajax({
				type:"post",
				url:"book",
				data:"method=queryAllCas",
				dataType:"json",
				success:function(msg){//msg==>List<Category>
					var ops="<option value='-1'>==请选择==</option>";
					$.each(msg,function(i,ca){
						ops+="<option value='"
					+ca.id+"'>"+ca.name+"</option>";
					});
					$("#categoryid").html(ops);
				}
			});    		
    	}
    </script>
  </body>
</html>




