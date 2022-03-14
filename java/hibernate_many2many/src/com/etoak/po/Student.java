package com.etoak.po;

import java.util.HashSet;
import java.util.Set;



public class Student implements java.io.Serializable {

	

	private Integer id;
	private String name;
	private Set<Course> cs = new HashSet<Course>();
	
	public Set<Course> getCs() {
		return cs;
	}
	public void setCs(Set<Course> cs) {
		this.cs = cs;
	}

	public Student() {
	}

	public Student(String name) {
		this.name = name;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}