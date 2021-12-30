配jvm参数:

在setlocal下配置:

`set JAVA_OPTS=-Dfile.encoding=UTF-8 -server -Xms4096m -Xmx4096m -Xmn3072m -Xss1m -XX:PermSize=256m -XX:MaxPermSize=256m -XX:SurvivorRatio=8 -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -Xloggc:gc.log  -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=D:\logg -XX:+DisableExplicitGC`

注意点:控制台乱码可以将utf-8设置为gbk

1. -Xms 堆空间初始大小
2. -Xmx 堆空间最大数值
3. -Xmn 年轻代的堆大小
4. -Xss 每个线程堆大小
5. -XX:PermSize:表示非堆区初始内存分配大小，其缩写为permanent size（持久化内存）
6. -XX:MaxPermSize:表示对非堆区分配的内存的最大上限。
JVM堆大小的默认最大和最小值（参考）

操作系统及JVM类型|初始堆的大小（Xms）|最大堆的大小（Xmx）
---|:--:|---:
Linux/Solaris，32位客户端|16MB|256MB
Linux/Solaris，32位服务器|64MB|取1GB和物理内存大小1/4二者中的最小值
Linux/Solaris，64位服务器|取512MB和物理内存大小1/64二者中的最小值|取32GB和物理内存大小1/4二者中的最小值
MacOS，64位服务器型JVM|64MB|取1GB和物理内存大小1/4二者中的最小值
32位Window系统，客户端型JVM|16MB|256MB
64位Window系统，客户端型JVM|64MB|1GB和物理内存大小1/4二者中的最小值