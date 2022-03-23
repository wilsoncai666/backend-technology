package com.etoak.book.books.dao;

import java.util.List;
import java.util.Map;

import com.etoak.book.books.bean.Book;
import com.etoak.book.books.bean.Bookpic;
import com.etoak.book.books.bean.Category;

public interface IBookDao {
	//添加书籍 返回新添加到数据库中的主键
	public String  addBook(Book book);
	//添加图片
	public void  addBookpic(Bookpic bookpic);
	//查询所有的书籍类别
	public List<Category> queryAllCategory();
	//修改
	public void updateBook(Book book);
	//删除
	public void deleteBook(String id);
	//分页
	public int getCount(Map<String,String> conditions);
	//分页
	public List<Book> getSome(int start ,int max,Map<String,String> conditions);
	//按类别
	public List<Book> getByCategory(String categoryid);
	//按书名模糊查询
	public List<Book> getByName(String bookName);
	//按照状态
	public List<Book> getByStatus(String status);
	//根据书籍id查询书籍对象 
	public Book queryBookById(String id);
	//根据书籍ID获得图片信息
	public List<Bookpic> queryBookpicByBookid(String id);
	//根据条件查询所有书籍信息
	public List<Book> getAllByConditions(Map<String, String> map);
}
