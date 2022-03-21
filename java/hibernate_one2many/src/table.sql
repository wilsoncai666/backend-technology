drop table if exists customer;
drop table if exists orders;
create table customer(
	id int primary key auto_increment,
	name varchar(32)
);
create table orders(
	id int primary key auto_increment,
	money int,
	cid int##使用cid引用customer的主键
);
select * from customer;
select * from orders;