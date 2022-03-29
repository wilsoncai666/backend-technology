package com.etoak.test;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

import com.etoak.po.Student;

public class EtoakTestMethod {
	public static void main(String[] args)throws Exception{
		Class cls = Student.class;
		Student stu = new Student();
		//在Student类中寻找名字为setUsername(String)
		Method m = cls.
		getDeclaredMethod("setUsername",String.class);
		//执行 执行m代表的方法参数是 "etoak"
		//stu.setUsername("etoak");
		m.invoke(stu,"etoak");
		Method m1 = cls.getDeclaredMethod("getUsername");
		//Object value = stu.getUsername();
		Object value = m1.invoke(stu);
		System.out.println(value);
		/*Method[] ms = cls.getDeclaredMethods();
		for(Method m:ms){
			//方法名字
			String mName = m.getName();
			//修饰符
			String mMod = Modifier.toString(m.getModifiers());
			//方法返回
			String mReturn = m.getReturnType().getName();
			System.out.print(mMod+"\t"+mReturn+"\t"+mName+"(");
			//参数
			Class[] ps = m.getParameterTypes();
			for(Class p:ps){
				System.out.print(p);
			}
			System.out.println(")");
			
		}*/
	}
}
