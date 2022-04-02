package org.etoak.modules.user.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.etoak.modules.user.bean.Pic;
import org.etoak.modules.user.bean.User;

public interface UserMapper {
	
	/**
	 * �����û�
	 * @param user
	 * @return
	 */
	
	public int add(User user);
	
	/**
	 * �����û���Ƭ
	 * @param pic
	 * @return
	 */
	public int addPic(Pic pic);
	
	//@Select("select id,username from et_user")
	public List<Map<String,Object>> 
	        findLikeInfoByUsername(Map<String,Object> map);
	
	/**
	 * ͨ���û��������û���Ϣ
	 * @param username
	 * @return
	 */
	public User findUserInfoByUsername(
			@Param("username") String username);
	
	/**
	 * ��ѯ�û��б���Ϣ
	 * @param user
	 * @return
	 */
	public List<User> selectUserInfo(User user);
	
	/**
	 * ͨ�����������û���Ϣ
	 * @param id
	 * @return
	 */
	public User findUserByPrimaryKey(@Param("id") String id);
	
	/**
	 * ��ȡ�û�ͼƬ
	 * @param userId
	 * @return
	 */
	public Pic getPic(@Param("userId") String userId);
	
	/**
	 * �޸��û�
	 * @param user
	 * @return
	 */
	public int update(User user);
	
	/**
	 * �޸��û�ͼƬ
	 * @param pic
	 * @return
	 */
	public int updatePic(Pic pic);
	
	/**
	 * ɾ���û�
	 * @param ids
	 * @return
	 */
	public int delete(@Param("ids") List<String> ids);
	
	/**
	 * ɾ���û�ͼƬ
	 * @param ids
	 * @return
	 */
	public int deletePic(@Param("ids") List<String> ids);
	
	
	
	
	
	
	
	
	

}
