package org.etoak.modules.system.service;

import java.util.List;

import org.etoak.commons.utils.TreeNode;

public interface IndexService {
	
	/**
	 * ��ȡȨ��
	 * @param pid
	 * @return
	 */
	public List<TreeNode> getPerTree(String pid);

}
