package org.etoak.modules.jedis;

public interface JedisService {
	
	public String set(String key,String value);
	public String get(String key);
	
}
