package com.etoak.book.books.bean;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class Book {
	private String id;
	private String name;
	private Double price;
	private Date publishdate;
	private int booknum;
	private String status;
	private String author;
	private String categoryid;
	
	private List<Bookpic> pics;//一本书所有的图片
	
	public List<Bookpic> getPics() {
		return pics;
	}
	public void setPics(List<Bookpic> pics) {
		this.pics = pics;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	private String pdate;
	public String getPdate(){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		return sdf.format(publishdate);
	}
	public Date getPublishdate() {
		return publishdate;
	}
	public void setPublishdate(Date publishdate) {
		this.publishdate = publishdate;
	}
	public int getBooknum() {
		return booknum;
	}
	public void setBooknum(int booknum) {
		this.booknum = booknum;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getCategoryid() {
		return categoryid;
	}
	public void setCategoryid(String categoryid) {
		this.categoryid = categoryid;
	}
	
}
