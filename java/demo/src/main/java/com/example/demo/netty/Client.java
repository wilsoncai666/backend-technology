package com.lixue.netty;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioSocketChannel;

import java.util.Calendar;
import java.util.Date;

import org.apache.log4j.Logger;

import com.lixue.data.Container;
import com.lixue.data.DataExplain;
import com.lixue.init.SysValue;
import com.lixue.util.LoginSnUtils;
import com.lixue.util.VolvoCodeTools;

/**
 * netty客户端
 */
public class Client {


    public Logger connectLog = Logger.getLogger("ConnectLog");
    public Logger clinetSend = Logger.getLogger("ClinetSend");

	
	private  Channel channel;


	public static Boolean breakLoop =false; //是否停止循环发送数据
	public static Boolean breakLoopAlready =false;//循环发送数据是否已经停止
	public static Boolean alreadyLogin =false;//平台登陆是否 完成
	
    public  void startClient(){
    	connectLog.info("启动客户端");
    	alreadyLogin =false;
        //1.定义服务类
    	Bootstrap clientBootstap = new Bootstrap();

        //2.定义执行线程组
        EventLoopGroup worker = new NioEventLoopGroup();

        //3.设置线程池
        clientBootstap.group(worker);

        //4.设置通道
        clientBootstap.channel(NioSocketChannel.class);

        //5.添加Handler
        clientBootstap.handler(new ChannelInitializer<Channel>() {
            @Override
            protected void initChannel(Channel channel) throws Exception {
                connectLog.info("client channel init!");
                ChannelPipeline pipeline = channel.pipeline();
             
                pipeline.addLast("ClientDecoder",new ClientDecoder());
                pipeline.addLast("ClientEncoder",new ClientEncoder());
                pipeline.addLast("ClientHandler",new ClientHandler());
            }
        });

        //6.建立连接
        ChannelFuture channelFuture = clientBootstap.connect(SysValue.forwardingIp,SysValue.forwardingPort);
        channelFuture.addListener(new ConnectionListener());
        channel = channelFuture.channel();
        //获取平台登录 数据
        byte[] loginData = getLoginData();
        try {
            //7.测试输入
           
            while(true){
            	if(channelFuture.isSuccess()) {//连接成功
            		
            		if(alreadyLogin) {//平台登录成功，可以发送数据
            			byte[] data =Container.sendQueue.take();
            			clinetSend.info( DataExplain.bytesToHexString(data, 0, data.length));
            			System.out.println("转发："+DataExplain.bytesToHexString(data, 0, data.length));
            			channel.writeAndFlush(data);
            		}else {//是否存在需要发送平台登陆数据，有则发送。
            			if(loginData!=null) {
            				channel.writeAndFlush(loginData);
            				clinetSend.info( DataExplain.bytesToHexString(loginData, 0, loginData.length));
            				System.out.println("登入："+DataExplain.bytesToHexString(loginData, 0, loginData.length));
            				loginData=null;
            			}
            		}
            	}
                
            	if(breakLoop) {
            		breakLoopAlready =true;
            		break;
            	}
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            //8.关闭连接
        	connectLog.info("client shutdownGracefully!");
        
            worker.shutdownGracefully();
        }
    }
    private static byte[] getLoginData() {
    	byte[] data =new byte[66];
    	data[0] =0x23;
    	data[1] =0x23;
    	data[2] =0x07;//平台登录
    	data[3] =(byte) 0xFE;
    	//data[3] =(byte) 0x00;
    	//byte[] vin =ConvertToASCII("L34111355N4013324");
    	//byte[] vin =  ConvertToASCII("                 ");
    	//System.arraycopy(vin, 0, data, 4, vin.length);
    	data[21] =0x01;//不加密
    	data[23] =41;//数据长度低字节
    	Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());			// 放入Date类型数据
		
		data[24] =(byte) (calendar.get(Calendar.YEAR)-2000);			// 获取年份
		data[25] =(byte) (calendar.get(Calendar.MONTH)+1);			// 获取月份
		data[26] =(byte) calendar.get(Calendar.DATE);			// 获取日
		data[27] =(byte) calendar.get(Calendar.HOUR_OF_DAY);		// 时（24进制）
		data[28] =(byte) calendar.get(Calendar.MINUTE);			// 分
		data[29] =(byte) calendar.get(Calendar.SECOND);			// 秒
		int sn = LoginSnUtils.getSnToday();
		data[30] =(byte)(sn>>8);
		data[31] =(byte)sn;
		byte[] usernameBytes = null;
		try {
			 usernameBytes = ConvertToASCII(SysValue.username);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		byte[] usernameBytesAll =new byte[12];
		System.arraycopy(usernameBytes, 0, usernameBytesAll, usernameBytesAll.length-usernameBytes.length, usernameBytes.length);
		
		System.arraycopy(usernameBytesAll,0,data,32,usernameBytesAll.length);
		
		byte[] passwordBytes = null;
		try {
			passwordBytes =ConvertToASCII(SysValue.password);
		}catch(Exception e) {
			e.printStackTrace();
		}
		byte[] passwordBytesAll =new byte[20];
		for(int i=0;i<passwordBytesAll.length;i++) {//不足的补齐空格
			passwordBytesAll[i] =0x20;
		}
		
		System.arraycopy(passwordBytes, 0, passwordBytesAll, passwordBytesAll.length-passwordBytes.length, passwordBytes.length);
		//System.arraycopy(passwordBytes, 0, passwordBytesAll, 0, passwordBytes.length);
		
		System.arraycopy(passwordBytesAll,0,data,44,passwordBytesAll.length);
		
		data[64] =0x01;//不加密
		data[65]=VolvoCodeTools.BBCCheck(data);
		return data;
	}
   /* public static byte[] reverse(byte[] data) {
    	byte[] newData =new byte[data.length];
    	for(int i=data.length-1;i>=0;i--) {
    		newData[data.length-1-i] =data[i];
    	}
    	return newData;
    }*/
	public  void reconnect() {
    	breakLoop =true;
    	while (true) {
    		if(breakLoopAlready) {
    			breakLoop =false;
    			breakLoopAlready=false;
    			startClient();
    		}
    		try {
    			Thread.sleep(100);
    		}catch(Exception e) {
    			e.printStackTrace();
    		}
    		
    	}
    	
    	
    }
	 public static byte[] ConvertToASCII(String string) {
	        char[] ch = string.toCharArray();
	        byte[] tmp = new byte[ch.length];
	        for (int i = 0; i < ch.length; i++) {
	            tmp[i] = (byte) Integer.valueOf(ch[i]).intValue();
	        }
	        return tmp;
	    }

}