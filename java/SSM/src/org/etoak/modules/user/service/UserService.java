package org.etoak.modules.user.service;

import java.util.List;
import java.util.Map;

import org.etoak.modules.user.bean.Pic;
import org.etoak.modules.user.bean.User;
import org.springframework.web.multipart.MultipartFile;

public interface UserService {
	
	/**
	 * 新增用户
	 * @param user
	 */
	public void add(User user);
	
	/**
	 * 用户列表分页查询
	 * @param page
	 * @param rows
	 * @param user
	 * @return
	 */
	public Map<String,Object> selectUserInfoPage(
			Integer page,Integer rows,User user);
	
	/**
	 * 新增用户和照片
	 * @param user
	 * @param pic
	 */
	public void doAdd(User user,MultipartFile pic);
	
	/**
	 * 通过用户名获取用户信息
	 * @param username
	 * @return
	 */
	public boolean findUserInfoByUsername(String username);
	
	/**
	 * 通过主键查找用户信息
	 * @param id
	 * @return
	 */
	public User findUserByPrimaryKey(String id);
	
	/**
	 * 获取用户图片
	 * @param userId
	 * @return
	 */
	public Pic getPic(String userId);
	
	/**
	 * 修改用户和图片
	 * @param user
	 * @param pic
	 */
	public void doUpdate(User user,MultipartFile pic);
	
	/**
	 * 删除用户和图片
	 * @param ids
	 */
	public void delete(List<String> ids);

}
