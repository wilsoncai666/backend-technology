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

* 删除用户权限
  
`revoke all on database databasename from usera;`

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

8. 新建存储过程自动建表

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