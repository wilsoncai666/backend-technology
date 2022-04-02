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
	
	//注入UserMapper接口 ，调用sql语句
	@Autowired
	private UserMapper userMapper;

	/**
	 * 新增用户
	 * @param user
	 */
	@Transactional(propagation=Propagation.REQUIRED)
	@Override
	public void add(User user) {
		int result = userMapper.add(user);
		//int i = 1/0;
		if(result <= 0){
			throw new RuntimeException("新增" + 
							user.getUsername() + "用户失败！");
		}
	}

	/**
	 * 用户列表分页查询
	 * @param page
	 * @param rows
	 * @param user
	 * @return
	 */
	@Override
	public Map<String, Object> selectUserInfoPage(
			Integer page, Integer rows, User user) {
		//设置分页
		PageHelper.startPage(page, rows);
		//查询信息
		List<User> list = userMapper.selectUserInfo(user);
		//获取分页信息
		PageInfo<User> pi = new PageInfo<>(list);
		
		Map<String,Object> result = new HashMap<>();	
		result.put("total", pi.getTotal());
		result.put("rows", list);
		
		return result;
	}

	/**
	 * 新增用户和照片
	 * @param user
	 * @param pic
	 */
	@Transactional(propagation=Propagation.REQUIRED)
	@Override
	public void doAdd(User user, MultipartFile pic) {
		//判断用户是否重复
		boolean flag =
				findUserInfoByUsername(user.getUsername());
		if(flag){
			throw new RuntimeException(
					user.getUsername() + "用户已存在！");
		}
		
		//用户表信息 start
		String password = 
				DigestUtils.md5DigestAsHex(
						user.getPassword().getBytes());
		
		user.setId(UUID.randomUUID().toString());//主键ID
		user.setPassword(password);//密码加密
		user.setCreateTime(new Date());//创建时间
		
		int result = userMapper.add(user);
		if(result <= 0){
			throw new RuntimeException("新增用户失败!");
		}
		//用户表信息 end
		
		//用户图片表信息 start
		Pic p = new Pic();
		p.setId(UUID.randomUUID().toString());//主键ID
		p.setUserId(user.getId());//外键 用户ID
		try {
			p.setPic(pic.getBytes());//二进制信息
		} catch (IOException e) {
			e.printStackTrace();
			throw new RuntimeException("读取图片失败！");
		}
		
		result = userMapper.addPic(p);
		if(result <= 0){
			throw new RuntimeException("新增用户图片失败!");
		}
		//用户图片表信息 end
	}
	
	/**
	 * 通过用户名获取用户信息
	 * @param username
	 * @return
	 */
	@Override
	public boolean findUserInfoByUsername(String username){
		User u =
		userMapper.findUserInfoByUsername(username);
		if(u != null){
			return true;//true表示存在
		}
		return false;//false表示不存在
	}

	/**
	 * 通过主键查找用户信息
	 * @param id
	 * @return
	 */
	@Override
	public User findUserByPrimaryKey(String id) {
		User user = userMapper.findUserByPrimaryKey(id);
		return user;
	}

	/**
	 * 获取用户图片
	 * @param userId
	 * @return
	 */
	@Override
	public Pic getPic(String userId) {
		Pic pic = userMapper.getPic(userId);
		return pic;
	}

	/**
	 * 修改用户和图片
	 * @param user
	 * @param pic
	 */
	@Transactional(propagation=Propagation.REQUIRED)
	@Override
	public void doUpdate(User user, MultipartFile pic) {
		String id = user.getId();
		//判断主键ID是否存在
		if(StringUtils.isBlank(id)){
			throw new RuntimeException("主键ID不存在！");
		}
		//判断当前用户是否存在
		User u = findUserByPrimaryKey(id);
		if(u == null){
			throw new RuntimeException("当前用户不存在，不能进行修改！");
		}
		//修改用户 start
		int result = userMapper.update(user);
		if(result <= 0){
			throw new RuntimeException("修改用户失败！");
		}
		//修改用户 end
		
		//修改用户图片 start
		if(pic != null && !pic.isEmpty() && pic.getSize() > 0){
			Pic p = new Pic();
			p.setUserId(user.getId());
			try {
				p.setPic(pic.getBytes());
			} catch (IOException e) {
				e.printStackTrace();
				throw new RuntimeException("读取资源图片失败！");
			}
			result = userMapper.updatePic(p);
			if(result <= 0){
				throw new RuntimeException("修改用户图片失败！");
			}
		}
		//修改用户图片 end
	}

	/**
	 * 删除用户和图片
	 * @param ids
	 */
	@Transactional(propagation=Propagation.REQUIRED)
	@Override
	public void delete(List<String> ids) {
		int result = userMapper.delete(ids);
		if(result <= 0){
			throw new RuntimeException("删除用户失败！");
		}
		result = userMapper.deletePic(ids);
		if(result <= 0){
			throw new RuntimeException("删除用户图片失败！");
		}
	}

}
