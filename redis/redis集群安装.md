redis安装使用root用户，启动用cloud用户

安装前置条件：

安装包准备

![image](/uploads/d620d4b28660d70c6143a41b2adcd2df/image.png)

服务器准备：三台

197.32，197.33， 197.34

开始安装

***1.安装***

2：上传到服务器，解压，编译

root用户安装redis

上传至/usr/local

解压

cd /usr/local

rz 

上传安装包

tar -zxvf redis-3.2.3.tar.gz



cd /usr/local/redis-3.2.3

开始安装

make

make install

```
[root@pgwsrv01 redis-3.2.3]# make install
cd src && make install
make[1]: Entering directory `/usr/local/redis-3.2.3/src'

Hint: It's a good idea to run 'make test' ;)

    INSTALL install
    INSTALL install
    INSTALL install
    INSTALL install
    INSTALL install
make[1]: Leaving directory `/usr/local/redis-3.2.3/src'
```
**2.创建集群需要的目录**

进入cloud用户

mkdir redis-cluster

cd redis-cluster

mkdir 7000

mkdir 7001 


**4：修改配置文件redis.conf**

cp /usr/local/redis-3.2.3/redis.conf /export/home/cloud/redis-cluster/7000

vi redis.conf

##修改配置文件中的下面选项
```

port 700
daemonize yes
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes
#注意下面两个 bind 需要注释掉否则其它机器连接不上，保护模式打开也同样，
#不注释的另一个方案是讲其他机器的ip bind 配置上
# bind设置后其他机器连不上
#bind 127.0.0.1
#这是保护模式 临时禁用
protected-mode no

```
##修改完redis.conf配置文件中的这些配置项之后把这个配置文件分别拷贝到7000/7001目录下面
cp /export/home/cloud/redis-cluster/7000/redis.conf /export/home/cloud/redis-cluster/7001
cd /export/home/cloud/redis-cluster/7001

```
vi redis.conf
prot 7001
```
##注意：拷贝完成之后要修改7001目录下面redis.conf文件中的port参数，分别改为对应的文件夹的名称

创建redis日志目录

 mkdir /export/home/cloud/redislog

5：分别启动这2个redis实例

redis-server /export/home/cloud/redis-cluster/7000/redis-7000.conf > /export/home/cloud/redislog/redis-7000.log 2>&1 &  

redis-server /export/home/cloud/redis-cluster/7001/redis-7001.conf > /export/home/cloud/redislog/redis-7001.log 2>&1 &  


##启动之后使用命令查看redis的启动情况

ps -ef|grep redis

如下图显示则说明启动成功

![image](/uploads/2859de43c613b30f220f40fbeada8988/image.png)




继续

完成其他两个机器以上相同配置的启动。


**6：执行redis的创建集群命令创建集群**

选择其中一台机去安装集群环境。这里选择32

yum search ruby

yum install ruby

yum install rubygems

上传redis-3.3.1.gem到服务器

gem install -l ./redis-3.3.1.gem 

gem install redis 

以上四步不执行会报错

```
cd /usr/local/redis-3.2.1/src

封版

./redis-trib.rb  create --replicas 1 10.164.197.32:7000  10.164.197.33:7000 10.164.197.34:7000  10.164.197.34:7001 10.164.197.32:7001 10.164.197.33:7001

生产

./redis-trib.rb  create --replicas 1 10.164.196.177:7000  10.164.196.178:7000 10.164.196.179:7000  10.164.196.179:7001 10.164.196.177:7001 10.164.196.178:7001



```
第一次报错：
```
 ./redis-trib.rb  create --replicas 1 10.164.197.32:7000  10.164.197.33:7000 10.164.197.34:7000  10.164.197.34:7001 10.164.197.32:7001 10.164.197.33:7001
./redis-trib.rb:24:in `require': no such file to load -- rubygems (LoadError)
	from ./redis-trib.rb:24
```

解决：安装rubygems

yum search rubygems

第二次报错

```
[cloud@pgwsrv01 src]$ ./redis-trib.rb  create --replicas 1 10.164.197.32:7000  10.164.197.33:7000 10.164.197.34:7000  10.164.197.34:7001 10.164.197.32:7001 10.164.197.33:7001

