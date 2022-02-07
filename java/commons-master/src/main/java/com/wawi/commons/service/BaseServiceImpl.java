package com.wawi.commons.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.github.pagehelper.PageHelper;
import com.wawi.commons.mapper.BaseMapper;
import com.wawi.commons.paging.PageList;

import tk.mybatis.mapper.entity.Example;

public class BaseServiceImpl<T, ID> implements BaseService<T, ID> {

	@Autowired
	BaseMapper<T> baseMapper;

	@Override
	public Integer save(T entity) {
		return baseMapper.insertSelective(entity);
	}

	@Override
	public void update(T entity) {
		baseMapper.updateByPrimaryKeySelective(entity);
	}

	@Override
	public T view(ID id) {
		return baseMapper.selectByPrimaryKey(id);
	}

	@Override
	public void delete(ID id) {
		baseMapper.deleteByPrimaryKey(id);

	}

	@Override
	public PageList<T> queryForPageList(Integer pageIndex, Integer pageSize,T entity) {
		// 设置分页
		PageHelper.startPage(pageIndex, pageSize);
		// 记录分页查询
		List<T> userList =  baseMapper.select(entity);
		// 总记录数查询
		Integer count = baseMapper.selectCount(entity);
		// 将记录转换成分页对象
		PageList<T> list = new PageList<>(pageIndex, pageSize, count);
		list.setPage(userList);
		return list;
	}
	@Override
	public PageList<T> queryForPageList(Integer pageIndex, Integer pageSize,T entity,Class<?> entityClass,String sort) {
		// 设置分页
		PageHelper.startPage(pageIndex, pageSize);
		//排序
		Example example = new Example(entityClass);
		example.setOrderByClause(sort);
		// 记录分页查询
		//List<T> userList =  baseMapper.select(entity);
		List<T> userList =  baseMapper.selectByExample(example);
		// 总记录数查询
		Integer count = baseMapper.selectCount(entity);
		// 将记录转换成分页对象
		PageList<T> list = new PageList<>(pageIndex, pageSize, count);
		list.setPage(userList);
		return list;
	}

	@Override
	public List<T> queryForList(T entity) {
		return  baseMapper.select(entity);
	}
	@Override
	public List<T> queryForList(T entity,Class<?> entityClass,String sort) {
		//排序 
		Example example = new Example(entityClass);
		example.setOrderByClause(sort);
		return  baseMapper.selectByExample(example);
	}

}
