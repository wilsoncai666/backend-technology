package com.etoak.dao;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.etoak.factory.SF;
import com.etoak.po.Student;

public class StudentDaoImpl  implements IStudentDao{
	Session session = null;
	Transaction tx = null;
	@Override
	public void addStudent(Student stu) {
		try {
			session = SF.getSession();
			tx = session.beginTransaction();
			session.save(stu);
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if(tx!=null)tx.rollback();
		}finally{
			if(session!=null)session.close();
		}
	}

	@Override
	public Student queryStuById(int id) {
		try {
			session = SF.getSession();
			tx = session.beginTransaction();
			//param1：表示返回对象的类型 param2:主键值
			Student stu = (Student)session.
					get(Student.class,id);
			tx.commit();
			return stu;
		} catch (Exception e) {
			e.printStackTrace();
			if(tx!=null)tx.rollback();
			return null;
		}finally{
			if(session!=null)session.close();
		}
	}

	@Override
	public void updateStudent(Student stu) {
		try {
			session = SF.getSession();
			tx = session.beginTransaction();
			session.update(stu);
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if(tx!=null)tx.rollback();
		}finally{
			if(session!=null)session.close();
		}
	}

	@Override
	public void deleteStudent(Student stu) {
		try {
			session = SF.getSession();
			tx = session.beginTransaction();
			session.delete(stu);
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if(tx!=null)tx.rollback();
		}finally{
			if(session!=null)session.close();
		}
	}

}
