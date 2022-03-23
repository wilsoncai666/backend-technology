package com.etoak.book.admin.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.etoak.book.admin.bean.Admin;
import com.etoak.book.admin.dao.IAdminDao;
import com.etoak.book.admin.dao.impl.AdminDaoImpl;

public class Login extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		//1.获得客户端参数
		String name = request.getParameter("name");
		String pwd = request.getParameter("pwd");
		//2.调用dao层查询是否存在该对象
		IAdminDao dao = new AdminDaoImpl();
		Admin admin = dao.queryAdminByNameAndPwd(name, pwd);
		//3.如果有，则登陆成功！
		if(admin!=null && admin.getName()!=null){
			//将Admin信息添加到session中 跳转到后台管理主页面
			request.getSession().setAttribute("admin",admin);
			response.sendRedirect("adminindex.jsp");
		}else{
			//4.没有则登陆失败 重新登陆
			response.sendRedirect("adminlogin.jsp");
			
		}
	}
	
	

	
	
	
	
}

