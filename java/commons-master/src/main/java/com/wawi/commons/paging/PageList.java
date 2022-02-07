package com.wawi.commons.paging;

import java.util.List;

public class PageList<T> {
	// 当前页
	private Integer pageIndex = 1;
	// 每页显示的总条数
	private Integer pageSize = 10;
	// 总条数
	private Integer count;
	// 是否有下一页
	private Integer isNextPage;
	// 总页数
	private Integer pageCount;
	// 开始索引
	private Integer startIndex;
	// 记录结果
	private List<T> page;

	public PageList() {
		super();
	}

	public PageList(Integer pageIndex, Integer pageSize, Integer count) {
		super();
		this.pageIndex = pageIndex;
		this.pageSize = pageSize;
		this.count = count;
		this.pageCount = (this.count + this.pageSize - 1) / this.pageSize;
		this.startIndex = (this.pageIndex - 1) * this.pageSize;
		this.isNextPage = this.pageIndex >= this.pageCount ? 0 : 1;
	}

	public Integer getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(Integer pageIndex) {
		this.pageIndex = pageIndex;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public Integer getIsNextPage() {
		return isNextPage;
	}

	public void setIsNextPage(Integer isNextPage) {
		this.isNextPage = isNextPage;
	}

	public Integer getPageCount() {
		return pageCount;
	}

	public void setPageCount(Integer pageCount) {
		this.pageCount = pageCount;
	}

	public Integer getStartIndex() {
		return startIndex;
	}

	public void setStartIndex(Integer startIndex) {
		this.startIndex = startIndex;
	}

	public List<T> getPage() {
		return page;
	}

	public void setPage(List<T> page) {
		this.page = page;
	}
}
