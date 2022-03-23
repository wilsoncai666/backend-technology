package com.etoak.book.books.servlet;

import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.lang.reflect.Method;
import java.net.URLEncoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.etoak.book.books.bean.Book;
import com.etoak.book.books.bean.Bookpic;
import com.etoak.book.books.bean.Category;
import com.etoak.book.books.dao.IBookDao;
import com.etoak.book.books.dao.impl.BookDaoImpl;
import com.etoak.book.common.util.Page;
import com.jspsmart.upload.File;
import com.jspsmart.upload.Files;
import com.jspsmart.upload.Request;
import com.jspsmart.upload.SmartUpload;
//HttpServlet--->GenericServlet-->Implements Servlet,ServletConfig
public class BookServlet extends HttpServlet {
	//导出为Excel
	public void exportToExcel(HttpServletRequest request,HttpServletResponse response)
			throws ServletException,IOException{
		String categoryid= request.getParameter("categoryid");
		String status = request.getParameter("status");
		String name = request.getParameter("name");
		//构造条件map
		Map<String,String> map = new HashMap<String,String>();
		if(categoryid!=null){
			map.put("categoryid","'"+categoryid+"'");
		}
		if(status!=null){
			map.put("status","'"+status+"'");
		}
		if(name!=null){
			map.put("name",name);
		}
		IBookDao dao = new BookDaoImpl();
		List<Book> data = dao.getAllByConditions(map);
		
		XSSFWorkbook wb = new XSSFWorkbook();
		Sheet sheet = wb.createSheet("书籍列表");
		Row rowHeader = sheet.createRow(0);
		rowHeader.createCell(0).setCellValue("书籍名字");
		rowHeader.createCell(1).setCellValue("书籍价格");
		rowHeader.createCell(2).setCellValue("书籍作者");
		rowHeader.createCell(3).setCellValue("出版日期");
		rowHeader.createCell(4).setCellValue("书籍状态");
		rowHeader.createCell(5).setCellValue("书籍库存");
		int i=1;
		for(Book d:data){
		    // Create a row and put some cells in it. Rows are 0 based.
		    Row row = sheet.createRow((short)i++);
		    // Create a cell and put a value in it.
		    Cell cell = row.createCell(0);
		    cell.setCellValue(d.getName());

		    // Or do it on one line.
		    row.createCell(1).setCellValue(d.getPrice());
		    row.createCell(2).setCellValue(d.getAuthor());
		    row.createCell(3).setCellValue(d.getPdate());
		    row.createCell(4).
		    	setCellValue(d.getStatus().equals("0")?"下架":"上架");
		    
		    row.createCell(5).setCellValue(d.getBooknum());
		    
		}
			//通过修改响应头的方式来改变文件的名字，后缀等特性
			response.setHeader("Content-Disposition","attachment;filename="+URLEncoder.encode("学生信息表","UTF-8")+".xlsx");
		    // Write the output to a file
		    OutputStream os = response.getOutputStream();
		    wb.write(os);
		    os.close();
		
		
	}
	public void queryBookByIdWithPics(HttpServletRequest request,HttpServletResponse response)
			throws ServletException,IOException{
		//1.获得id
		String id = request.getParameter("id");
		//2.获得书籍对象
		//dao层查询对应的Book对象
		IBookDao dao  = new BookDaoImpl();
		List<Bookpic> pics = dao.queryBookpicByBookid(id);
		
		Book book = dao.queryBookById(id);
		//设置书籍的图片信息
		book.setPics(pics);
		
		//写出到客户端
		JSONObject jo = JSONObject.fromObject(book);
		response.setContentType("text/plain;charset=utf-8");
		PrintWriter out = response.getWriter();
		out.print(jo);
		out.flush();
		out.close();
		
		
	}
	public void updatebook(HttpServletRequest request,HttpServletResponse response)
			throws ServletException,IOException{
		
		String id = request.getParameter("id");
		String name = request.getParameter("name");
		String author = request.getParameter("author");
		String publishdate = request.getParameter("publishdate");
		String price = request.getParameter("price");
		
		//dao层查询对应的Book对象
		IBookDao dao  = new BookDaoImpl();
		Book book = dao.queryBookById(id);
		book.setName(name);
		book.setAuthor(author);
		book.setPrice(Double.parseDouble(price));
		book.setPublishdate(string2Date(publishdate));
		//更新书籍
		dao.updateBook(book);
		response.sendRedirect("adminindex.jsp");
		
	}
	public void queryBookById(HttpServletRequest request,HttpServletResponse response)
			throws ServletException,IOException{
		String id = request.getParameter("id");
		//调用Dao层查询
		IBookDao dao = new BookDaoImpl();
		Book book = dao.queryBookById(id);
		JsonConfig config = new JsonConfig();
		config.setExcludes(new String[]{"publishdate"});
		JSONObject jo = JSONObject.fromObject(book,config);
		response.setContentType("text/plain;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.print(jo);
		out.flush();
		out.close();
	}
	//分页查询
	public void querySomeBook(HttpServletRequest request,HttpServletResponse response)
			throws ServletException,IOException{
		//获得当前页
		int currentPage = Integer.
				valueOf(request.getParameter("currentPage"));
		String categoryid= request.getParameter("categoryid");
		String status = request.getParameter("status");
		String name = request.getParameter("name");
		//构造条件map
		Map<String,String> map = new HashMap<String,String>();
		if(categoryid!=null){
			map.put("categoryid","'"+categoryid+"'");
		}
		if(status!=null){
			map.put("status","'"+status+"'");
		}
		if(name!=null){
			map.put("name",name);
		}
		IBookDao dao = new BookDaoImpl();
		//~~~~~~~~~~~~~~~~~~~getCount()
		int allRecords = dao.getCount(map);
		Page<Book> page = new Page<Book>();
		//设置当前页 ==》next==>pre 
		page.setCurrentPage(currentPage);
		//设置总记录数 pageCount pageSize  allRecods
		page.setAllRecords(allRecords);
		int start = page.getStart();
		//~~~~~~~~~~~~~~~~~~getSome(start,max)
		//数据
		List<Book> data = dao.getSome(start,page.getPageSize(),map);
		//设置显示的本页数据
		page.setData(data);
		response.setContentType("text/plain;charset=UTF-8");
		PrintWriter out = response.getWriter();
		//会送的客户端
		//
		JsonConfig config = new JsonConfig();
		//设置不需要返回的属性
		config.setExcludes(new String[]{"publishdate"});
		JSONObject jo = JSONObject.fromObject(page,config);
		out.print(jo);
		out.flush();
		out.close();
		
	}
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request,response);
	}
	public void add(HttpServletRequest request,HttpServletResponse response)
		throws ServletException,IOException{
		//1.搞对象
		SmartUpload su = new SmartUpload();
		//2.初始化
		su.initialize(this, request, response);
		try{
		//3.上传 
		su.upload();
		//获得Book参数
		Request req = su.getRequest();
		Book book = new Book();
		book.setAuthor(req.getParameter("author"));
		book.setBooknum(Integer.parseInt(req.getParameter("booknum")));
		book.setCategoryid(req.getParameter("categoryid"));
		book.setName(req.getParameter("name"));
		book.setPrice(Double.parseDouble(req.getParameter("price")));
		book.setPublishdate(string2Date(req.getParameter("publishdate")));
		IBookDao dao = new BookDaoImpl();
		//添加书籍信息
		String bookid = dao.addBook(book);
		//4.
		
		Files files = su.getFiles();
		int count = files.getCount();
		for(int i=0;i<count;i++){
			File f = files.getFile(i);
			String fName = f.getFileName();
			String fExt = f.getFileExt();
			
			String realName = UUID.
			randomUUID().toString().replaceAll("-","")+"."+fExt;
			
			String realPath = "/myfile/"+realName;
			//保存到硬盘上
			f.saveAs(realPath);
			Bookpic bp = new Bookpic();
			bp.setBookid(bookid);
			bp.setRealpath(realPath);//文件改名后的目录 /myfile/xxx.jpg
			bp.setShowname(fName);//文件原来的名字
			//处理封面				2				  1
			if(req.getParameter("face").equals(i+"")){
				bp.setFace("1");
			}else{
				bp.setFace("0");
			}
			dao.addBookpic(bp);
			
		}
		response.sendRedirect("adminindex.jsp");
		}catch(Exception e){
			e.printStackTrace();
			response.sendRedirect("error.jsp?msg=添加图书异常！！");
		}
	}
	private Date string2Date(String parameter) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			return sdf.parse(parameter);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	public void queryAllCategory(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//1.调用Dao层方法获得所有Category对象
		IBookDao dao = new BookDaoImpl();
		//2.组装JSON格式并返回
		List<Category> cas = dao.queryAllCategory();
		JSONArray ja = JSONArray.fromObject(cas);
		response.setContentType("text/plain;charset=UTF-8");
		PrintWriter out  = response.getWriter();
		out.print(ja);
		out.flush();
		out.close();
	}
	
	public void changestatus(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String id = request.getParameter("id");
		IBookDao dao = new BookDaoImpl();
		Book book = dao.queryBookById(id);
		//将书籍的状态改为原来相反的状态
		if(book.getStatus().equals("0")){
			book.setStatus("1");
		}else{
			book.setStatus("0");
		}
		dao.updateBook(book);
		response.setContentType("text/plain;charset=UTF-8");
		PrintWriter out = response.getWriter();
		//JSONObject jo = new JSONObject();
		//jo.put("flag", "success");
		
		out.print("{\"flag\":\"success\"}");
	
		out.flush();
		out.close();
		
		
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String method = request.getParameter("method");
		//文件上传
		if(null==method){add(request,response);return;}
		//获得BookServlet对应的Class文件
		Class cls = this.getClass();
		try{
		//在BookServlet中寻找名字为指定名字的方法对象
		Method m = cls.getDeclaredMethod(method,HttpServletRequest.class,
				HttpServletResponse.class);
		//方法被执行
		m.invoke(this,request,response);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

}




