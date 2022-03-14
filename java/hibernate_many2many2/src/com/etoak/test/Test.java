package com.etoak.test;

import com.etoak.dao.DaoImpl;
import com.etoak.dao.IDao;
import com.etoak.po.Course;
import com.etoak.po.Sc;
import com.etoak.po.Student;
import com.etoak.po.Student;

public class Test {

	public static void main(String[] args) {
		Student stu = new Student();
		stu.setName("张三");
		
		Course c1 = new Course();c1.setName("oracle");
		Course c2 = new Course();c2.setName("jsp");
		
		Sc sc1 = new Sc(c1,stu,100);
		Sc sc2 = new Sc(c2,stu,200);
		
		stu.getScs().add(sc1);
		stu.getScs().add(sc2);
		IDao<Student> dao = new DaoImpl<Student>();
		dao.add(stu);
	}

}
