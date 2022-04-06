
drop table if exists student;
create table student(
	id int primary key auto_increment,
	name varchar(32),
	pwd varchar(32),
	age int,
	email varchar(32),
	gender varchar(5)
);
insert into student values(null,'张三','123',123,'zhagnsan@qq.com','男');
insert into student values(null,'李四','123',123,'zhagnsan@qq.com','女');
insert into student values(null,'王五','123',123,'zhagnsan@qq.com','男');
insert into student values(null,'王六','123',123,'zhagnsan@qq.com','男');
insert into student values(null,'王七','123',123,'zhagnsan@qq.com','男');
insert into student values(null,'王九','123',123,'zhagnsan@qq.com','男');