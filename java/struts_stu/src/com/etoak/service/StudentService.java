package com.etoak.service;

import java.util.List;

import com.etoak.dao.IStudentDao;
import com.etoak.dao.StudentDaoImpl;
import com.etoak.po.Student;

public class StudentService {
	private IStudentDao dao = new StudentDaoImpl();
	public Student login(String name, String pwd) {
		// TODO Auto-generated method stub
		return dao.queryByNameAndPwd(name, pwd);
	}
	public int countStudent(String name, String email) {
		// TODO Auto-generated method stub
		return dao.countStudent(name,email);
	}
	public List<Student> querySome(String name, String email, int start,
			int pageSize) {
		// TODO Auto-generated method stub
		return dao.querySome(name,email,start,pageSize);
	}
	public Student queryById(int id) {
		// TODO Auto-generated method stub
		return dao.queryById(id);
	}
	public void update(Student stu) {
		// TODO Auto-generated method stub
		dao.updateStudent(stu);
		
	}

}
