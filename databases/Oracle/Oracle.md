### Oracle查询表空间大小
```
SELECT a.tablespace_name "表空间名", 
total "表空间大小", 
free "表空间剩余大小", 
(total - free) "表空间使用大小", 
total / (1024 * 1024 * 1024) "表空间大小(G)", 
free / (1024 * 1024 * 1024) "表空间剩余大小(G)", 
(total - free) / (1024 * 1024 * 1024) "表空间使用大小(G)", 
round((total - free) / total, 4) * 100 "使用率 %" 
FROM (SELECT tablespace_name, SUM(bytes) free 
FROM dba_free_space 
GROUP BY tablespace_name) a, 
(SELECT tablespace_name, SUM(bytes) total 
FROM dba_data_files 
GROUP BY tablespace_name) b 
WHERE a.tablespace_name = b.tablespace_name 
```


### 查询表空间地址，ITS_DATA为相应的已满的表空间名称，找到最后一个文件+1
`select * from dba_data_files t  where t.TABLESPACE_NAME ='ITS_DATA' order by t.FILE_NAME desc`

### 修改表空间大小
```
alter tablespace ITS_DATA add datafile '/dbdata/oracle/itsdb/oracle/oradata/orcl/its_data32.dbf' size 20480M autoextend on next 1024M ;
alter tablespace ITS_DATA add datafile '/dbdata/oracle/itsdb/oracle/oradata/orcl/its_data33.dbf' size 20480M autoextend on next 1024M ;
alter tablespace ITS_DATA add datafile '/dbdata/oracle/itsdb/oracle/oradata/orcl/its_data34.dbf' size 20480M autoextend on next 1024M ;
```