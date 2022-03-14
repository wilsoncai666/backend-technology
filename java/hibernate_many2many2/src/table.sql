drop table if exists sc;
drop table if exists student;
drop table if exists course;
create table student(
	id int primary key auto_increment,
	name varchar(32)
);
create table course(
	id int primary key auto_increment,
	name varchar(32)
);
create table sc(
	id int primary key auto_increment,
	sid int,
	cid int,
	score int,
	foreign key(sid) references student(id),
	foreign key(cid) references course(id)
);

