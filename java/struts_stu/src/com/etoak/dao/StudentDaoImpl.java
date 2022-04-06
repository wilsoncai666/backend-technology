package com.etoak.dao;

import java.util.List;
import java.util.Map;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import org.apache.commons.dbutils.handlers.MapHandler;

import com.etoak.factory.CF;
import com.etoak.po.Student;

public class StudentDaoImpl implements IStudentDao {
	QueryRunner qr = new QueryRunner(CF.getDs());
	@Override
	public Student queryByNameAndPwd(String name, String pwd) {
		try {
			String sql="select * from student where name=? and pwd=?";
			
			Student stu = qr.query(sql,new BeanHandler<Student>(Student.class),
					name,pwd);
			return stu;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public int countStudent(String name, String email) {
		try {
			String sql="select count(*) from student where 1=1 ";
			if(name!=null ){
				sql+=" and name like '%"+name+"%'";
			}
			if(email!=null){
				sql+=" and email like '%"+email+"%'";
			}
			
			Map data = qr.query(sql,new MapHandler());
			return Integer.parseInt(data.get("count(*)")+"");
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}

	@Override
	public List<Student> querySome(String name, String email, int start,
			int pageSize) {
		try {
			String sql="select * from student where 1=1 ";
			if(name!=null && !name.equals("")){
				sql+=" and name like '%"+name+"%'";
			}
			if(email!=null){
				sql+=" and email like '%"+email+"%'";
			}
			sql+=" limit ?,?";
			List<Student> stus = qr.query(sql,
			new BeanListHandler<Student>(Student.class),
					start,pageSize);
			return stus;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public void updateStudent(Student stu) {
		try {
			String sql="update student set name=?,pwd=?,email=?,age=?,gender=? where id=?";
			qr.update(sql,stu.getName(),stu.getPwd(),stu.getEmail(),
					stu.getAge(),stu.getGender(),stu.getId());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public Student queryById(int id) {
		try {
			String sql="select * from student where id=?";
			Student stus = qr.query(sql,
			new BeanHandler<Student>(Student.class),id);
			return stus;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
