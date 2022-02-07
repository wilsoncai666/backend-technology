package com.wawi.commons;

import org.springframework.stereotype.Component;
@Component
public class Result {

	private String code;
	private String msg;
	private Object data;

	public Result() {
		code = "0";
		msg = "操作失败！";
	}
	public String getCode() {
		return code;
	}

	public  void setCode(String code) {
		this.code = code;
	}

	public void clean() {
		code = "0";
		msg = "操作失败！";
		data = null;
	}
	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

}
