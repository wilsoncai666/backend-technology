##多对多必须添加第三张表即桥表、关联表实现
drop table if exists student;
drop table if exists course;
drop table if exists sc;
create table student(
	id int primary key auto_increment,
	name varchar(32)
);
create table course(
	id int primary key auto_increment,
	name varchar(32)
);
##  1  1  1 2    
##桥表中存放 关联字段
create table sc(
	id int primary key auto_increment,
	sid int,
	cid int
);