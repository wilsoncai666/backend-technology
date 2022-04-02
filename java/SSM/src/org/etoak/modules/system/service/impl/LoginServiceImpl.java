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
 *	��¼  ʵ����
 */
@Service
public class LoginServiceImpl implements LoginService {
	
	/**
	 * ע��U
	 * serMapper
	 * RoleMapper 
	 * ��ȡsql���
	 */
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private RoleMapper roleMapper;

	/**
	 * ͨ���û��������û���Ϣ
	 * @param username
	 * @return
	 */
	@Override
	public User findUserInfoByUsername(String username) {
		User user = userMapper.findUserInfoByUsername(username);
		return user;
	}

	/**
	 * ͨ���û�ID��������Щ��ɫ
	 * @param userId
	 * @return
	 */
	@Override
	public List<Role> findRolesByUserId(String userId) {
		List<Role> list = roleMapper.findRolesByUserId(userId);
		return list;
	}

	/**
	 * ��ȡ����Ա
	 * @param map
	 * @return
	 */
	@Override
	public List<Role> getAdmin(Map<String, Object> map) {
		List<Role> list = roleMapper.getAdmin(map);
		return list;
	}
	
	
	
	
	
	
	
	

}
