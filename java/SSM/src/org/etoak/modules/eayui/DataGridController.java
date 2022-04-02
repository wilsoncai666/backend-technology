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
	 * datagrid���������Դ����� 
	 * 	page �� ��ǰҳ
	 *  rows �� ÿҳ��¼��
	 *  
	 *  ��Ӧjson����
	 *  total���ܼ�¼��
	 *  rows��������Ϣ
	 *  
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/datagrid")
	public Map<String,Object> datagrid(
			Integer page,Integer rows){
		//���÷�ҳ��Ϣ ��ǰҳ��ÿҳ��¼��
		PageHelper.startPage(page, rows);
		//��ѯȨ�ޱ�������������Ϣ
		List<Permission> list = 
				permissionMapper.getAll();
		
		//��ȡlist������Ϣ
		PageInfo<Permission> pi = new PageInfo<>(list);
		//��ȡ�ܼ�¼
		long total = pi.getTotal();
		
		//������Ӧ������������json����
		Map<String,Object> result = new HashMap<>();
		result.put("total", total);
		result.put("rows", list);
		
		return result;
		
	}

}
