package com.etoak.dao;

import java.util.List;

import com.etoak.po.Student;

public interface IStudentDao {
	public Student queryByNameAndPwd(String name,String pwd);
	public  int countStudent(String name,String email);
	public List<Student> querySome(String name,String email,int start,int pageSize);
	
	public void updateStudent(Student stu);
	public Student queryById(int id);
}
