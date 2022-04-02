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
		System.out.println("���Ӳ�����" + etoak);
		
		//���idΪ�գ�Ĭ���ǲ��Ҹ��ڵ� pid = 0
		/*if(StringUtils.isBlank(id)){
			id = "0";
		}*/
		
		//����ֵ��Ϣ ,Ĭ�ϼ���Ϊ��[]
		List<TreeNode> trees = Collections.EMPTY_LIST;
		
		//����Ȩ����Ϣ�� ͨ��id����pid��Ϣ
		List<Permission> perList = 
				permissionMapper.findPerInfoByPid(id);
		//�жϲ�ѯ��Ϣ�Ƿ�Ϊ��
		if(perList != null && perList.size() > 0){
			//����һ��ArrayList����
			trees = new ArrayList();
			//����һ��tree������Ϣ,��ʼ��Ϊ��
			TreeNode tree = null;
			for(Permission p : perList){
				//����һ��tree������Ϣ
				tree = new TreeNode();
				
				tree.setId(p.getId());
				tree.setText(p.getName());
				
				//�жϵ�ǰ�ڵ㣨p.getId()�����Ƿ����ӽڵ� 
				//���ؿ�false(û���ӽڵ�) ��֮Ϊtrue�����ӽڵ㣩
				
				List<Permission> perListNode = 
						permissionMapper.findPerInfoByPid(p.getId());
				
				//open���ļ�  closed���ļ���
				tree.setState(
						perListNode == null || perListNode.size() <= 0 
						? "open"  
						: "closed");
				
				//tree(��)�Զ������Բ���
				Map<String,Object> attributes = new HashMap<>();
				attributes.put("url", p.getUrl());
				
				tree.setAttributes(attributes);
				
				//tree�������list������
				trees.add(tree);
				
			}
		}
		
		return trees;
	} 

}
