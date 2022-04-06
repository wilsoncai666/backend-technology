package com.etoak.action;

import java.util.List;

import com.etoak.factory.Page;
import com.etoak.po.Student;
import com.etoak.service.StudentService;

public class StudentAction {
	private int id;
	public void setId(int id){this.id = id;}
	private Student stu;
	public Student getStu(){return stu;}
	public void setStu(Student stu){
		this.stu = stu;
	}
	public String update(){
		System.out.println(stu);
		ss.update(stu);
		return "update_success";
	}
	public String queryStuById(){
		stu = ss.queryById(id);
		return "queryStuById_success";
	}
	StudentService ss = new StudentService();
	private int currentPage;
	public void setCurrentPage(int cp){currentPage = cp;}
	
	public void setEmail(String email) {
		this.email = email;
	}

	private String email;
	
	
	
	private Page<Student> page;
	public Page<Student> getPage(){return page;}
	public String querySome(){
		page = new Page<Student>();
		//currentPage pageSize3   start
		page.setCurrentPage(currentPage);
		//total
		int total = ss.countStudent(name,email);
		page.setTotal(total);

		//rows
		List<Student> rows = ss.querySome(name,email,
				page.getStart(),page.getPageSize());
		System.out.println(rows);
		page.setRows(rows);
		
		return "querySome_success";
	}
	public String list(){
		page = new Page<Student>();
		//currentPage pageSize3   start
		page.setCurrentPage(currentPage);
		//total
		int total = ss.countStudent(name,email);
		page.setTotal(total);

		//rows
		List<Student> rows = ss.querySome(name,email,
				page.getStart(),page.getPageSize());
		System.out.println(rows);
		page.setRows(rows);
		
		return "list_success";
	}
	
	private String name;
	private String pwd;
	public void setName(String name){this.name = name;}
	public void setPwd(String pwd){this.pwd = pwd;}
	
	public String getEmail() {
		return email;
	}

	public String getName() {
		return name;
	}

	public String login(){
		
		Student stu = ss.login(name,pwd);
		if(stu!=null && stu.getName()!=null){
			return "login_success";
		}else{
			return "login_fail";
		}
	}
}
