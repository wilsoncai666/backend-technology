package com.wawi.commons.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.security.Key;
import java.util.Date;
import java.util.Properties;

import javax.crypto.Cipher;

import sun.misc.BASE64Decoder;

@SuppressWarnings("restriction")
public class Decrypt {

	private static String decrypt(String cryptograph) throws Exception {  
		Properties props=System.getProperties(); //系统属性
		String path=props.getProperty("java.home");
		String privateKeyPath = path+"/Key";
        Key privateKey = getKey(privateKeyPath);  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.DECRYPT_MODE, privateKey);  
        BASE64Decoder decoder = new BASE64Decoder();  
        byte[] b1 = decoder.decodeBuffer(cryptograph);  
        byte[] b = cipher.doFinal(b1);  
        return new String(b);  
    }  

	private static Key getKey(String fileName) throws Exception, IOException {  
        Key key;  
        ObjectInputStream ois = null;  
        try {  
            ois = new ObjectInputStream(new FileInputStream(fileName));  
            key = (Key) ois.readObject();  
        } catch (Exception e) {  
            throw e;  
        } finally {  
            ois.close();  
        }  
        return key;  
    }  
	
	public static String getSecret(String fileName) throws IOException {
		FileInputStream in = null;
		File file = new File(fileName);  
        Long fileLength = file.length();
        byte[] fileContent = new byte[fileLength.intValue()];  
		try {
			in = new FileInputStream(file);
			in.read(fileContent);  
			return new String(fileContent,"UTF-8");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}finally {
			in.close();  
		}
		return null;
	}

	public static boolean verify(String secret) {
		try {
			String s = decrypt(secret);
			String s1 = s.substring(9, 17);
			String s2 = DateUtils.formatDate(new Date(), DateUtils.DATE_FORMAT).replace("-", "");
			Long l1 = Long.valueOf(s1);
			Long l2 = Long.valueOf(s2);
			if(l1>=l2) {
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
}
