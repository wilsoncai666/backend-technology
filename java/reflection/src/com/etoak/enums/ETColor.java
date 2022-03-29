package com.etoak.enums;

public class ETColor {
	public static final ETColor RED = new ETColor();
	public static final ETColor YELLOW = new ETColor();
	public static final ETColor GREEN = new ETColor();
	//存放枚举的数组
	private static final ETColor[] VALUES={RED,YELLOW,GREEN};
	
	private ETColor(){}
	String name;
	private ETColor(String name){
		this.name =name;
	}
	
	
	@Override
	public String toString(){
		if(this==RED)return "RED";
		if(this==GREEN)return "GREEN";
		if(this==YELLOW) return "YELLOW";
		return null;
	}
		
	public static ETColor valueOf(String str){
		for(ETColor c:VALUES){
			if(c.toString().equals(str)){
				return c;
			}
		}
		return null;
	}	
	public static ETColor[] values(){
		return VALUES;
	}
}
