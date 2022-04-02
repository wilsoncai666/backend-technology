package org.etoak.modules.user.service;

import java.util.List;
import java.util.Map;

import org.etoak.modules.user.bean.Pic;
import org.etoak.modules.user.bean.User;
import org.springframework.web.multipart.MultipartFile;

public interface UserService {
	
	/**
	 * �����û�
	 * @param user
	 */
	public void add(User user);
	
	/**
	 * �û��б��ҳ��ѯ
	 * @param page
	 * @param rows
	 * @param user
	 * @return
	 */
	public Map<String,Object> selectUserInfoPage(
			Integer page,Integer rows,User user);
	
	/**
	 * �����û�����Ƭ
	 * @param user
	 * @param pic
	 */
	public void doAdd(User user,MultipartFile pic);
	
	/**
	 * ͨ���û�����ȡ�û���Ϣ
	 * @param username
	 * @return
	 */
	public boolean findUserInfoByUsername(String username);
	
	/**
	 * ͨ�����������û���Ϣ
	 * @param id
	 * @return
	 */
	public User findUserByPrimaryKey(String id);
	
	/**
	 * ��ȡ�û�ͼƬ
	 * @param userId
	 * @return
	 */
	public Pic getPic(String userId);
	
	/**
	 * �޸��û���ͼƬ
	 * @param user
	 * @param pic
	 */
	public void doUpdate(User user,MultipartFile pic);
	
	/**
	 * ɾ���û���ͼƬ
	 * @param ids
	 */
	public void delete(List<String> ids);

}
