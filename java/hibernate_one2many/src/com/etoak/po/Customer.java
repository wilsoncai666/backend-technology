package com.etoak.po;

import java.util.HashSet;
import java.util.Set;


public class Customer implements java.io.Serializable {



	private Integer id;
	private String name;
	private Set<Orders> orders = new HashSet<Orders>();

	public Set<Orders> getOrders() {
		return orders;
	}

	public void setOrders(Set<Orders> orders) {
		this.orders = orders;
	}

	public Customer() {
	}

	/** full constructor */
	public Customer(String name) {
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