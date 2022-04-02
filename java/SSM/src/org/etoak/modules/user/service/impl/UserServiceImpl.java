package org.etoak.modules.user.service.impl;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.etoak.modules.user.bean.Pic;
import org.etoak.modules.user.bean.User;
import org.etoak.modules.user.mapper.UserMapper;
import org.etoak.modules.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.DigestUtils;
import org.springframework.web.multipart.MultipartFile;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class UserServiceImpl implements UserService {
	
	//ע��UserMapper�ӿ� ������sql���
	@Autowired
	private UserMapper userMapper;

	/**
	 * �����û�
	 * @param user
	 */
	@Transactional(propagation=Propagation.REQUIRED)
	@Override
	public void add(User user) {
		int result = userMapper.add(user);
		//int i = 1/0;
		if(result <= 0){
			throw new RuntimeException("����" + 
							user.getUsername() + "�û�ʧ�ܣ�");
		}
	}

	/**
	 * �û��б��ҳ��ѯ
	 * @param page
	 * @param rows
	 * @param user
	 * @return
	 */
	@Override
	public Map<String, Object> selectUserInfoPage(
			Integer page, Integer rows, User user) {
		//���÷�ҳ
		PageHelper.startPage(page, rows);
		//��ѯ��Ϣ
		List<User> list = userMapper.selectUserInfo(user);
		//��ȡ��ҳ��Ϣ
		PageInfo<User> pi = new PageInfo<>(list);
		
		Map<String,Object> result = new HashMap<>();	
		result.put("total", pi.getTotal());
		result.put("rows", list);
		
		return result;
	}

	/**
	 * �����û�����Ƭ
	 * @param user
	 * @param pic
	 */
	@Transactional(propagation=Propagation.REQUIRED)
	@Override
	public void doAdd(User user, MultipartFile pic) {
		//�ж��û��Ƿ��ظ�
		boolean flag =
				findUserInfoByUsername(user.getUsername());
		if(flag){
			throw new RuntimeException(
					user.getUsername() + "�û��Ѵ��ڣ�");
		}
		
		//�û�����Ϣ start
		String password = 
				DigestUtils.md5DigestAsHex(
						user.getPassword().getBytes());
		
		user.setId(UUID.randomUUID().toString());//����ID
		user.setPassword(password);//�������
		user.setCreateTime(new Date());//����ʱ��
		
		int result = userMapper.add(user);
		if(result <= 0){
			throw new RuntimeException("�����û�ʧ��!");
		}
		//�û�����Ϣ end
		
		//�û�ͼƬ����Ϣ start
		Pic p = new Pic();
		p.setId(UUID.randomUUID().toString());//����ID
		p.setUserId(user.getId());//��� �û�ID
		try {
			p.setPic(pic.getBytes());//��������Ϣ
		} catch (IOException e) {
			e.printStackTrace();
			throw new RuntimeException("��ȡͼƬʧ�ܣ�");
		}
		
		result = userMapper.addPic(p);
		if(result <= 0){
			throw new RuntimeException("�����û�ͼƬʧ��!");
		}
		//�û�ͼƬ����Ϣ end
	}
	
	/**
	 * ͨ���û�����ȡ�û���Ϣ
	 * @param username
	 * @return
	 */
	@Override
	public boolean findUserInfoByUsername(String username){
		User u =
		userMapper.findUserInfoByUsername(username);
		if(u != null){
			return true;//true��ʾ����
		}
		return false;//false��ʾ������
	}

	/**
	 * ͨ�����������û���Ϣ
	 * @param id
	 * @return
	 */
	@Override
	public User findUserByPrimaryKey(String id) {
		User user = userMapper.findUserByPrimaryKey(id);
		return user;
	}

	/**
	 * ��ȡ�û�ͼƬ
	 * @param userId
	 * @return
	 */
	@Override
	public Pic getPic(String userId) {
		Pic pic = userMapper.getPic(userId);
		return pic;
	}

	/**
	 * �޸��û���ͼƬ
	 * @param user
	 * @param pic
	 */
	@Transactional(propagation=Propagation.REQUIRED)
	@Override
	public void doUpdate(User user, MultipartFile pic) {
		String id = user.getId();
		//�ж�����ID�Ƿ����
		if(StringUtils.isBlank(id)){
			throw new RuntimeException("����ID�����ڣ�");
		}
		//�жϵ�ǰ�û��Ƿ����
		User u = findUserByPrimaryKey(id);
		if(u == null){
			throw new RuntimeException("��ǰ�û������ڣ����ܽ����޸ģ�");
		}
		//�޸��û� start
		int result = userMapper.update(user);
		if(result <= 0){
			throw new RuntimeException("�޸��û�ʧ�ܣ�");
		}
		//�޸��û� end
		
		//�޸��û�ͼƬ start
		if(pic != null && !pic.isEmpty() && pic.getSize() > 0){
			Pic p = new Pic();
			p.setUserId(user.getId());
			try {
				p.setPic(pic.getBytes());
			} catch (IOException e) {
				e.printStackTrace();
				throw new RuntimeException("��ȡ��ԴͼƬʧ�ܣ�");
			}
			result = userMapper.updatePic(p);
			if(result <= 0){
				throw new RuntimeException("�޸��û�ͼƬʧ�ܣ�");
			}
		}
		//�޸��û�ͼƬ end
	}

	/**
	 * ɾ���û���ͼƬ
	 * @param ids
	 */
	@Transactional(propagation=Propagation.REQUIRED)
	@Override
	public void delete(List<String> ids) {
		int result = userMapper.delete(ids);
		if(result <= 0){
			throw new RuntimeException("ɾ���û�ʧ�ܣ�");
		}
		result = userMapper.deletePic(ids);
		if(result <= 0){
			throw new RuntimeException("ɾ���û�ͼƬʧ�ܣ�");
		}
	}

}
