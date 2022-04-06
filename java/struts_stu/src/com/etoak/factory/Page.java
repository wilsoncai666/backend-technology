package com.etoak.factory;

import java.util.List;

//page对应前端 每一页的内容
public class Page<T> {
	private int currentPage;//当前页
	private int total;//总记录数
	private int pageSize=3;//每页记录数
	private int pageCount;//总页数
	
	private int pre; //上一页
	private int next;//下一页
	
	private List<T> rows;//本页的数据
	
	private int start;//每页的起始位置

	
	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageCount() {
				//10   3      12  / 3 = 4
		return (total+pageSize-1)/pageSize;
	}

	public int getPre() {
		if(currentPage>1)
		return currentPage-1;
		return 1;
	}
	public int getNext() {
		if(currentPage<getPageCount()){
			return currentPage+1;
		}
		return getPageCount();
	}

	public List<T> getRows() {
		return rows;
	}

	public void setRows(List<T> rows) {
		this.rows = rows;
	}

	public int getStart() {	 
			//
		return (currentPage-1)*pageSize;
	}

	
	
}
