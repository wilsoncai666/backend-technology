drop database if exists book;
create database book;
use book;
##管理员表
drop table if exists admin;
create table admin(
	id varchar(32) primary key,
	name varchar(20),
	pwd varchar(20)
);
insert into admin values(replace(uuid(),'-',''),'etoak','111');
select * from admin;
##书籍类别表
drop table if exists category;
create table category(
	id varchar(32) primary key ,
	name varchar(20)
);
insert into category values(replace(uuid(),'-',''),'历史类');
insert into category values(replace(uuid(),'-',''),'科幻类');
insert into category values(replace(uuid(),'-',''),'考试类');
insert into category values(replace(uuid(),'-',''),'计算机类');
##书籍表
drop table if exists book;
create table book(
	id varchar(32) primary key ,
	name varchar(32),
	price double,
	author varchar(20),
	publishdate datetime,
	categoryid varchar(32),##引用类别的id
	status varchar(2),##“0”表示就下架 “1 ”：表示上架
	booknum  int,#书籍数量
	foreign key(categoryid) references category(id)
);
##书籍图片表
drop table if exists bookpic;
create table bookpic(
	id  varchar(32) primary key ,
	realpath varchar(200),##真正保存的路径
	showname varchar(50) ,##显示名字
	bookid varchar(32),##book表主键
	face  varchar(2),##“0”不是封面 "1"：是封面
	 foreign key(bookid) references book(id)
);

















