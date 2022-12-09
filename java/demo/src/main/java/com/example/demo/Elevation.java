package com.example.demo;

import java.io.*;
import java.net.*;
import javax.xml.parsers.ParserConfigurationException;

import org.xml.sax.SAXException;

/**
 * @author yfeng14
 */
public class Elevation
{

  /**
   * @param args the command line arguments
   */
  public static void main(String[] args)
  {
    // TODO code application logic here
    StringBuffer document = new StringBuffer();
    try {
      //Elevation API URLs are restricted to approximately 2000 characters
      URL url = new URL(
          "https://maps.googleapis.com/maps/api/elevation/xml?locations=39.7391536,-104.9847034|39.7391536,-104.9847034&key=YourKEY");//远程url
      URLConnection conn = url.openConnection();
      BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
      String line = null;
      while ((line = reader.readLine()) != null) {
        if (line.startsWith("  <elevation>")) {
          line = line.replaceAll("  <elevation>", "");
          line = line.replaceAll("</elevation>", "");
          document.append(line + " ");
          System.out.println(line);
        }
      }
      reader.close();
    }
    catch (MalformedURLException e) {
      e.printStackTrace();
    }
    catch (IOException e) {
      e.printStackTrace();
    }
    String xml = document.toString();//返回值
    System.out.print(xml);
  }
}