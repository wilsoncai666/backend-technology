package org.etoak.modules.user.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.etoak.modules.user.bean.Pic;
import org.etoak.modules.user.bean.User;

public interface UserMapper {
	
	/**
	 * 新增用户
	 * @param user
	 * @return
	 */
	
	public int add(User user);
	
	/**
	 * 新增用户照片
	 * @param pic
	 * @return
	 */
	public int addPic(Pic pic);
	
	//@Select("select id,username from et_user")
	public List<Map<String,Object>> 
	        findLikeInfoByUsername(Map<String,Object> map);
	
	/**
	 * 通过用户名查找用户信息
	 * @param username
	 * @return
	 */
	public User findUserInfoByUsername(
			@Param("username") String username);
	
	/**
	 * 查询用户列表信息
	 * @param user
	 * @return
	 */
	public List<User> selectUserInfo(User user);
	
	/**
	 * 通过主键查找用户信息
	 * @param id
	 * @return
	 */
	public User findUserByPrimaryKey(@Param("id") String id);
	
	/**
	 * 获取用户图片
	 * @param userId
	 * @return
	 */
	public Pic getPic(@Param("userId") String userId);
	
	/**
	 * 修改用户
	 * @param user
	 * @return
	 */
	public int update(User user);
	
	/**
	 * 修改用户图片
	 * @param pic
	 * @return
	 */
	public int updatePic(Pic pic);
	
	/**
	 * 删除用户
	 * @param ids
	 * @return
	 */
	public int delete(@Param("ids") List<String> ids);
	
	/**
	 * 删除用户图片
	 * @param ids
	 * @return
	 */
	public int deletePic(@Param("ids") List<String> ids);
	
	
	
	
	
	
	
	
	

}
