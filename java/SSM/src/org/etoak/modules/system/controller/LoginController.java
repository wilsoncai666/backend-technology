package org.etoak.modules.system.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.etoak.commons.utils.ResultJson;
import org.etoak.modules.role.bean.Role;
import org.etoak.modules.system.service.LoginService;
import org.etoak.modules.user.bean.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

@SessionAttributes({"user"})
@Controller
@RequestMapping("/login")
public class LoginController {
	
	
	/**
	 * 注入登录业务层
	 */
	@Autowired
	private LoginService loginService;
	
	/**
	 * 登录
	 */
	/**
	 * @param uname
	 * @param pwd
	 * @param etoak
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public ResultJson login(
			String uname,
			String pwd,
			String etoak,
			Model m){
		
		//System.out.println(etoak);
		
		//通过用户名获取用户信息
		User user = loginService.findUserInfoByUsername(uname);
		//判断用户是否为空
		if(user == null){
			return new ResultJson(-1,uname + "用户名不存在！");
		}
		
		//给密码加密 然后进行效验
		String password =
				DigestUtils.md5DigestAsHex(pwd.getBytes());
		if(!password.equals(user.getPassword())){
			return new ResultJson(-2,"密码错误！");
		}
		
		//判断用户是否被冻结
		Integer status = user.getStatus();
		if(status == null || status == 0){
			return new ResultJson(-3,uname + "用户已经被冻结！");
		}
		
		//当前用户有哪些角色
		List<Role> roles =
				loginService.findRolesByUserId(user.getId());
		
		//设置角色
		user.setRoles(roles);
		
		//获取当前用户是否为管理员
		Map<String,Object> param = new HashMap<>();
		param.put("name", "ETOAK");
		param.put("userId", user.getId());
		List<Role> isAdmin = loginService.getAdmin(param);
		
		//设置管理员
		user.setAdmin(isAdmin != null && isAdmin.size() > 0);
		
		//将密码设置为空
		user.setPassword(null);
		
		//将用户放入到session中
		m.addAttribute("user", user);
		
		return new ResultJson(200,null);
	}
	
	/**
	 * 退出
	 * @param session
	 * @return
	 */
	@RequestMapping(value="logout")
	public String logout(SessionStatus session){
		//退出之后清空所有session
		session.setComplete();
		return "redirect:/";
	}	
}
