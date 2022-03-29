package com.etoak.enums;

public enum Color {
	RED("我是小红"),YELLOW("你是大黄"),GREEN;
	String name;
	private Color(){}
	private  Color(String name){
		this.name = name;
	}
	public void show(){
		System.out.println(this.name);
	}
}

