package org.etoak.commons.utils;

public enum StatusEnum {
	
	STATUS0("0","����"),
	STATUS1("1","����");
	
	private String code;
	private String text;
	
	private StatusEnum(String code, String text) {
		this.code = code;
		this.text = text;
	}

	public String getCode() {
		return code;
	}

	public String getText() {
		return text;
	}

}
