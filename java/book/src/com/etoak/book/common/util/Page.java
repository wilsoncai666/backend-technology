package com.etoak.book.common.util;

import java.util.List;

//该类存放需要显示的一页中的内容
public class Page<T> {
	private int currentPage;//当前页
	
	private int pageSize=3;//每页显示多少条
	
	private int allRecords;//总记录数
	
	private int pageCount;//总页数
	
	private int next;//下一页
	private int pre;//上一页
	
	private List<T> data;//该页显示的数据

	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getAllRecords() {
		return allRecords;
	}

	public void setAllRecords(int allRecords) {
		this.allRecords = allRecords;
	}

	public int getPageCount() {
		return (allRecords+pageSize-1)/pageSize;
	}
	public int getNext() {
		//如果当前页小于总页数
		if(currentPage<getPageCount()){
			return currentPage+1;
		}
		return getPageCount();
	}
	public int getPre() {
		if(currentPage>1){
			return currentPage-1;
		}
		return 1;
	}
	public List<T> getData() {
		return data;
	}
	public void setData(List<T> data) {
		this.data = data;
	}
	private int start;
	public int getStart(){
		return (currentPage-1)*getPageSize();
	}
	
	
	
	
	
}
