package com.wawi.commons.websocket;


import java.net.URI;
import java.net.URISyntaxException;

import org.java_websocket.WebSocket.READYSTATE;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.drafts.Draft_6455;
import org.java_websocket.handshake.ServerHandshake;

/**
 * 
 * @author 武汉失眠
 * @version 1.0
 * @date 2017年11月19日
 */
public class ClientWebSocket{

	 public static WebSocketClient client;
	 /**
		 * 当没有连接成功，循环等待，当循环100次停止等待
		 */
	private Integer connectNum=0;

	 public ClientWebSocket(String uri){
		 try {
			client = new WebSocketClient(new URI(uri),new Draft_6455()) {

				@Override
				public void onClose(int arg0, String arg1, boolean arg2) {
					
				}

				@Override
				public void onError(Exception arg0) {
					
					
				}

				@Override
				public void onMessage(String arg0) {
					
					
				}

				@Override
				public void onOpen(ServerHandshake arg0) {
					
				}
				 
			 };
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
	 }
	 public void connect(){
		 client.connect();
	 }
	 public void close(){
		 client.close();;
	 }
	 public void send(String massage){
		 client.send(massage);
	 }
	 
	 public READYSTATE getReadyState(){
		return client.getReadyState();
	 }
	public Integer getConnectNum() {
		return connectNum;
	}
	public void setConnectNum(Integer connectNum) {
		this.connectNum = connectNum;
	}
	 
	
	 
}
