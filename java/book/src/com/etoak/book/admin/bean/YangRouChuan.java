package com.etoak.book.admin.bean;
public class YangRouChuan{
    private int time;//被烤时间
    private String state;//熟生状态：熟、生、糊了
    private String taste;//口味要求：不辣、微辣、特辣
    private String seasoning;//添加过的调理

    //构造方法
    public YangRouChuan(String taste){
        this.time=0;
        this.state="生";
        this.taste=taste;
        this.seasoning="";
    }

    //被烤
    public void roasted(int time, int count){
        this.time += time * count;
        if(this.time < 5){
            this.state = "生";
        }else if(this.time >= 5 && this.time < 10){
            this.state = "微熟";
        }else if(this.time >= 10 && this.time < 15){
            this.state = "熟";
        }else{
            this.state = "糊了";
        }
        addSeasoning();
    }

    //设置口味
    public void setTaste(String taste){
        this.taste = taste;
    }
    //添加调料
    public void addSeasoning(){
        if(this.time>0&&this.time<5){
            this.seasoning += "少许盐";
        }else if(this.time >= 5 && this.time < 10){
            if(this.taste.equals("不辣")){
                this.seasoning += "适量孜然 ";
            }else if(this.taste.equals("微辣")){
                this.seasoning += "适量孜然+辣椒粉 ";
            }else{
                this.seasoning += "适量孜然+大量辣椒粉 ";
            }
        }else if(this.time >= 10 && this.time < 15){
            if(this.taste.equals("不辣")){
                this.seasoning += "适量孜然+香菜 ";
            }else if(this.taste.equals("微辣")){
                this.seasoning += "适量孜然+辣椒粉+香菜 ";
            }else{
                this.seasoning += "适量孜然+大量辣椒粉+香菜 ";
            }
        }else{
            this.seasoning += "烤糊了，加什么调料都难吃！";
        }
    }
    //toString方法，用于打印烤串信息
    public String toString(){
        return "口味：" + this.taste + "，烤制时间：" + this.time + "分钟，状态：" + this.state + "，调料 ：" + this.seasoning;
    }
    public static void main(String[] args) {
        YangRouChuan[] chuanArr = new YangRouChuan[10];
        String taste = "不辣";

        //创建10串羊肉串，口味均为不辣
        for(int i=0; i<10; i++){
            chuanArr[i] = new YangRouChuan(taste);
        }

        //烤10串不辣的羊肉串
        for(int i=1; i<=3; i++){ //烤3次
            System.out.println("====================烤制第" + i + "次====================");
            for(int j=0; j<10; j++){ //每次烤10串
                chuanArr[j].roasted(3, 1); //每串烤3分钟
                System.out.println("第" + (j+1) + "串：" + chuanArr[j].toString());
            }
        }
    }
}