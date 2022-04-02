package org.etoak.modules.system.service;

import java.util.List;
import java.util.Map;

import org.etoak.modules.role.bean.Role;
import org.etoak.modules.user.bean.User;

public interface LoginService {
	
	/**
	 * 通过用户名查找用户信息
	 * @param username
	 * @return
	 */
	public User findUserInfoByUsername(
			String username); 
	
	/**
	 * 通过用户ID查找有哪些角色
	 * @param userId
	 * @return
	 */
	public List<Role> findRolesByUserId(String userId);
	
	/**
	 * 获取管理员
	 * @param map
	 * @return
	 */
	public List<Role> getAdmin(Map<String,Object> map);

}
