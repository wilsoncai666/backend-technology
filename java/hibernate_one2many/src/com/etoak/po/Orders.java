package com.etoak.po;


public class Orders implements java.io.Serializable {



	private Integer id;
	private Integer money;
	//private Integer cid;
	private Customer cus;
	

	public Customer getCus() {
		return cus;
	}



	public void setCus(Customer cus) {
		this.cus = cus;
	}



	public Orders() {
	}

	

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getMoney() {
		return this.money;
	}

	public void setMoney(Integer money) {
		this.money = money;
	}


}