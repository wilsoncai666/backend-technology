package org.etoak.modules.role.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.etoak.modules.role.bean.Role;

public interface RoleMapper {
	
	/**
	 * ͨ���û�ID��������Щ��ɫ
	 * @param userId
	 * @return
	 */
	public List<Role> findRolesByUserId(
			@Param("userId") String userId);
	
	/**
	 * ��ȡ����Ա
	 * @param map
	 * @return
	 */
	public List<Role> getAdmin(Map<String,Object> map);

}
