### 查询数据库中表所占空间
```
select
    table_schema as '数据库',
    table_name as '表名',
    table_rows as '记录数',
    truncate(data_length/1024/1024, 2) as '数据容量(MB)',
    truncate(index_length/1024/1024, 2) as '索引容量(MB)'
from information_schema.tables
where table_schema='psrapi'
order by data_length desc, index_length desc;
```


### 可以通过如下两条命令之一来解决，使字典对象缓存实时更新：
`SET GLOBAL information_schema_stats_expiry=0;`

`SET @@GLOBAL.information_schema_stats_expiry=0;`
### 实践过程中发觉，除了需要设置全局的，还需要设置会话SESSION的（以下两条SQL一样）：
`SET SESSION information_schema_stats_expiry=0;`

`SET @@SESSION.information_schema_stats_expiry=0;`

Mysql用户操作命令
-- 创建同步账户，指定从库的地址

`create user 'repl'@'127.0.0.1' identified by 'mypassword';`

-- 修改用户密码

`ALTER USER repl@'127.0.0.1' IDENTIFIED BY 'mypassword';`

-- 使用自然的密码进行登录

`ALTER USER 'repl'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY 'mypassword'; `

-- 赋权限

`grant replication slave on *.* to 'repl'@'127.0.0.1';`

-- 刷新权限

`flush privileges; `

-- 删除用户

`drop user reps@'10.254.62.3'`

Mysql binlog日志转换成可以解读的文件，打开一个终端，执行以下语句，Windows下需要配好环境变量

`mysqlbinlog --no-defaults  F:\binlog.000022 >binlog.sql`

-- 查看数据库进程信息

`show full processlist;`

-- 查看事务是不是自动提交1是自动提交

`select @@autocommit;`

`show variables like "autocommit" ;`

-- 查看全局行事务锁等待时间并加大该时间默认50s

`SHOW GLOBAL VARIABLES LIKE 'innodb_lock_wait_timeout';`

`SHOW GLOBAL VARIABLES LIKE '%lock_wait_timeout';`

-- 设置行锁等待超时时间

`SET  GLOBAL innodb_lock_wait_timeout=100;`

-- 查看全局锁超时时间

`SHOW GLOBAL VARIABLES LIKE 'lock_wait_timeout';`

-- 查看本session锁超时时间

`SHOW SESSION VARIABLES LIKE 'lock_wait_timeout';`

-- 调整锁超时阈值默认是一年31536000

`set session lock_wait_timeout = 1800;`

`set global lock_wait_timeout = 1800;`

统一数据库表和列的编码格式
含义：
TABLE_SCHEMA：数据库名
TABLE_COLLATION：编码格式
-- 查询table的编码格式TABLE_SCHEMA是数据库名

`SELECT * from information_schema.TABLES WHERE TABLE_SCHEMA = 'smdb';`

-- 查询出alter语句依次执行，可以将相应表格设置成统一格式

```
SELECT CONCAT('ALTER TABLE ', table_name, ' CONVERT TO CHARACTER SET  utf8mb4 COLLATE utf8mb4_0900_ai_ci;')
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = 'smdb' and TABLE_COLLATION != 'utf8mb4_0900_ai_ci';
```

-- 查询columns编码

`select * from information_schema.COLUMNS
WHERE TABLE_SCHEMA = 'smdb'
AND DATA_TYPE = 'varchar'`

-- 拼接出指定数据库的不符合特定编码格式的表中列的修改表中字符集及编码排序规则的脚本：
```
SELECT CONCAT('ALTER TABLE `', table_name, '` MODIFY `', column_name, '` ', DATA_TYPE, '(', CHARACTER_MAXIMUM_LENGTH, ') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci', (CASE WHEN IS_NULLABLE = 'NO' THEN ' NOT NULL' ELSE '' END), ';')
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = 'smdb'
AND DATA_TYPE = 'varchar'
AND
(
    CHARACTER_SET_NAME != 'utf8mb4'
    OR
    COLLATION_NAME != 'utf8mb4_0900_ai_ci'
);
```

### 如何查找mysql中的慢sql
1. 查看mysql是否开启mansql记录日志

	`show variables like 'slow_query_log';`

2. 慢sql记录时间

	`show variables like 'long_query_time';`
 
3. 设置记录mysql为打开状态OFF为关闭

	`set global slow_query_log='ON';`

4. 设置超过一秒的sql都将记录

	`set global long_query_time=1`

5. 查看记录文件

	`show variables like 'slow_query_log_file';`

6. 设置记录文件（非必要）

	`set global slow_query_log_file='/var/lib/mysql/test_1116.log';`




