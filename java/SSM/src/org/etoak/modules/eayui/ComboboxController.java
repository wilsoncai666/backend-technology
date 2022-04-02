package org.etoak.modules.eayui;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.etoak.modules.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/combobox")
public class ComboboxController {
	
	@Autowired
	private UserMapper userMapper;
	
	@ResponseBody
	@RequestMapping("/combobox")
	public List<Map<String,Object>> combobox(String q){
		
		Map<String,Object> param = new HashMap<>();
		param.put("username", q);
		
		List<Map<String,Object>> list =
				userMapper.findLikeInfoByUsername(param);
		return list;
		
	}

}
