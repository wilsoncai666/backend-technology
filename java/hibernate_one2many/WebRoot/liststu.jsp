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
		  method="POST" action="update_cc.action">
			<input type="hidden" name="currentPage" value="1"/>
		  <div class="form-group">
		    <label for="name" class="col-sm-2 
		    control-label">客户列表:</label>
		    <div class="col-sm-10">
		    	<select  onchange="queryOrders(this.value)" name="cusid" class="form-control" id="cusid" >
		    	</select>
		    </div>
		  </div>
		</form>  	
      </div>
    </div>
  </div>

</div>
 
 	<table class="table table-striped table-hover table-bordered table-condensed">
 		<thead>
 			<tr>
 				<td>编号</td>
 				<td>金额</td>
 				<td>所属客户</td>
 				<td>操作</td>
 			</tr>
 		</thead>
 		<tbody id="data"></tbody>
 	</table>
 	<!-- modal -->
 	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	    <form class="form-horizontal" role="form" 
	action="updateorder_cc.action"  method="POST" >
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
	        <h4 class="modal-title" id="myModalLabel">书籍详细信息</h4>
	      </div>
	      <div class="modal-body">
	          	
		<input type="hidden"  id="ordid" name="ordid"
		value="" />
	 
	  <!-- 价格 -->
	  <div class="form-group">
	    <label for="price" class="col-sm-2 
	    control-label">金额:</label>
	    <div class="col-sm-10">
	      <input type="number" class="form-control" 
	      id="money" name="money">
	    </div>
	  </div>
	  
	  
	  

	
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        <button type="submit" class="btn btn-primary">提交</button>
	      </div>
	      </form>
	    </div>
	    
	  </div>
	</div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ajaxfileupload.js"></script>
   	<script>
   		$(function(){
   				$.post("queryAllCus_cc.action",
   				"",showcos,"json")
   			
   		});
   		
   		function queryOrders(v){
   			$.post("queryOrdersByCusId_cc.action",
   	   				"cusid="+v,showorders,"json")
   		}
   		function showorders(msg){
   			console.log(msg);
   			var trs="";
   			$.each(msg,function(i,order){
   				trs+="<tr><Td>"+order.id+"</td><Td>"+order.money+"</td><Td>"+order.cus.name+"</td><Td><button type='button' onclick='etoak("+order.id+","+order.money+")' class='btn btn-primary'>修改</button></td></tr>";
   			});
   			$("#data").html(trs);
   		}
   		function showcos(msg){
   			strs = msg;
   			console.log(msg);
   			var ops = "<option value='-1'>请选择</option>";
   			$.each(msg,function(i,co){
   				ops+="<option value='"+co.id+"'>"+co.name+"</option>";
   			});
			$("#cusid").html(ops);   			
   		}
   		function etoak(id,money){
   			$("#ordid").val(id);
   			$("#money").val(money);
   			$("#myModal").modal("show");
   			
   		}
   	</script>
  </body>
</html>


