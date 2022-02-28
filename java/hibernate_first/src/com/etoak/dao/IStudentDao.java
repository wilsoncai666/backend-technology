package com.etoak.dao;

import com.etoak.po.Student;

public interface IStudentDao {
	public void addStudent(Student stu);
	public Student queryStuById(int id);
	public void updateStudent(Student stu);
	public void deleteStudent(Student stu);
}
