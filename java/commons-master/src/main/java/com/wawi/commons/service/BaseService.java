package com.wawi.commons.service;

import java.util.List;

import com.wawi.commons.paging.PageList;

public interface BaseService<T,ID> {

	/**
	 * 新增对象
	 * @param entity
	 */
	public Integer save(T entity);
	/**
	 * 修改对象
	 * @param entity
	 */
	public void update(T entity);
	/**
	 * 根据主键ID查询
	 * @param id
	 * @return
	 */
	public T view(ID id);
	/**
	 * 根据主键ID删除
	 * @param id
	 */
	public void delete(ID id);
	/**
	 * 分页查询列表
	 * @param pageIndex 当前页
	 * @param pageSize  每页大小
	 * @param entity    实体对象（查询参数)
	 * @return
	 */
	public PageList<T> queryForPageList(Integer pageIndex,Integer pageSize,T entity);
	/**
	 * 分页排序列表
	 * @param pageIndex 当前页
	 * @param pageSize  每页大小
	 * @param entity    实例对象(查询条件)
	 * @param entityClass  实例对象静态Class
	 * @param sort  排序参数
	 * @return
	 */
	public PageList<T> queryForPageList(Integer pageIndex,Integer pageSize,T entity,Class<?> entityClass,String sort);
	/**
	 * 查询所有记录
	 * @param entity 实体对象（查询参数)
	 * @return
	 */
	public List<T> queryForList(T entity);
	/**
	 * 排序所有记录查询
	 * @param entity  实例对象（查询条件）
	 * @param entityClass  实例对象静态Class
	 * @param sort 排序参数
	 * @return
	 */
	public List<T> queryForList(T entity,Class<?> entityClass,String sort);
}
