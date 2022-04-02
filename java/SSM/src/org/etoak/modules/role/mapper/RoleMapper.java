package org.etoak.modules.role.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.etoak.modules.role.bean.Role;

public interface RoleMapper {
	
	/**
	 * 通过用户ID查找有哪些角色
	 * @param userId
	 * @return
	 */
	public List<Role> findRolesByUserId(
			@Param("userId") String userId);
	
	/**
	 * 获取管理员
	 * @param map
	 * @return
	 */
	public List<Role> getAdmin(Map<String,Object> map);

}
