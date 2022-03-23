package com.etoak.book.admin.dao.impl;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;

import com.etoak.book.admin.bean.Admin;
import com.etoak.book.admin.dao.IAdminDao;
import com.etoak.book.common.factory.CF;

public class AdminDaoImpl implements IAdminDao {
	QueryRunner qr = new QueryRunner(CF.getDataSource());
	@Override
	public Admin queryAdminByNameAndPwd(String name, String pwd) {
		try{
		String sql="select * from admin where name=? and pwd=?";
		Admin admin = qr.
				query(sql,new BeanHandler<Admin>(Admin.class),name,pwd);
		return admin;
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

}
