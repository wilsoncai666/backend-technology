package org.etoak.modules.jedis.impl;

import org.etoak.modules.jedis.JedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

@Service
public class JedisServiceImpl implements JedisService{
	
	@Autowired
	private JedisPool jedisPool;
	
	public Jedis getResource(){
		return jedisPool.getResource();
	}

	@Override
	public String set(String key, String value) {
		Jedis jedis = getResource();
		String result = jedis.set(key, value);
		jedis.close();
		return result;
	}

	@Override
	public String get(String key) {
		Jedis jedis = getResource();
		//ÇÐ»»Êý¾Ý¿â
		//jedis.select(1);
		String result = jedis.get(key);
		jedis.close();
		return result;
	}

}
