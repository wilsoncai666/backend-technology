package com.etoak.enums;

public enum Teacher {
	ZQ("胖红","比较苗条","从来不生气"),
	ZWC("琛叔","狂热剑道爱好者","以反动复国为己任");
	String name;
	String title;
	private Teacher(String name, String title, String info) {
		this.name = name;
		this.title = title;
		this.info = info;
	}
	String info;
	public String getName() {
		return name;
	}
	public String getTitle() {
		return title;
	}
	public String getInfo() {
		return info;
	}
	
}
