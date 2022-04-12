package com.wawi.commons.websocket;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.wawi.commons.utils.DateUtils;

import net.sf.json.JSONObject;
/**
 * 
 * @author 武汉失眠
 * @version 1.0
 * @date 2017年11月19日
 */
public class Message {

	//接收人编号（用户编号)
	public String toId;
	//接收人姓名（用户姓名)
	public String toName;
	//发送人编号(用户编号）
	public String fromId;
	//发送人姓名（用户姓名）
	public String fromName;
	/*//发送时间 （2017-11-02 18:55:36格式字符串）
	public String sendDate;*/
	//发送内容
	public String content;

	public String getToId() {
		return toId;
	}
	public void setToId(String toId) {
		this.toId = toId;
	}
	public String getToName() {
		return toName;
	}
	public void setToName(String toName) {
		this.toName = toName;
	}
	public String getFromId() {
		return fromId;
	}
	public void setFromId(String fromId) {
		this.fromId = fromId;
	}
	public String getFromName() {
		return fromName;
	}
	public void setFromName(String fromName) {
		this.fromName = fromName;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String convertJsonString(Message message){
		Map<String,String> map = new HashMap<String,String>();
		map.put("fromId", message.getFromId());
		map.put("fromName", message.getFromName());
		map.put("toId", message.getToId());
		map.put("toName", message.getToName());
		map.put("content", message.getContent());
		map.put("time", DateUtils.formatDate(new Date(), DateUtils.TIME_STAMP_FORMAT));
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("message", map);
		params.put("type", "message");
		String messageJson = JSONObject.fromObject(params).toString();
		return messageJson;
	}
	
}
