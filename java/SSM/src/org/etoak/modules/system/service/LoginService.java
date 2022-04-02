package org.etoak.modules.system.service;

import java.util.List;
import java.util.Map;

import org.etoak.modules.role.bean.Role;
import org.etoak.modules.user.bean.User;

public interface LoginService {
	
	/**
	 * ͨ���û��������û���Ϣ
	 * @param username
	 * @return
	 */
	public User findUserInfoByUsername(
			String username); 
	
	/**
	 * ͨ���û�ID��������Щ��ɫ
	 * @param userId
	 * @return
	 */
	public List<Role> findRolesByUserId(String userId);
	
	/**
	 * ��ȡ����Ա
	 * @param map
	 * @return
	 */
	public List<Role> getAdmin(Map<String,Object> map);

}
