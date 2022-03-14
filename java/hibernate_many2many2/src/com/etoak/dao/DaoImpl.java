package com.etoak.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.etoak.factory.SF;



public class DaoImpl<T> implements IDao<T>{

	@Override
	public void add(T t) {
		Session session = null;
		Transaction tx = null;
		try {
			session = SF.getSession();
			tx  = session.beginTransaction();
			session.save(t);
			//2.
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if(tx!=null)tx.rollback();
		}finally{
			if(session!=null)session.close();
		}
	}

	@Override
	public T queryById(Class cls, int id) {
		Session session = null;
		Transaction tx = null;
		try {
			session = SF.getSession();
			tx  = session.beginTransaction();
			T t = (T)session.get(cls,id);
			tx.commit();
			return t;
		} catch (Exception e) {
			e.printStackTrace();
			if(tx!=null)tx.rollback();
			return null;
		}finally{
			if(session!=null)session.close();
		}
	}

	@Override
	public List<T> queryAll(Class<T> class1) {
		Session session = null;
		Transaction tx = null;
		try {
			session = SF.getSession();
			tx  = session.beginTransaction();
								//com.etoak.po.Student
		/*	List<T> data = session.createQuery("from "+class1.getName())
			.list();*/			//Emp.class
			List<T> data =session.createCriteria(class1).list();
			tx.commit();
			return data;
		} catch (Exception e) {
			e.printStackTrace();
			if(tx!=null)tx.rollback();
			return null;
		}finally{
			if(session!=null)session.close();
		}
	}


	@Override
	public void update(T t) {
		Session session = null;
		Transaction tx = null;
		try {
			session = SF.getSession();
			tx  = session.beginTransaction();
			session.update(t);
			tx.commit();
			
		} catch (Exception e) {
			e.printStackTrace();
			if(tx!=null)tx.rollback();
		}finally{
			if(session!=null)session.close();
		}
	}


	@Override
	public List<T> queryByHQL(
			String hql, Object... params) {
		Session session = null;
		Transaction tx = null;
		try {
			session = SF.getSession();
			tx  = session.beginTransaction();
			Query query = session.createQuery(hql);
			for(int i=0;i<params.length;i++){
				query.setInteger(i,Integer.parseInt(params[i]+""));
			}
			List<T>data = query.list();
			tx.commit();
			return data;
		} catch (Exception e) {
			e.printStackTrace();
			if(tx!=null)tx.rollback();return null;
		}finally{
			if(session!=null)session.close();
		}
	}
	
}
