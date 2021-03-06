package com.wawi.commons.utils;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;

import javax.imageio.ImageIO;

/**
 * 水印工具
 * @author goujieyong
 *2018年9月17日
 * version 1.0
 */
public class Watermark {
	
	/** 
	* 把图片印刷到图片上 
	* @param pressImg -- 水印文件 
	* @param targetImg -- 目标文件 
	* @param x 
	* @param y 
	*/ 
	public final static void pressImage(String pressImg, String targetImg, int x, int y) { 
	try { 
	File _file = new File(targetImg); 
	Image src = ImageIO.read(_file); 
	int wideth = src.getWidth(null); 
	int height = src.getHeight(null); 
	BufferedImage image = new BufferedImage(wideth, height,BufferedImage.TYPE_INT_RGB); 
	Graphics g = image.createGraphics(); 
	g.drawImage(src, 0, 0, wideth, height, null); 
	// 水印文件 
	File _filebiao = new File(pressImg); 
	Image src_biao = ImageIO.read(_filebiao); 
	int wideth_biao = src_biao.getWidth(null); 
	int height_biao = src_biao.getHeight(null); 
	g.drawImage(src_biao, wideth - wideth_biao - x, height - height_biao -y, wideth_biao, 
	height_biao, null); 
	// / 
	g.dispose(); 
	FileOutputStream out = new FileOutputStream(targetImg); 
	out.close(); 
	} catch (Exception e) { 
	e.printStackTrace(); 
	} 
	} 

	/** 
	* 打印文字水印图片 
	* @param pressText --文字 
	* @param targetImg -- 目标图片 
	* @param fontName -- 字体名 
	* @param fontStyle -- 字体样式 
	* @param color -- 字体颜色 
	* @param fontSize -- 字体大小 
	* @param x -- 偏移量 
	* @param y 
	*/ 

	public static void pressText(String pressText, String targetImg, String fontName,int fontStyle,Color color, int fontSize, int x, int y) { 
		try { 
			File _file = new File(targetImg); 
			Image src = ImageIO.read(_file); 
			int wideth = src.getWidth(null); 
			int height = src.getHeight(null); 
			BufferedImage image = new BufferedImage(wideth, height,BufferedImage.TYPE_INT_RGB); 
			Graphics g = image.createGraphics(); 
			g.drawImage(src, 0, 0, wideth, height, null); 
			g.setColor(color); 
			g.setFont(new Font(fontName, fontStyle, fontSize)); 
		
		
			g.drawString(pressText, wideth - fontSize - x, height - fontSize/2 - y); 
			g.dispose(); 
			FileOutputStream out = new FileOutputStream(targetImg); 
			out.close(); 
		} catch (Exception e) { 
			System.out.println(e); 
		} 
	} 
	/** 
	* 打印文字水印图片 
	* @param pressText --文字 
	* @param targetImg -- 目标图片 
	* @param fontName -- 字体名 
	* @param fontStyle -- 字体样式 
	* @param color -- 字体颜色 
	* @param fontSize -- 字体大小 
	* @param x -- 偏移量 
	* @param y 
	*/ 

	public static void main(String[] args) { 
	//	pressText("正品区","e:/3b246f333d283cbc.jpg","",Font.BOLD,Color.BLACK,20,100,100); 
		pressImage("e:/ziti.png","e:/3b246f333d283cbc.jpg",1,1);
	//	File file = new File("e:/GEDC0139-2.jpg");
	//	System.out.println(file.length()/1024);
	} 


}
