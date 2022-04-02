package org.etoak.modules.ws.service;

import javax.jws.WebParam;
import javax.jws.WebService;

@WebService
public interface UserServiceWS {
	
	public String login(
				@WebParam(name="username") String username,
				@WebParam(name="password")String password);

}
