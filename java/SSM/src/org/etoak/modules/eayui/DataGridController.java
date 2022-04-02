package org.etoak.modules.eayui;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.etoak.modules.permission.bean.Permission;
import org.etoak.modules.permission.mapper.PermissionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Controller
@RequestMapping("/datagrid")
public class DataGridController {
	
	@Autowired
	private PermissionMapper permissionMapper;
	
	/**
	 * datagrid发送请求自带参数 
	 * 	page ： 当前页
	 *  rows ： 每页记录数
	 *  
	 *  响应json数据
	 *  total：总记录数
	 *  rows：数据信息
	 *  
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/datagrid")
	public Map<String,Object> datagrid(
			Integer page,Integer rows){
		//设置分页信息 当前页和每页记录数
		PageHelper.startPage(page, rows);
		//查询权限表中所有数据信息
		List<Permission> list = 
				permissionMapper.getAll();
		
		//获取list集合信息
		PageInfo<Permission> pi = new PageInfo<>(list);
		//获取总记录
		long total = pi.getTotal();
		
		//设置响应参数，并返回json数据
		Map<String,Object> result = new HashMap<>();
		result.put("total", total);
		result.put("rows", list);
		
		return result;
		
	}

}
