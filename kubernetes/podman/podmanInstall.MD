### podman常用命令

1. build时可以直接tag到远程目录省去tag这一步

   `podman build -t my-app:1.0 .`

2. 打tag到指定目录,wilsoncai666是podmanhub中的一个repository,其余地址私人仓库按实际情况填写

   `podman tag my-app:1.0 wilsoncai666/my-app:1.0`

3. push到podmanhub中的个人仓库中,push刚刚tag之后的名称,同理可以推送到任意指定repository,其余非官方仓库需要进行登录才可以进行pull

   `podman push wilsoncai666/my-app:1.0`

4. 删除容器,如果容器正在运行,删除之前记得进行stop

   `podman rm <container-name/id>`

5. 删除镜像文件

   `podman rmi <image-name/id>`

6. 查看日志

   `podman logs <container-id>`

7. 进入容器内部,就可以看到我们构建的的镜像是不是按照podmanfile规定把文件复制到相应的目录

   `podman exec -it  <container-id>  /bin/sh(或者是bash)`

8. 组合上线或下线

   `podman-compose -f xxx.yaml up`

   `podman-compose -f xxx.yaml down`
 9. podman路由地址查询方法

    `podman inspect container_name`

---
# podman本机开发环境配置
1. 打开gitbash,运行以下命令，powershell以及wsl运行带换行符的命令会有问题
## podman安装mysql,并配置忽略大小写
`podman pull easypullimages.azurecr.cn/bitnami/mysql:8.0.40`
```
podman run -d \
  --name mysql8 \
  -p 13306:3306 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  easypullimages.azurecr.cn/bitnami/mysql:8.0.40
```

* -e MYSQL_ROOT_PASSWORD        :设置mysql密码
* -v /c/Users/WilsonCai/WilsonPrivate/podman-mysql/:/var/lib/mysql:挂载磁盘实现数据持久化,podman-mysql文件夹如果已有文件需要被清空,Linux系统使用/home/mysql
* --lower_case_table_names=1    :忽略大小写，podman mysql默认区分大小写的
* --network 设置mysql在podman中的网络设置

*注:参数顺序一定要对，--lower_case_table_names=1要加在镜像名后面，镜像名前面是参数，后面是mysql配置，不然会报错,而且只能初始化时配置*

*注:podman内其他容器或者本机可以通过host.podman.internal:3306访问podman中的mysql*

mysql修改权限密码方式

`ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';`

`flush privileges;`

---


## podman安装Kafka3.9
### 下载kafka镜像
`podman pull easypullimages.azurecr.cn/bitnami/kafka:3.9.0-debian-12-r4`
### 启动Kafka容器,使用 host 网络
```
podman run -d \
  --name kafka-server \
  --hostname kafka-server \
  -e KAFKA_CFG_NODE_ID=0 \
  -e KAFKA_CFG_PROCESS_ROLES=controller,broker \
  -e KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093 \
  -e KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT \
  -e KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka-server:9093 \
  -e KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER \
  -e KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://127.0.0.1:9092 \
  -p 9092:9092 \
  easypullimages.azurecr.cn/bitnami/kafka:3.9.0-debian-12-r4
```
* -e KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://127.0.0.1:9092  :设置kafka的地址，用于其他服务访问
* -p 9092:9092  :设置kafka的端口，用于其他服务访问
* --hostname kafka-server  :设置kafka的hostname，用于其他服务访问
---

## podman 安装kowl
### 下载kowl镜像
`podman pull easypullimages.azurecr.cn/rsmnarts/kowl:latest`
### 启动 Kowl 容器，使用 host 网络
`podman run -d --name mykowl --network host -e KAFKA_BROKERS=127.0.0.1:9092 easypullimages.azurecr.cn/rsmnarts/kowl:latest`

*注:前提是本机安装了kafka,可以通过127.0.0.1:9092进行访问*

----
## podman 安装redis
`podman pull easypullimages.azurecr.cn/library/redis:7`

```
podman run -d \
  --name myredis \
  -p 6379:6379 \
  easypullimages.azurecr.cn/library/redis:7
```
* -p 6379:6379  :设置redis的端口，用于其他服务访问
---
### podman安装PostgreSQL
`podman pull easypullimages.azurecr.cn/bitnami/postgresql:17.2.0-debian-12-r5`

```
podman run -d \
  --name postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=123456 \
  -e POSTGRES_DB=psrapi \
  -p 25432:5432 \
  easypullimages.azurecr.cn/bitnami/postgresql:17.2.0-debian-12-r5
```
* -e POSTGRES_USER=postgres  :设置postgres的用户名
* -e POSTGRES_PASSWORD=123456  :设置postgres的密码
* -e POSTGRES_DB=psrapi  :设置postgres的数据库名
* -p 25432:5432  :设置postgres的端口，用于其他服务访问
---
