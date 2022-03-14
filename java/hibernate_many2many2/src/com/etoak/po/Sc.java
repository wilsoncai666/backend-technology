package com.etoak.po;

/**
 * Sc entity. @author MyEclipse Persistence Tools
 */

public class Sc implements java.io.Serializable {

	// Fields

	private Integer id;
	private Course course;
	private Student student;
	private Integer score;

	// Constructors

	/** default constructor */
	public Sc() {
	}

	/** full constructor */
	public Sc(Course course, Student student, Integer score) {
		this.course = course;
		this.student = student;
		this.score = score;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Course getCourse() {
		return this.course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public Student getStudent() {
		return this.student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Integer getScore() {
		return this.score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

}