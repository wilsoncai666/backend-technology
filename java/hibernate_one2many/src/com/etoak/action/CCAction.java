package com.etoak.action;

import java.util.List;

import com.etoak.dao.DaoImpl;
import com.etoak.dao.IDao;
import com.etoak.po.Customer;
import com.etoak.po.Orders;
import com.opensymphony.xwork2.ActionSupport;

public class CCAction extends ActionSupport{
	private List<Customer> cs;
	public List<Customer> getCs(){return cs;}
	public String queryAllCus(){
		IDao<Customer> dao = new DaoImpl<Customer>();
		cs = dao.queryAll(Customer.class);
		return "queryAllCus_success";
	}
	private int cusid;
	public void setCusid(int id){cusid = id;}
	private List<Orders> os;
	public List<Orders> getOs(){return os;}
	public String queryOrdersByCusId(){
				
		IDao<Orders> dao = new DaoImpl<Orders>();
		 os = dao.queryByHQL(
				 "from Orders o where o.cus.id=?",cusid);
		 return "queryOrdersByCusId_success";
	}
	private int ordid;
	private int money;
	public void setOrdid(int id){ordid = id;}
	public void setMoney(int m){money = m;}
	public String updateorder(){
		IDao<Orders> dao = new DaoImpl<Orders>();
		Orders order = dao.queryById(Orders.class,ordid);
		order.setMoney(money);
		dao.update(order);
		return "updateorder_success";
	}
	
	public String addorder(){
		IDao<Customer> dao = new DaoImpl<Customer>();
		Customer cus = dao.queryById(Customer.class, cusid);
		Orders o = new Orders();
		o.setMoney(money);
		cus.getOrders().add(o);
		o.setCus(cus);
		dao.update(cus);
		///IDao<Orders> dao1 = new DaoImpl<Orders>();
		
		//dao1.add(o);
		return "addorder_success";
	}
}
