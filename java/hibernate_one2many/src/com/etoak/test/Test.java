package com.etoak.test;

import com.etoak.dao.DaoImpl;
import com.etoak.dao.IDao;
import com.etoak.po.Customer;
import com.etoak.po.Orders;

public class Test {
	public static void main(String[] args) {
		Customer cus  = new Customer();
		cus.setName("etoak");
		
		Orders o1 = new Orders();
		o1.setMoney(100);
		
		Orders o2 = new Orders();
		o2.setMoney(200);
		//操作一方 主方
		IDao<Customer> dao = new DaoImpl<Customer>();
		//查询一方 主方
		Customer cus1 = dao.queryById(Customer.class,3);
		//cus1
		System.out.println(cus1.getOrders().size());
		/*//一方添加多方
		cus.getOrders().add(o1);
		cus.getOrders().add(o2);
		//多方添加一方
		o1.setCus(cus);
		o2.setCus(cus);
		dao.add(cus);*/
		 

	}
}
