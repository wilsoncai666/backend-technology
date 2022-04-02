package org.etoak.modules.permission.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.etoak.modules.permission.bean.Permission;

public interface PermissionMapper {
	
	/**
	 * 通过pid查询权限信息
	 * @param pid
	 * @return
	 */
	public List<Permission> findPerInfoByPid(
			@Param("pid") String pid);	

	
	
	public List<Permission> getAll();
	
	/**
	 * 通过角色查询权限
	 * @param map
	 * @return
	 */
	public List<Permission> 
		findPerInfoByRolesId(Map<String,Object> map);
	
}
