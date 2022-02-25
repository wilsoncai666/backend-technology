package com.wawi.commons.utils;

import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Random;

import javax.sql.DataSource;

public class IDbuilder {

	/**
	 * 提供ID前缀和ID长度，自动生成ID
	 * @param idPerfix
	 * @param idIenth
	 * @return
	 */
	public static String nullId(String idPerfix, int idIenth) {
		String argChar = idPerfix.toUpperCase();
		String idSuffix = "";
		for (int i = 0; i < idIenth - idPerfix.length() - 1; i++) {
			idSuffix += "0";
		}
		String id = argChar + idSuffix + "1";
		return id;
	}
	/**
	 * 根据最大ID自动生成ID
	 * @param maxID
	 * @return
	 */
	public static String noNullId(String maxID) {
		String value = "";
		String idValue = "";
		String idPerfix = "";

		for (int i = 0; i < maxID.length(); i++) {
			char ch = maxID.charAt(i);
			if (ch >= '0' && ch <= '9') {
				if (ch != '0' || !idValue.equals("")) {
					idValue += ch;//获取编号中的非0数字
				} else {
					value += ch;//获取编号中的0
				}
			} else {
				idPerfix += ch;//编号前缀
			}
		}
		int startLenth = idValue.length();//获取后缀值的长度
		int idSuffix = Integer.parseInt(idValue);//转换后缀为整型
		idSuffix += 1;//后缀加1
		String idSuffixs = "";
		idSuffixs = String.valueOf(idSuffix);//将增加后的后缀转换为字符串
		int endLenth = idSuffixs.length();//获取增加后的后缀长度
		if (startLenth < endLenth && !value.equals("")) {//证明后缀增加了一位长度
			value = value.substring(0, value.length() - 1);//相应的中间0减少一位
		}
		String IDvalue = idPerfix + value + idSuffixs;

		return IDvalue;
	}

	/**
	 * 
	 * @param idName
	 * @param tableName
	 * @param dataSource
	 * @return
	 */
	public static String getMaxId(String idName, String tableName,
			DataSource dataSource) {
		String sql = "select max(idName) from tableName";
		String maxID = null;
		try {
			maxID = String.valueOf(dataSource.getConnection().createStatement()
					.equals(sql));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return maxID;
	}
	/**
	 * 根据时间组成ID
	 * @param str
	 * @return
	 */
	public static String getDateID(String str){
		String Id="";
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.CHINA);
		String result = df.format(new Date());
		Id = str+result;
		String Ids = "";
		for(int i = 0;i < Id.length();i++){
			if(Id.charAt(i)=='-' || Id.charAt(i)==' '||Id.charAt(i)==':'|| Id.charAt(i)=='.'){
				Ids += "";
			}else{
				Ids += Id.charAt(i);
			}
		}
		StringBuffer sb = new StringBuffer();
		 Random ra=new Random();
		 for(int j=0;j<3;j++){
		    sb.append(ra.nextInt(10));
		 }
		 Ids = Ids+sb;
		return Ids;
	}
	/**
	 * 数字自动增长
	 * @param i
	 * @return
	 */
	public static String getNumberId(Long i){
		String Id="";
		if(i == 0L){
			Id = String.valueOf(1L);
		}else{
			Id = String.valueOf(i+1L);
		}
		return Id;
	}
	public static void main(String[] args){
		//System.out.println(getID(""));
		System.out.println(getNumberId(1000L));
	}
}
