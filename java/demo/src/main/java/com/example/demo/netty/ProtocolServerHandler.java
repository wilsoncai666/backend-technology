package com.lixue.netty;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.timeout.IdleState;
import io.netty.handler.timeout.IdleStateEvent;

import java.util.Set;

import org.apache.log4j.Logger;

import com.lixue.app.Message;
import com.lixue.data.Container;
import com.lixue.data.DataExplain;
import com.lixue.model.Module;
import com.lixue.util.VolvoCodeTools;


/**
 * 
 */
public class ProtocolServerHandler extends SimpleChannelInboundHandler<Object> {

	//private Logger logger = Logger.getLogger(ProtocolServerHandler.class);
	private Logger serverHandlerLog = Logger.getLogger("ServerHandler");

	@Override
	protected void channelRead0(ChannelHandlerContext ctx, Object obj)
			throws Exception {
		//String sessionId = ctx.channel().id().asLongText();

		if (obj instanceof Message) {
			Message message = (Message) obj;
			if(!message.isError()) {
				
				Module module =Container.moduleMap.get(message.getEnvCode());
				
				if(module!=null) {
					if(module.isRegister()) {//已备案
						
						switch(message.getCmd()) {
						case 0x01://机械登入
						case 0x04://机械登出
						case 0x05://拆除报警
							Container.logQueue.put(message);
							
							break;
						case 0x02://实时信息上报
						case 0x03://补发信息上报
							System.out.println("typen:"+message.getTypen());
							System.out.println("typem:"+message.getTypem());
							if(message.getTypen()==0x01) {
								Container.emissionQueue.put(message);	
							}else {
								Container.engineQueue.put(message);
							}
							if(message.getTypem()==0x01) {
								Container.emissionQueue.put(message);
							}else if(message.getTypem()==0x02) {
								Container.engineQueue.put(message);
							}
							break;
					/*	case 0x07://数据防篡改备案信息
							break;
					*/
							
						}
						//打包数据转发到国家平台
						byte[] data = getForwardData2(message);
						Container.sendQueue.put(data);
					}else {
						serverHandlerLog.info("设备未备案："+DataExplain.bytesToHexString(message.getBytesData(), 0, message.getBytesData().length));	
					}
					
				}else {
					//设备不存在
					serverHandlerLog.info("设备不存在："+DataExplain.bytesToHexString(message.getBytesData(), 0, message.getBytesData().length));
				}
					
				
			}

			
		
		}
	}
	private byte[] getForwardData(Message message) {
		//采用原始数据的方式
		return message.getBytesData();
	}
	private byte[] getForwardData2(Message message) {
		//采用打包原始消息体的方式
		byte[] data =message.getBytesData();
		byte[] sendData =new byte[message.getBytesData().length];
		System.arraycopy(data, 0, sendData, 0, 3);
		sendData[3] =(byte) 0xFE;
		System.arraycopy(data, 3, sendData, 4, 17);
		sendData[21] =0x01;
		//包含长度的复制
		System.arraycopy(data, 22, sendData, 22, message.getLength()+2);
		sendData[sendData.length-1]=VolvoCodeTools.BBCCheck(sendData);
		return sendData;
	}
	private byte[] getForwardData3(Message message) {
		//采用打包所有原始数据的方式
		byte[] sendData =new byte[message.getBytesData().length+25];
		sendData[0] =0x23;
		sendData[1] =0x23;
		sendData[2] =message.getCmd();//平台登录
		sendData[3] =(byte) 0xFE;
		byte[] envcode=message.getEnvCode().getBytes();
		System.arraycopy(envcode, 0, sendData, 4+17-envcode.length, envcode.length);
		sendData[21] =0x01;//不加密
		sendData[22] =(byte)(message.getBytesData().length>>8);
		sendData[23] =(byte)message.getBytesData().length;//数据长度低字节
		System.arraycopy(message.getBytesData(), 0, sendData, 24, message.getBytesData().length);
		sendData[sendData.length-1]=VolvoCodeTools.BBCCheck(sendData);
		return sendData;
	}

	@Override
	public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
		
		//System.out.println("read complete");
	}

	@Override
	public void channelRegistered(ChannelHandlerContext ctx)
			throws Exception {
		
		System.out.println("channel register");
	}

	@Override
	public void channelUnregistered(
			ChannelHandlerContext ctx) throws Exception {
		System.out.println("channelUnregistered");
	}

	@Override
	public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause)
			throws Exception {
		serverHandlerLog.error("netty连接异常:" + cause.getMessage(), cause);
	}

	@Override
	public void channelActive(ChannelHandlerContext ctx) throws Exception {
		
		//System.out.println("==============channel-active==============");
	}

	@Override
	public void channelInactive(ChannelHandlerContext ctx) throws Exception {
	
		//System.out.println("==============channel-inactive==============");
	}

	@Override
	public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
		//判断读数据超时 清理会话
		if (evt instanceof IdleStateEvent) {
			 IdleStateEvent event = (IdleStateEvent) evt;
	            if (event.state().equals(IdleState.READER_IDLE)) {
	                System.out.println("READER_IDLE");
	                // 超时关闭channel
	                ctx.channel().close();
	            } 
	        }else {
	        	super.userEventTriggered(ctx, evt);
	        }
		
	}



}
