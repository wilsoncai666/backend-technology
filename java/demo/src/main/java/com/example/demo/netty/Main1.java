package com.example.demo.netty;


public class Main1 {
    class Printer(){
        print(String str);
    }
    class ColorPrinter extends Printer {
        print(String str) {
            System.out.println("输出彩色的"+str);
        }
    }
    class BlackPrinter extends Printer {
        print(String str) {
            System.out.println("输出黑白的"+str);
        }
    }
    public static void main(String[] args) {
        Printer p = new ColorPrinter();
        p.print();
        p = new BlackPrinter();
        p.print();
    }
    
}
