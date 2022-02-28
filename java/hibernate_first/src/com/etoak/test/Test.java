package com.etoak.test;

import java.sql.Timestamp;

import com.etoak.dao.IStudentDao;
import com.etoak.dao.StudentDaoImpl;
import com.etoak.po.Student;

public class Test {
	public static void main(String[] args) {
		Student stu = new Student();
		stu.setName("etoak");
		stu.setAge(123);
		stu.setBirth(new Timestamp(System.currentTimeMillis()));
		
		IStudentDao dao = new StudentDaoImpl();
		//添加
		dao.addStudent(stu);
		//查询
		Student s = dao.queryStuById(1);
		//修改
		s.setName("newName");
		dao.updateStudent(s);
		//删除
		dao.deleteStudent(s);
	}
}
