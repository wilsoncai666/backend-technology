## PG官方文档

1. [《PostgreSQL中文文档》](www.postgres.cn/docs)
2. [《PostgreSQL英文文档》](www.postgres.org/docs)
   
## PG表分区

1. 创建主表

`create table tbl_user (id int, info text, logdate timestamp not null) PARTITION BY RANGE (logdate);`

2. 创建分区表(分别为2020和2021)

`CREATE TABLE tbl_user_2020 PARTITION OF tbl_user FOR VALUES FROM ('2020-01-01 00:00:00') TO ('2021-01-01 00:00:00');`

`CREATE TABLE tbl_user_2021 PARTITION OF tbl_user FOR VALUES FROM ('2021-01-01 00:00:00') TO ('2022-01-01 00:00:00');`

`ALTER TABLE public.tbl_user OWNER TO postgres;`

* 注意:分区时间包含关系为[startTime,endTime)

3. 创建序列
 ```
 CREATE SEQUENCE public.tbl_user_seq
    INCREMENT 1
    START 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 2;

  ALTER SEQUENCE public.tbl_user_seq OWNER TO postgres;

```

4. 为主键设置sequence

` alter table public.tbl_user alter column id set default nextval('public.tbl_user_seq');`

5. 插入数据

`insert into tbl_user (info,logdate) values('随便写点什么1','2021-02-01 00:00:00');`

### Mysql转PG
1. LONGTEXT-TEXT
2. Int(11)-INTEGER
3. DOUBLE(21)-DOUBLE PRECISION
  'CURRENT_TIMESTAMP'-CURRENT_TIMESTAMP

#### PG查询表行数

```
SELECT relname AS TABLE_NAME,
		 reltuples AS rowCounts
FROM pg_class
WHERE relkind = 'r'
		AND relnamespace = 
    (SELECT oid
    FROM pg_namespace
    WHERE nspname='public')
ORDER BY  rowCounts desc; 
```

### 创建用户并授权
 
* 创建用户和密码

 `create  user usera  with password '123456';`

* 授予该用户连接权限

 `GRANT CONNECT ON DATABASE psrapi TO usera;`

* 授予该用户某个schema使用权

`GRANT USAGE ON SCHEMA public TO usera;`

* 授予该用户所有表的增删改查权限

`GRANT SELECT,update,INSERT,delete ON ALL TABLES IN SCHEMA public TO usera;`

* 新建表查询权限
  
`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT select ON TABLES TO usera;`

* 删除所有的用户权限
  
`revoke all on database databasename from usera;`

`revoke all on schema public from usera;`

`revoke all on all tables in schema public from "psrreader@psrstreamdata";`

`ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM "psrreader@psrstreamdata";`

* 删除用户
  
`Drop user usera;`

### 查看用户系统权限和对象权限

1. 查看某用户的系统权限

`SELECT * FROM pg_roles WHERE rolname='postgres';`

2. 查看某用户的表权限

`select * from information_schema.table_privileges where grantee='postgres';`

3. 查看某用户的usage权限

`select * from information_schema.usage_privileges where grantee='postgres';`

4. 查看某用户在存储过程函数的执行权限

`select * from information_schema.routine_privileges where grantee='postgres';`

5. 查看某用户在某表的列上的权限

`select * from information_schema.column_privileges where grantee='postgres';`

6. 查看当前用户能够访问的数据类型

`select * from information_schema.data_type_privileges ;`

7. 查看用户自定义类型上授予的USAGE权限

`select * from information_schema.udt_privileges where grantee='postgres';`

8. 批量修改所有者owner
```
select
	'alter table ' || nsp.nspname || '.' || cls.relname || ' owner to usera;' || chr (13)
from
	pg_catalog.pg_class cls,
	pg_catalog.pg_namespace nsp
where
	nsp.nspname in ('public')
	and cls.relnamespace = nsp.oid
	and cls.relkind = 'r'
order by
	nsp.nspname,
	cls.relname;

```

1.  新建存储过程自动建表

```sql
create or replace function addId() returns 
boolean AS
$BODY$
declare ii integer;
  begin
  ii := 1;
  FOR ii IN 1..1000000 LOOP
  INSERT INTO test01 (id) VALUES (ii);
  end LOOP;
  return true;
  end;
$BODY$
LANGUAGE plpgsql;

select * from addId();
```

### PG 求交并差集

INTERSECT用于求交集，UNION/UNION ALL用于求并集，EXCEPT用于求差集。

用法如下：

query1 INTERSECT query2

query1 UNION query2 

query1 EXCEPT query2

 其中query1和query2的SELECT子句中字段个数必须相同，且对应的数据类型必须相同（如果int和bigint结果取bigint,varchar(5)和varchar(10)结果取varchar(10)），字段名可以不同，但是最终结果会以第一个SELECT子句中字段名称返回。

1. INTERSECT
两个查询使用INTERSECT求交集的结果使用图片表示如下：
![图片](../../pics/intersect.png)

2. UNION / UNION ALL
两个查询使用UNION的结果使用图片表示如下：
![union](../../pics/union.png)

注意： UNION默认会去重，即重复数据只会返回一行，

UNION ALL会保留重复数据，返回所有行。

3. EXCEPT
两个查询使用EXCEPT(A EXCEPT B)求差集的结果：

![except](../../pics/except.png)


### PG无法删除某个数据库

删除数据库时报错：
`ERROR: database "psrPg" is being accessed by other users DETAIL: There are 2 other sessions using the database.`
解决方式：
断开连接到这个数据库上的所有链接，再删除数据库。怎么断开呢？在PostgreSQL 9.2 及以上版本，执行下面的语句：

```
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE datname='mydb' AND pid<>pg_backend_pid();

drop DATABASE mydb;

```
语句说明：

pg_terminate_backend：用来终止与数据库的连接的进程id的函数。
pg_stat_activity：是一个系统表，用于存储服务进程的属性和状态。
pg_backend_pid()：是一个系统函数，获取附加到当前会话的服务器进程的ID。