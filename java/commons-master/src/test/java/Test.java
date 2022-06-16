import net.sf.json.JSONArray;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;

public class Test
{
  public static void main(String[] args)
  {
    /*byte[] user=ConvertToASCII("esf87vwmoui1");
    System.out.println(Arrays.toString(user));
    System.out.println(user);*/
    byte[] loginData=getLoginData();
    System.out.println(Arrays.toString(loginData));
    System.out.println(loginData);
    /*int[] aa= {
    35,  35,   7, 254,   0,   0,  0,   0,   0,   0,   0,   0,
        0,   0,   0,   0,   0,   0,  0,   0,   0,   1,   0,  41,
        22,   6,   2,   9,  56,  46,  0,   1, 121, 107, 116, 116,
        119, 114, 117, 119, 100, 118, 56, 104,  71, 117, 111, 115,
        105,  95,  50,  48,  50,  50, 71, 117, 111, 115, 105,  95,
        50,  48,  50,  50,   1};
    byte[] data =new byte[65];
    for (int i=0;i<aa.length;i++){
      data[i]= (byte) aa[i];
    }*/
    System.out.println( bytes2hex01(loginData));

//    JSONArray array = [0x23,0x23,0x07,0xFE,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x01,0x00,0x29,0x16,0x06,0x02,0x09,0x38,0x2E,0x00,0x01,0x79,0x6B,0x74,0x74,0x77,0x72,0x75,0x77,0x64,0x76,0x38,0x68,0x47,0x75,0x6F,0x73,0x69,0x5F,0x32,0x30,0x32,0x32,0x47,0x75,0x6F,0x73,0x69,0x5F,0x32,0x30,0x32,0x32,0x01];

  }
  public static String bytes2hex01(byte[] bytes)

  {

    /**

     *

     第⼀个参数的解释，记得⼀定要设置为

     1

     *  signum of the number (-1 for negative, 0 for zero, 1 for positive).

     */

    BigInteger bigInteger = new BigInteger(1, bytes);

    return bigInteger.toString(16);

  }
  public static byte[] int2Bytes(int integer)
  {
    byte[] bytes=new byte[4];
    bytes[3]= (byte) ((byte) integer >> 24);
    bytes[2]= (byte) ((byte) integer >> 16);
    bytes[1]= (byte) ((byte) integer >> 8);
    bytes[0]=(byte) integer;

    return bytes;
  }
  public static byte[] ConvertToASCII(String string) {
    char[] ch = string.toCharArray();
    byte[] tmp = new byte[ch.length];
    for (int i = 0; i < ch.length; i++) {
      tmp[i] = (byte) Integer.valueOf(ch[i]).intValue();
    }
    return tmp;
  }
  private static byte[] getLoginData() {
    byte[] data =new byte[66];
    data[0] =0x23;
    data[1] =0x23;
    data[2] =0x07;//平台登录
    data[3] = (byte) 0xFE;
    //data[3] =(byte) 0x00;
//    byte[] vin =ConvertToASCII("L34111355N4013324");
    //byte[] vin =  ConvertToASCII("                 ");
//    System.arraycopy(vin, 0, data, 4, vin.length);
    data[21] =0x01;//不加密
    data[23] =41;//数据长度低字节
//    Calendar calendar = Calendar.getInstance();
//    calendar.setTime(new Date());			// 放入Date类型数据
//
//    data[24] =(byte) (calendar.get(Calendar.YEAR)-2000);			// 获取年份
//    data[25] =(byte) (calendar.get(Calendar.MONTH)+1);			// 获取月份
//    data[26] =(byte) calendar.get(Calendar.DATE);			// 获取日
//    data[27] =(byte) calendar.get(Calendar.HOUR_OF_DAY);		// 时（24进制）
//    data[28] =(byte) calendar.get(Calendar.MINUTE);			// 分
//    data[29] =(byte) calendar.get(Calendar.SECOND);			// 秒
    data[24] = 22;
    data[25] = 6;
    data[26] = 6;
    data[27] = 15;
    data[28] = 30;
    data[29] = 30;
    int sn = 1;
    data[30] =(byte)(sn>>8);
    data[31] =(byte)sn;
    byte[] usernameBytes = null;
    try {
      usernameBytes = ConvertToASCII("esf87vwmoui1");
    }catch(Exception e) {
      e.printStackTrace();
    }

    byte[] usernameBytesAll =new byte[12];
    System.arraycopy(usernameBytes, 0, usernameBytesAll, usernameBytesAll.length-usernameBytes.length, usernameBytes.length);

    System.arraycopy(usernameBytesAll,0,data,32,usernameBytesAll.length);

    byte[] passwordBytes = null;
    try {
      passwordBytes =ConvertToASCII("ui0bgyrr");
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
    data[65]=BBCCheck(data);
    return data;
  }

  public static byte BBCCheck(byte[] datas){

    byte temp=datas[0];

    for (int i = 1; i <datas.length; i++) {
      temp ^=datas[i];
    }

    return temp;
  }
}
