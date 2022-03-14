package com.etoak.po;

import java.util.HashSet;
import java.util.Set;



public class Course implements java.io.Serializable {


	private Integer id;
	private String name;
	private Set<Student> stus = new HashSet<Student>();
	

	public Set<Student> getStus() {
		return stus;
	}


	public void setStus(Set<Student> stus) {
		this.stus = stus;
	}


	public Course() {
	}


	public Course(String name) {
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