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
  	<form action="update_student.action" method="post" class="form-horizontal" role="form">
  <div class="form-group">
  	<input type="hidden" name="stu.id" value="${stu.id}" />
    <label for="name" class="col-sm-2 control-label">名字:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name"
      name="stu.name" value="${stu.name}" placeholder="请输入用户名字">
    </div>
  </div>
  <div class="form-group">
    <label for="pwd" class="col-sm-2 control-label">密码:</label>
    <div class="col-sm-10">
      <input type="text" value="${stu.pwd}" class="form-control" id="pwd" name="stu.pwd" >
    </div>
  </div>
  <div class="form-group">
    <label for="age" class="col-sm-2 control-label">年龄:</label>
    <div class="col-sm-10">
      <input type="number" value="${stu.age}" class="form-control" id="age" name="stu.age" >
    </div>
  </div>
  <div class="form-group">
    <label for="email" class="col-sm-2 control-label">邮箱:</label>
    <div class="col-sm-10">
      <input type="email" value="${stu.email} "class="form-control" id="email" name="stu.email" >
    </div>
  </div>
  <div class="form-group">
    <label for="gender" class="col-sm-2 control-label">性别:</label>
    <div class="col-sm-10">
      	<select id="gender" name="stu.gender">
      		<option value="男" ${stu.gender=="男"?"selected":""}>==男==</option>
      		<option value="女" ${stu.gender=="女"?"selected":""}>==女==</option>
      	</select>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">提交</button>
    </div>
  </div>
</form>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>