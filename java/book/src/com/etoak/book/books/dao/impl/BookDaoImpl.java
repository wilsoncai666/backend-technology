package com.etoak.book.books.dao.impl;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import org.apache.commons.dbutils.handlers.MapHandler;

import com.etoak.book.books.bean.Book;
import com.etoak.book.books.bean.Bookpic;
import com.etoak.book.books.bean.Category;
import com.etoak.book.books.dao.IBookDao;
import com.etoak.book.common.factory.CF;

public class BookDaoImpl implements IBookDao {
	QueryRunner qr = new QueryRunner(CF.getDataSource());
	@Override
	public String addBook(Book book) {
		try{
		Map data = qr.query("select  replace(uuid(),'-','') as id",
				new MapHandler());
		//先获得id
		String id = data.get("id")+"";
		book.setId(id);
		String sql="insert into book(id,name,price,author,"
	+ "booknum,publishdate,categoryid,status)values"
	+ "(?,?,?,?,?,?,?,'0')";
		qr.update(sql,book.getId(),book.getName(),book.getPrice(),book.getAuthor(),
				book.getBooknum(),book.getPublishdate(),book.getCategoryid());
		
		return id;
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	@Override
	public void addBookpic(Bookpic bookpic) {
		try{
		String sql="insert into bookpic(id,realpath,showname,"
				+ "bookid,face)values(replace(uuid(),'-',''),?,?,?,?)";
		qr.update(sql,bookpic.getRealpath(),
				bookpic.getShowname(),bookpic.getBookid(),
				bookpic.getFace());
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	@Override
	public void updateBook(Book book) {
		try{
			String sql="update book set name=?,price=?,author=?"
					+ ",publishdate=?,status=?,categoryid=?,booknum=?"
					+ " where id=?";
			qr.update(sql,book.getName(),book.getPrice(),book.getAuthor(),
					book.getPublishdate(),book.getStatus(),book.getCategoryid(),
					book.getBooknum(),book.getId());
			}catch(Exception e){
				e.printStackTrace();
			}
		
	}
	@Override
	public void deleteBook(String id) {
		try{
			String sql="delete from book where id=?";
			qr.update(sql,id);
			}catch(Exception e){
				e.printStackTrace();
			}
	}
	@Override    //name:xxx   ,status:1
	public int getCount(Map<String,String> conditions) {
		try{
			String sql="select count(*) from book where 1=1 ";
			if(conditions!=null){
				Set<Map.Entry<String,String>> mes = 
						conditions.entrySet();
				for(Map.Entry<String,String> me:mes){
					String key = me.getKey();
					String value = me.getValue();
					if("name".equals(key)){
						sql+=" and  name like '%"+value+"%'";
					}else{
						sql+=" and  "+key+" = "+value;
					}
				}
			}
			System.out.println(sql);
			Map data = qr.query(sql,new MapHandler());
			return Integer.parseInt(data.get("count(*)")+"");
			}catch(Exception e){
				e.printStackTrace();
				return 0;
			}
	}
	@Override
	public List<Book> getSome(int start, int max,Map<String,String> conditions) {
		try {
			String sql="select * from book  where 1=1  ";
			// categoryid:'xxxx', status:'0',name:'xxx'
			if(conditions!=null){
				Set<Map.Entry<String,String>> mes = 
						conditions.entrySet();
				for(Map.Entry<String,String> me:mes){
					String key = me.getKey();
					String value = me.getValue();
					if("name".equals(key)){
						sql+=" and  name like '%"+value+"%'";
					}else{
						sql+="and "+key+" = "+value;
					}
				}
			}
			sql+=" limit ?,?";
			System.out.println(sql);
			List<Book> data = qr.query(sql,new 
				BeanListHandler<Book>(Book.class),start,max);
			return data;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Book> getByCategory(String categoryid) {
		try {
			String sql="select * from book  where categoryid=?";
			List<Book> data = qr.query(sql,new 
				BeanListHandler<Book>(Book.class),categoryid);
			return data;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Book> getByName(String bookName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Book> getByStatus(String status) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<Category> queryAllCategory() {
		try{
		String sql="select * from category";
		List<Category> cas = qr.query(sql,new 
				BeanListHandler<Category>(Category.class));
			return cas;
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	@Override
	public Book queryBookById(String id) {
		try{
			String sql="select * from book where id=?";
			Book book = qr.query(sql,new 
					BeanHandler<Book>(Book.class),id);
				return book;
			}catch(Exception e){
				e.printStackTrace();
				return null;
			}
	}
	@Override
	public List<Bookpic> queryBookpicByBookid(String id) {
		try {
			String sql="select * from bookpic where bookid=?";
			List<Bookpic> pics  = qr.query(sql,new
				BeanListHandler<Bookpic>(Bookpic.class),id);
			return pics;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	@Override
	public List<Book> getAllByConditions(Map<String, String> conditions) {
		try {
			String sql="select * from book  where 1=1  ";
			// categoryid:'xxxx', status:'0',name:'xxx'
			if(conditions!=null){
				Set<Map.Entry<String,String>> mes = 
						conditions.entrySet();
				for(Map.Entry<String,String> me:mes){
					String key = me.getKey();
					String value = me.getValue();
					if("name".equals(key)){
						sql+=" and  name like '%"+value+"%'";
					}else{
						sql+="and "+key+" = "+value;
					}
				}
			}
			System.out.println(sql);
			List<Book> data = qr.query(sql,new 
				BeanListHandler<Book>(Book.class));
			return data;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
