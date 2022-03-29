package com.etoak.test;

public class Test {

	public static void main(String[] args) throws Exception{
		String str=new String("etoak");
		//
		Class cls1 = str.getClass();
		
		String str2 = new String("abcetoakabcetoak");
		//获得内存中对应 String 的Class对象
		Class cls2 = str2.getClass();
		
		Class cls3 = Class.forName("java.lang.String");
		//
		Class cls4 = String.class;
		
		Class cls5 = Integer.class;
		Class cls6 = int.class;
		
		Class cls7 = double.class;
		Class cls8 = boolean.class;
		Class cls9 = void.class;
		
		int[][][][] iset = {{{{1,3}}}};
		int[] iset1  = {1,2,3,4,45,5,56,6,67,7};
								//cls
		//
		// [Ljava.lang.Object cano not cast to com.etoak.po.Emp
		//System.out.println(iset.getClass().getName());
		//创建该class对象代表类的一个新的对象
		//相当于  new String()
		//private   getter setter  public Student()
		String str111 = (String)cls5.newInstance();
		System.out.println(str111);
		/*System.out.println(iset.getClass().getClass()
				== iset1.getClass().getClass());*///false
/*		System.out.println(cls2 == cls3);//true
		System.out.println(cls3 == cls4);//true
*/		
		
	}
	
}








