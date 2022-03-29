package com.etoak.factory;

import java.io.InputStream;
import java.lang.reflect.Method;
import java.util.List;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.etoak.po.Person;
import com.etoak.po.Student;
//User.java username password  user(张三,"admin") 
public class BeanFactory {
	public static void main(String[] args)throws Exception {
		Student stu = (Student)BeanFactory.getBean("stu");
		System.out.println(stu.getUsername());
		Person p = (Person) BeanFactory.getBean("per");
		System.out.println(p);
	}
	
	//Object   session.get(Class ,id) select * from xxx whre id=?
	public static Object getBean(String id)throws
	Exception{
		Object target = null;
		//获得根元素
		Element root = getRootElement();
		System.out.println(root.getName());
		//获得一级子元素
		List<Element> firsts = root.elements("bean");
		for(Element first:firsts){
			//获得id属性值
			String vid = first.attributeValue("id");
			//如果当前读取到的id的属性值与传入的id的值一致，则找到对应的类
			if(id.equals(vid)){
				String className = first.attributeValue("class");
				Class cls  = Class.forName(className);
				//通过反射构造对象
				 target = cls.newInstance();
				 List<Element> secs = first.elements("property");
				 for(Element sec:secs){
					 //属性名字
					String property = sec.attributeValue("name");
					//属性值
					String value = sec.attributeValue("value");
				 //username  set+U+sername
				 String setter0 = "set"+property.substring(0,1)
						 .toUpperCase()+property.substring(1);
				 Method setter = cls.	//setUsername setPassword
						 getDeclaredMethod(setter0,
						 String.class);
				 //赋值target.setUsername(value)
				 setter.invoke(target,value);
				 }
				 
			}
		}
		return target;
	}
	//获得根元素
	private static Element getRootElement()throws Exception{
		SAXReader reader = new SAXReader();
		InputStream is = BeanFactory.class.
		  getResourceAsStream("../../../beans.xml");
		Document doc = reader.read(is);
		return doc.getRootElement();
	}
}
