package org.etoak.modules.role.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/role")
public class RoleController {
	
	/**
	 * ��ת��ɫģ����ҳ
	 * @return
	 */
	@RequestMapping(value="/list",method=RequestMethod.GET)
	public String list(){
		
		return "role/role-list";
	}

}
