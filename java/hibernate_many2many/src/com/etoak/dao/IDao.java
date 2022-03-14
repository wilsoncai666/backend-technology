package com.etoak.dao;

import java.util.List;



public interface IDao<T> {
	public void add(T t);
	public T queryById(Class<T> cls,int id);
	public List<T> queryAll(Class<T> class1);
	public void update(T t);
	public List<T> queryByHQL( String string,
			Object...params);
}
 