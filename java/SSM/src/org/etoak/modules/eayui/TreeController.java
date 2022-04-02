package org.etoak.modules.eayui;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.etoak.commons.utils.TreeNode;
import org.etoak.modules.permission.bean.Permission;
import org.etoak.modules.permission.mapper.PermissionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/tree")
public class TreeController {
	
	@Autowired
	private PermissionMapper permissionMapper;
	
	@RequestMapping("/tree")
	@ResponseBody
	public List<TreeNode> tree(
		@RequestParam(defaultValue="0")	String id,
			String etoak){
		System.out.println("附加参数：" + etoak);
		
		//如果id为空，默认是查找根节点 pid = 0
		/*if(StringUtils.isBlank(id)){
			id = "0";
		}*/
		
		//返回值信息 ,默认集合为空[]
		List<TreeNode> trees = Collections.EMPTY_LIST;
		
		//查找权限信息， 通过id查找pid信息
		List<Permission> perList = 
				permissionMapper.findPerInfoByPid(id);
		//判断查询信息是否为空
		if(perList != null && perList.size() > 0){
			//定义一个ArrayList集合
			trees = new ArrayList();
			//定义一个tree对象信息,初始化为空
			TreeNode tree = null;
			for(Permission p : perList){
				//创建一个tree对象信息
				tree = new TreeNode();
				
				tree.setId(p.getId());
				tree.setText(p.getName());
				
				//判断当前节点（p.getId()）下是否有子节点 
				//返回空false(没有子节点) 反之为true（有子节点）
				
				List<Permission> perListNode = 
						permissionMapper.findPerInfoByPid(p.getId());
				
				//open：文件  closed：文件夹
				tree.setState(
						perListNode == null || perListNode.size() <= 0 
						? "open"  
						: "closed");
				
				//tree(树)自定义属性参数
				Map<String,Object> attributes = new HashMap<>();
				attributes.put("url", p.getUrl());
				
				tree.setAttributes(attributes);
				
				//tree对象放入list集合中
				trees.add(tree);
				
			}
		}
		
		return trees;
	} 

}
