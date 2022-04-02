package org.etoak.modules.system.controller;

import java.util.List;

import org.etoak.commons.utils.TreeNode;
import org.etoak.modules.system.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


//@SessionAttributes({"user"})
@Controller
@RequestMapping("/index")
public class IndexController {
	
	@Autowired
	private IndexService indexService;
	
	/**
	 * 登录成功后跳转主页
	 * @return
	 */
	@RequestMapping(value="/index",method=RequestMethod.GET)
	public String index(){
		return "system/index";
	}
	
	/**
	 * 获取权限
	 * @param id
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/getPerTree",method=RequestMethod.POST)
	public List<TreeNode> getPerTree(
			@RequestParam(defaultValue="0") String id){
		List<TreeNode> list = indexService.getPerTree(id);
		return list;
	}

}
