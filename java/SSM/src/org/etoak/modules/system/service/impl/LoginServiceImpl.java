package org.etoak.modules.system.service.impl;

import java.util.List;
import java.util.Map;

import org.etoak.modules.role.bean.Role;
import org.etoak.modules.role.mapper.RoleMapper;
import org.etoak.modules.system.service.LoginService;
import org.etoak.modules.user.bean.User;
import org.etoak.modules.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *	登录  实现类
 */
@Service
public class LoginServiceImpl implements LoginService {
	
	/**
	 * 注入U
	 * serMapper
	 * RoleMapper 
	 * 获取sql语句
	 */
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private RoleMapper roleMapper;

	/**
	 * 通过用户名查找用户信息
	 * @param username
	 * @return
	 */
	@Override
	public User findUserInfoByUsername(String username) {
		User user = userMapper.findUserInfoByUsername(username);
		return user;
	}

	/**
	 * 通过用户ID查找有哪些角色
	 * @param userId
	 * @return
	 */
	@Override
	public List<Role> findRolesByUserId(String userId) {
		List<Role> list = roleMapper.findRolesByUserId(userId);
		return list;
	}

	/**
	 * 获取管理员
	 * @param map
	 * @return
	 */
	@Override
	public List<Role> getAdmin(Map<String, Object> map) {
		List<Role> list = roleMapper.getAdmin(map);
		return list;
	}
	
	
	
	
	
	
	
	

}
