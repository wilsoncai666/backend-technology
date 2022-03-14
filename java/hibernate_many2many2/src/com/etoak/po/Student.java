package com.etoak.po;

import java.util.HashSet;
import java.util.Set;

/**
 * Student entity. @author MyEclipse Persistence Tools
 */

public class Student implements java.io.Serializable {

	// Fields

	private Integer id;
	private String name;
	private Set scs = new HashSet(0);

	// Constructors

	/** default constructor */
	public Student() {
	}

	/** full constructor */
	public Student(String name, Set scs) {
		this.name = name;
		this.scs = scs;
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

	public Set getScs() {
		return this.scs;
	}

	public void setScs(Set scs) {
		this.scs = scs;
	}

}