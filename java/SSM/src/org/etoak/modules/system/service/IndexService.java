package org.etoak.modules.system.service;

import java.util.List;

import org.etoak.commons.utils.TreeNode;

public interface IndexService {
	
	/**
	 * 获取权限
	 * @param pid
	 * @return
	 */
	public List<TreeNode> getPerTree(String pid);

}
