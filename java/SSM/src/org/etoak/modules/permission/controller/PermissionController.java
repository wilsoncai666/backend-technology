package org.etoak.modules.permission.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("permission")
public class PermissionController {
	
	/**
	 * ��תȨ��ģ����ҳ
	 * @return
	 */
	@RequestMapping(value="/list",method=RequestMethod.GET)
	public String list(){
		return "permission/permission-list";
	}

}
