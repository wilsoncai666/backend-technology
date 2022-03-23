package com.etoak.book.common.factory;

import java.sql.Connection;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;

public class CF {
	private static final String DRIVER="com.mysql.jdbc.Driver";
	private static final String URL="jdbc:mysql:///book";
	private static final String USER="root";
	private static final String PWD="etoak";
	private static BasicDataSource ds = new BasicDataSource();
	private CF(){}
	static{
		ds.setDriverClassName(DRIVER);
		ds.setUrl(URL);
		ds.setUsername(USER);
		ds.setPassword(PWD);
		
		ds.setMaxActive(200);
		ds.setMaxWait(5000);
	}
	public static DataSource getDataSource(){
		return ds;
	}
	public static Connection getConnection(){
		try {
			return ds.getConnection();
		} catch (Exception e) {
			e.printStackTrace();return null;
		}
		
	}
	
			
}
