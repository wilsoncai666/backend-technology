package com.etoak.book.admin.dao;

import com.etoak.book.admin.bean.Admin;

public interface IAdminDao {
	//根据用户名和密码查询管理员
	public Admin queryAdminByNameAndPwd(String name,String pwd);
}
