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
	 * ע���¼ҵ���
	 */
	@Autowired
	private LoginService loginService;
	
	/**
	 * ��¼
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
		
		//ͨ���û�����ȡ�û���Ϣ
		User user = loginService.findUserInfoByUsername(uname);
		//�ж��û��Ƿ�Ϊ��
		if(user == null){
			return new ResultJson(-1,uname + "�û��������ڣ�");
		}
		
		//��������� Ȼ�����Ч��
		String password =
				DigestUtils.md5DigestAsHex(pwd.getBytes());
		if(!password.equals(user.getPassword())){
			return new ResultJson(-2,"�������");
		}
		
		//�ж��û��Ƿ񱻶���
		Integer status = user.getStatus();
		if(status == null || status == 0){
			return new ResultJson(-3,uname + "�û��Ѿ������ᣡ");
		}
		
		//��ǰ�û�����Щ��ɫ
		List<Role> roles =
				loginService.findRolesByUserId(user.getId());
		
		//���ý�ɫ
		user.setRoles(roles);
		
		//��ȡ��ǰ�û��Ƿ�Ϊ����Ա
		Map<String,Object> param = new HashMap<>();
		param.put("name", "ETOAK");
		param.put("userId", user.getId());
		List<Role> isAdmin = loginService.getAdmin(param);
		
		//���ù���Ա
		user.setAdmin(isAdmin != null && isAdmin.size() > 0);
		
		//����������Ϊ��
		user.setPassword(null);
		
		//���û����뵽session��
		m.addAttribute("user", user);
		
		return new ResultJson(200,null);
	}
	
	/**
	 * �˳�
	 * @param session
	 * @return
	 */
	@RequestMapping(value="logout")
	public String logout(SessionStatus session){
		//�˳�֮���������session
		session.setComplete();
		return "redirect:/";
	}	
}
