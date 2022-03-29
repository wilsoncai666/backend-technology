package com.etoak.test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import com.etoak.enums.Color;
import com.etoak.enums.ETColor;

public class TestEnum {

	public static void main(String[] args)throws Exception {
		//valueOf:将指定的字符串转换成对应的枚举类型
	/*	System.out.println(Color.
				valueOf("RED")==Color.RED);
		Color[] cs = Color.values();
		for(Color c:cs){
			System.out.println(c);
		}*/
	Class cls = Color.class;
		System.out.println("属性");
		Field[] fs = cls.getDeclaredFields();
		for(Field f:fs){
			System.out.println(f);
		}
		System.out.println("构造方法");
		Constructor[] cs = cls.getDeclaredConstructors();
		for(Constructor c:cs){
			System.out.println(c);
		}
		System.out.println("方法");
		Method[] ms = cls.getDeclaredMethods();
		for(Method m:ms){
			System.out.println(m);
		}
		Color.RED.show();
		
	}

}
