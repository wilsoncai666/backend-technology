package com.etoak.factory;

import java.sql.Connection;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;

public class CF {
	private static final String DRIVER="com.mysql.jdbc.Driver";
	private static final String URL="jdbc:mysql:///etoak";
	private static final String USER="root";
	private static final String PWD="etoak";
	private static BasicDataSource ds = new BasicDataSource();
	static{
		ds.setDriverClassName(DRIVER);
		ds.setUrl(URL);
		ds.setUsername(USER);
		ds.setPassword(PWD);
		//////可选项
		ds.setMaxActive(100);
		ds.setMaxWait(3000);
		ds.setMaxIdle(20);
	}
	public static Connection getConnection(){
		try{
		return ds.getConnection();
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	public static DataSource getDs(){return ds;}
}
