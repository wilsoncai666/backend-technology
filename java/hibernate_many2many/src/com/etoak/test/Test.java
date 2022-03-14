package com.etoak.test;

import com.etoak.dao.DaoImpl;
import com.etoak.dao.IDao;
import com.etoak.po.Course;
import com.etoak.po.Student;

public class Test {
	public static void main(String[] args) {
		Student stu = new Student();
		stu.setName("etoak");
		
		Course c1 = new Course();
		c1.setName("oracle");
		
		Course c2 = new Course();
		c2.setName("jsp");
		stu.getCs().add(c1);
		stu.getCs().add(c2);
		c1.getStus().add(stu);
		c2.getStus().add(stu);
		IDao<Student> dao = new DaoImpl<Student>();
		dao.add(stu);

	}
}
