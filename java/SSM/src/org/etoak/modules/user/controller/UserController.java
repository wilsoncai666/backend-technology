package org.etoak.modules.user.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.etoak.commons.utils.ResultJson;
import org.etoak.commons.utils.StatusEnum;
import org.etoak.modules.jedis.JedisService;
import org.etoak.modules.user.bean.Pic;
import org.etoak.modules.user.bean.User;
import org.etoak.modules.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/user")
public class UserController {
	
	//注入UserService接口 ，调用服务层业务
	@Autowired
	private UserService userService;
	
	@Autowired
	private JedisService jedisService;
	
	/**
	 * 跳转用户模块主页
	 * @return
	 */
	@RequestMapping(value="/list",method=RequestMethod.GET)
	public String list(){
		return "user/user-list";
	}
	
	/**
	 * 跳转查询页面
	 * @return
	 */
	@RequestMapping(value="/query",method=RequestMethod.GET)
	public String query(){
		return "user/user-query";
	}
	
	/**
	 * 跳转新增、修改页面
	 * @return
	 */
	@RequestMapping(value="/userAddUpdate",
				method=RequestMethod.GET)
	public String userAddUpdate(String userId,ModelMap m){
		//userId等于空表示新增  不等于空表示修改
		if(StringUtils.isNotBlank(userId)){
			User user = userService.findUserByPrimaryKey(userId);
			m.addAttribute("u", user);
		}
		return "user/user-add-update";
	}
	
	/**
	 * 新增用户
	 * @return
	 */
	@RequestMapping("/add")
	public String add(){
		
		try{
			User user = new User();
			user.setId(UUID.randomUUID().toString());
			user.setUsername("etoak");
			user.setPassword("et1703");
			user.setEmail("etoak@et.com");
			user.setTel("110");
			user.setStatus(1);
			user.setCreateTime(new Date());
			
			//测试数据库
			userService.add(user);
			//测试jedis
			jedisService.set(user.getUsername(), 
							 user.getPassword());
			
			System.out.println("新增" + 
					user.getUsername() + "用户成功！");
			
		}catch(RuntimeException e){
			System.out.println(e.getMessage());
		}catch (Exception e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
		}
		
		return "success";
	}
	
	/**
	 * 用户列表分页查询
	 * @param page
	 * @param rows
	 * @param user
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/query",method=RequestMethod.POST)
	public Map<String,Object> query(
			Integer page,
			Integer rows,
			User user){
		Map<String,Object> result = 
				userService.selectUserInfoPage(page, rows, user);
		return result;
	}
	
	/**
	 * 获取状态
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/getStatus",method=RequestMethod.POST)
	public List<Map<String,Object>> getStatus(){
		List<Map<String,Object>> list = new ArrayList<>();
		
		StatusEnum[] ses = StatusEnum.values();
		
		Map<String,Object> map = null;
		for(StatusEnum se : ses){
			map = new HashMap<>();
			map.put("id", se.getCode());
			map.put("text", se.getText());
			list.add(map);
		}
		
		return list;
	}
	
	/**
	 * 新增用户
	 * @param user
	 * @param pic
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/doAdd",method=RequestMethod.POST)
	public ResultJson doAdd(User user,MultipartFile pic){
		
		try{
			userService.doAdd(user, pic);
		}catch(RuntimeException e){
			return new ResultJson(500,e.getMessage());
		}catch(Exception e){
			e.printStackTrace();
			return new ResultJson(500,e.getMessage());
		}
		
		return new ResultJson(200,"新增用户成功！");
	}
	
	/**
	 * 判断用户名是否存在
	 * @param username
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/getUsername")
	public boolean getUsername(String username){
		boolean b = 
				userService.findUserInfoByUsername(username);
		return !b;
	}
	
	/**
	 * 获取用户图片
	 * @param userId
	 * @param response
	 */
	@RequestMapping(value="/getPic/{userId}",method=RequestMethod.GET)
	public void getPic(
			@PathVariable String userId,
			HttpServletResponse response){
		Pic pic = userService.getPic(userId);
		
		OutputStream out = null;
		try {
			out = response.getOutputStream();
			out.write(pic.getPic());
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			if(out != null){
				try {
					out.flush();
					out.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	/**
	 * 修改用户
	 * @param user
	 * @param pic
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/doUpdate",method=RequestMethod.POST)
	public ResultJson doUpdate(User user,MultipartFile pic){
		try{
			userService.doUpdate(user, pic);
		}catch(RuntimeException e){
			return new ResultJson(500,e.getMessage());
		}catch(Exception e){
			e.printStackTrace();
			return new ResultJson(500,e.getMessage());
		}
		return new ResultJson(200,"修改用户成功！");
	}
	
	/**
	 * 删除用户
	 * @param ids
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/delete",method=RequestMethod.POST)
	public ResultJson delete(@RequestBody List<String> ids){
		try{
			userService.delete(ids);
		}catch(RuntimeException e){
			return new ResultJson(500,e.getMessage());
		}catch(Exception e){
			e.printStackTrace();
			return new ResultJson(500,e.getMessage());
		}
		return new ResultJson(200,"删除用户成功！");
	}

}