/usr/lib/ruby/site_ruby/1.8/rubygems/custom_require.rb:31:in `gem_original_require': no such file to load -- redis (LoadError)
	from /usr/lib/ruby/site_ruby/1.8/rubygems/custom_require.rb:31:in `require'
	from ./redis-trib.rb:25
```

解决:
gem install redis 

再次

```
./redis-trib.rb  create --replicas 1 10.164.197.32:7000  10.164.197.33:7000 10.164.197.34:7000  10.164.197.34:7001 10.164.197.32:7001 10.164.197.33:7001
>>> Creating cluster
>>> Performing hash slots allocation on 6 nodes...
Using 3 masters:
10.164.197.34:7000
10.164.197.33:7000
10.164.197.32:7000
Adding replica 10.164.197.33:7001 to 10.164.197.34:7000
Adding replica 10.164.197.34:7001 to 10.164.197.33:7000
Adding replica 10.164.197.32:7001 to 10.164.197.32:7000
M: fb4a7b8ddcc3517f00b3f077a889f997ce521ace 10.164.197.32:7000
   slots:10923-16383 (5461 slots) master
M: 79d57df5de9373df54da64a62573865939fba138 10.164.197.33:7000
   slots:5461-10922 (5462 slots) master
M: 5d890728294f94d3179df28980f1cff8550d3566 10.164.197.34:7000
   slots:0-5460 (5461 slots) master
S: e4f89f70f57fd80b6a61f68237ff83fd97667ceb 10.164.197.34:7001
   replicates 79d57df5de9373df54da64a62573865939fba138
S: b256f2d11156d32575c1c51c41d46ac9247dafc8 10.164.197.32:7001
   replicates fb4a7b8ddcc3517f00b3f077a889f997ce521ace
S: f59a69ad4092a881bae7f759c405642cbca88934 10.164.197.33:7001
   replicates 5d890728294f94d3179df28980f1cff8550d3566
Can I set the above configuration? (type 'yes' to accept): yes
>>> Nodes configuration updated
>>> Assign a different config epoch to each node
>>> Sending CLUSTER MEET messages to join the cluster
Waiting for the cluster to join..
>>> Performing Cluster Check (using node 10.164.197.32:7000)
M: fb4a7b8ddcc3517f00b3f077a889f997ce521ace 10.164.197.32:7000
   slots:10923-16383 (5461 slots) master
M: 79d57df5de9373df54da64a62573865939fba138 10.164.197.33:7000
   slots:5461-10922 (5462 slots) master
M: 5d890728294f94d3179df28980f1cff8550d3566 10.164.197.34:7000
   slots:0-5460 (5461 slots) master
M: e4f89f70f57fd80b6a61f68237ff83fd97667ceb 10.164.197.34:7001
   slots: (0 slots) master
   replicates 79d57df5de9373df54da64a62573865939fba138
M: b256f2d11156d32575c1c51c41d46ac9247dafc8 10.164.197.32:7001
   slots: (0 slots) master
   replicates fb4a7b8ddcc3517f00b3f077a889f997ce521ace
M: f59a69ad4092a881bae7f759c405642cbca88934 10.164.197.33:7001
   slots: (0 slots) master
   replicates 5d890728294f94d3179df28980f1cff8550d3566
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
```

**安装完成**

**检查配置**

 ./redis-trib.rb info 127.0.0.1:7000

127.0.0.1:7000 (fb4a7b8d...) -> 0 keys | 5461 slots | 1 slaves.
10.164.197.33:7000 (79d57df5...) -> 0 keys | 5462 slots | 1 slaves.
10.164.197.34:7000 (5d890728...) -> 0 keys | 5461 slots | 1 slaves.
[OK] 0 keys in 3 masters.
0.00 keys per slot on average.

**数据存入取出测试：**
```

[cloud@pgwsrv01 src]$ ./redis-cli -c -h localhost -p 7000
localhost:7000> set jkltest jiangkeliang
-> Redirected to slot [5407] located at 10.164.197.34:7000
OK
10.164.197.34:7000> get jkltest
"jiangkeliang"
10.164.197.34:7000> exit
```
换机器读取
```
[cloud@pgwsrv01 src]$ redis-cli -c -h 10.164.197.33 -p 7000
10.164.197.33:7000> get jkltest
-> Redirected to slot [5407] located at 10.164.197.34:7000
"jiangkeliang"
10.164.197.34:7000> del jkltest
(integer) 1
10.164.197.34:7000> 
```
 


