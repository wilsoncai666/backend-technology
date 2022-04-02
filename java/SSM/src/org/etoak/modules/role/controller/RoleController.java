package org.etoak.modules.role.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/role")
public class RoleController {
	
	/**
	 * 跳转角色模块主页
	 * @return
	 */
	@RequestMapping(value="/list",method=RequestMethod.GET)
	public String list(){
		
		return "role/role-list";
	}

}
