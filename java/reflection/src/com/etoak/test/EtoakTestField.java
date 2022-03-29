package com.etoak.test;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;

import com.etoak.po.Student;

public class EtoakTestField {
	/*
	 * Class:表示类 一个Class对象代表一个具体类
	 * Field:表示属性 一个Field对象代表一个具体的属性
	 * Method:表示方法  一个Method对象代表一个具体的方法
	 * 
	 * 与属性有关的方法:
	 * 	getField(String)
	 *  getFields():获得本类和直接父类中的所有的公共的属性
	 *  getDeclaredField(String)
	 *  getDeclaredFeilds():获得本类中的属性包括私有的
	 * */
	public static void main(String[] args)throws Exception {
		Class cls = Class.forName("com.etoak.po.Student");
		Field[] fs = cls.getDeclaredFields();
		for(Field f:fs){
			//属性名字 
			String fName = f.getName();
			//类型
			String fType = f.getType().getName();
			//修饰符
			String fMod = Modifier.toString(f.getModifiers());
			System.out.println(fMod+"\t"+fType+"\t"+fName);
		}
	}
}
