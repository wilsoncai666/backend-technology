package com.etoak.factory;

import java.io.InputStream;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.etoak.po.Student;

public class ETSession {
	public static void main(String[] args)throws Exception{
		Student stu  = (Student)
			ETSession.get(Student.class,1);
		System.out.println(stu.getUsername()+"\t"+stu.getPassword());
	}
	//insert into stu1(f1,f2...)values(????)
	public static  void save(Object obj)throws Exception{
		
	}
	//Select * from XX where xx=?
	public static Object get(Class cls,int id)throws Exception{
		Object obj = cls.newInstance();
		StringBuffer select = new StringBuffer("select * from ");
		Element root = getRootElement();
		List<Element> firsts = root.elements("class");
		for(Element first:firsts){
			//com.etoak.po.Student
			String name = first.attributeValue("name");
			if(cls.getName().equals(name)){
				String table = first.attributeValue("table");
				select.append(table).append(" where ");
				//获得主键
				String key = first.element("id").
						element("column")
						.attributeValue("name");
				//拼装主键
				select.append(key).append("=?");
						
				//~~~~~~~~~~~~~~~~~~~~~sql拼拼装
				//~~~~~~~jdbc执行
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql:///etoak","root","etoak");
				PreparedStatement pst = con.prepareStatement(select.toString());
				pst.setInt(1,id);
				ResultSet rs = pst.executeQuery();
				rs.next();
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				List<Element> secs = first.elements();
				for(Element sec:secs){
					//property表示属性名字
				String property = sec.attributeValue("name");
									//获得属性 类型
				Class fieldType = cls.getDeclaredField(property)
						.getType();
						
					//字段名字
				String columnName = sec.element("column").attributeValue("name");
				
				
				String setter0 = "set"+property.substring(0,1)
					.toUpperCase()+property.substring(1);
				Method setter = cls.getDeclaredMethod(setter0,
						fieldType);
				setter.invoke(obj,rs.getObject(columnName));
				
				}
			}
		}
		return obj;
	}
	//获得根元素
	private static Element getRootElement()throws Exception{
		SAXReader reader = new SAXReader();
		InputStream is = BeanFactory.class.
		  getResourceAsStream("../../../mapping.xml");
		Document doc = reader.read(is);
		return doc.getRootElement();
	}
}
