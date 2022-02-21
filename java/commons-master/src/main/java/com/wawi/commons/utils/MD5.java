package com.wawi.commons.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * MD5加密
 * @author goujieyong
 *2018年9月17日
 * version 1.0
 */
public class MD5 {
		 public static String md5s(String plainText) {
			 String str="";
			  try {
				  MessageDigest md = MessageDigest.getInstance("MD5");
				  md.update(plainText.getBytes());
				  byte b[] = md.digest();
				  int i;
	
				  StringBuffer buf = new StringBuffer("");
				  for (int offset = 0; offset < b.length; offset++) {
					  	i = b[offset];
					  	if (i < 0)
					  		i += 256;
					  	if (i < 16)
					  		buf.append("0");
					  	buf.append(Integer.toHexString(i));
				  }
			   str = buf.toString();
			  // System.out.println("result: " + buf.toString());// 32位的加密
			   //System.out.println("result: " + buf.toString().substring(8, 24));// 16位的加密
			  } catch (NoSuchAlgorithmException e) {
			   e.printStackTrace();
			  }
			  return str;
		 }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MD5 md51 = new MD5();
		md51.md5s("4");//加密4
	}

}
