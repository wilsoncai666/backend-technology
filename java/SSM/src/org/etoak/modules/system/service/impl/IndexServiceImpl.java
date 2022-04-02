package org.etoak.modules.system.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.etoak.commons.utils.TreeNode;
import org.etoak.modules.permission.bean.Permission;
import org.etoak.modules.permission.mapper.PermissionMapper;
import org.etoak.modules.role.bean.Role;
import org.etoak.modules.system.service.IndexService;
import org.etoak.modules.user.bean.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *	主页
 */
@Service
public class IndexServiceImpl implements IndexService {
	
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private HttpSession session;
	
	@Autowired
	private PermissionMapper permissionMapper;

	/**
	 * 获取权限
	 * @param pid
	 * @return
	 */
	@Override
	public List<TreeNode> getPerTree(String pid) {
		//返回结果集
		List<TreeNode> trees = Collections.EMPTY_LIST;
		
		//获取session中用户  当前用户
		User user = (User)session.getAttribute("user");
		//判断是否为管理员 true为管理员 false为非管理员
		List<Permission> list = Collections.EMPTY_LIST;
		if(user.isAdmin()){//管理员查询所有权限
			list = permissionMapper.findPerInfoByPid(pid);
			trees = perTree(list);
		}else{//非管理员通过角色查询权限
			List<Role> roles = user.getRoles();
			if(roles != null && roles.size() > 0){
				Map<String,Object> map = new HashMap<>();
				map.put("pid", pid);
				map.put("list", roles);
			    list = 
			    	permissionMapper.findPerInfoByRolesId(map);
			    trees = perTree(list);
			}
		}
		return trees;
	}
	
	private List<TreeNode> perTree(List<Permission> list){
		
		List<TreeNode> trees = Collections.EMPTY_LIST;
		
		if(list != null && list.size() > 0){
			trees = new ArrayList<>();
			TreeNode tree = null;
			for(Permission p : list){
				tree = new TreeNode();
				
				tree.setId(p.getId());
				tree.setText(p.getName());
				
				List<Permission> count = 
				 permissionMapper.findPerInfoByPid(p.getId());
				
				tree.setState(
						count == null || count.size() <= 0 
						? "open"
						: "closed");
				
				Map<String,Object> attributes = new HashMap<>();
				attributes.put("url", p.getUrl());
				tree.setAttributes(attributes);
				
				trees.add(tree);
				
			}
		}
		
		return trees;
	}
	

}
