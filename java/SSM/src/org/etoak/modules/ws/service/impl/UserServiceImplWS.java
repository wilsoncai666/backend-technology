package org.etoak.modules.ws.service.impl;

import javax.jws.WebService;

import org.etoak.modules.user.mapper.UserMapper;
import org.etoak.modules.ws.service.UserServiceWS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@WebService
public class UserServiceImplWS implements UserServiceWS {
	
	@Autowired
	private UserMapper userMapper;

	@Override
	public String login(String username, String password) {
		
		//userMapper.login();
		
		return null;
	}

}
