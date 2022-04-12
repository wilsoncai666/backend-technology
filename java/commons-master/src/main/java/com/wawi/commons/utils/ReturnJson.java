package com.wawi.commons.utils;

import java.lang.reflect.Field;
import java.util.List;


//import com.guo.common.PageList;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class ReturnJson {

	/**
	 * 将pageList封装成符合jquery datagrid格式的json
	 * @param list
	 * @return
	 */
	/*public static JSONArray getJsonArray(PageList list){
		 JSONArray jsonArray = new JSONArray();  
		 JSONObject jsonobj = new JSONObject();  
		for (Object obj : list.getPage()) {  //循环结果集，进行json封装
			Field[] fields = obj.getClass().getDeclaredFields();//利用JAVA的反转机制获取该对象的所有属性
			for(int i = 0 , len = fields.length; i < len; i++) {//遍历属性
				String name = fields[i].getName();//获取属性的名称
				fields[i].isAccessible();//获取原本的访谒节制权限
				fields[i].setAccessible(true);// 改削访谒节制权限
				Object value=null;//获取该属性所对应的值
				try {
					value = fields[i].get(obj);
				} catch (IllegalArgumentException e) {
					e.printStackTrace();
				} catch (IllegalAccessException e) {
					e.printStackTrace();
				}
				jsonobj.put(name,value);//封装
			}
			jsonArray.add(jsonobj);  
		}  
		return jsonArray;
		
	}*/
	/**
	 * 将pageList封装成符合jquery datagrid格式的json
	 * @param list
	 * @return
	 */
	public static JSONArray listonvertJson(List list){
		JSONArray jsonArray = new JSONArray();  
		JSONObject jsonobj = new JSONObject();  
		for (Object obj : list) {  //循环结果集，进行json封装
			Field[] fields = obj.getClass().getDeclaredFields();//利用JAVA的反转机制获取该对象的所有属性
			for(int i = 0 , len = fields.length; i < len; i++) {//遍历属性
				String name = fields[i].getName();//获取属性的名称
				fields[i].isAccessible();//获取原本的访谒节制权限
				fields[i].setAccessible(true);// 改削访谒节制权限
				Object value=null;//获取该属性所对应的值
				try {
					value = fields[i].get(obj);
				} catch (IllegalArgumentException e) {
					e.printStackTrace();
				} catch (IllegalAccessException e) {
					e.printStackTrace();
				}
				jsonobj.put(name,value);//封装
			}
			jsonArray.add(jsonobj);  
		}  
		return jsonArray;
		
	}
	
	/*jsonobj.put("app_Id", app.getAppId());  
	jsonobj.put("app_Name", app.getAppName());  
	jsonobj.put("app_Code", app.getAppCode());  
	jsonobj.put("developer", app.getDeveloper());  
	jsonobj.put("bs", app.getBs());  
	jsonobj.put("server", app.getServer());  
	jsonobj.put("port", app.getPort());  
	jsonobj.put("appId1", app.getAppId());  
	jsonobj.put("appId2", app.getAppId());  
	jsonobj.put("appId3", app.getAppId());  
	jsonobj.put("appId4", app.getAppId());*/
}
