package org.etoak.modules.permission.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.etoak.modules.permission.bean.Permission;

public interface PermissionMapper {
	
	/**
	 * ͨ��pid��ѯȨ����Ϣ
	 * @param pid
	 * @return
	 */
	public List<Permission> findPerInfoByPid(
			@Param("pid") String pid);	

	
	
	public List<Permission> getAll();
	
	/**
	 * ͨ����ɫ��ѯȨ��
	 * @param map
	 * @return
	 */
	public List<Permission> 
		findPerInfoByRolesId(Map<String,Object> map);
	
}
