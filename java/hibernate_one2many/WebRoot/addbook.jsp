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
	action="addorder_cc.action"  method="POST" 
	>
		
	 
	  <!-- 所属类别 -->
	  <div class="form-group">
	    <label for="cusid" class="col-sm-2 
	    control-label">所属客户:</label>
	    <div class="col-sm-10">
	    	<select class="form-control" id="cusid"
	    	 name="cusid">
	    	</select>
	    </div>
	  </div>
	  <!-- 出版日期 -->
	  <div class="form-group">
	    <label for="money" class="col-sm-2 
	    control-label">订单金额:</label>
	    <div class="col-sm-10">
	      <input type="number" class="form-control" 
	      id="money" name="money" >
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
    $(function(){
    	$.post("queryAllCus_cc.action",
				"",showcos,"json")
		
    	
    })
    			function showcos(msg){
   			strs = msg;
   			console.log(msg);
   			var ops = "<option value='-1'>请选择</option>";
   			$.each(msg,function(i,co){
   				ops+="<option value='"+co.id+"'>"+co.name+"</option>";
   			});
			$("#cusid").html(ops);   			
   		}
    </script>
  </body>
</html>




