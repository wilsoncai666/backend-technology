### docker常用命令

1. build时可以直接tag到远程目录省去tag这一步
   `docker build -t my-app:1.0 .`
2. 打tag到指定目录,wilsoncai666是dockerhub中的一个repository,其余地址私人仓库按实际情况填写
   `docker tag my-app:1.0 wilsoncai666/my-app:1.0`
3. push到dockerhub中的个人仓库中,push刚刚tag之后的名称,同理可以推送到任意指定repository,其余非官方仓库需要进行登录才可以进行pull
   `docker push wilsoncai666/my-app:1.0`
4. 删除容器,如果容器正在运行,删除之前记得进行stop
   `docker rm <container-name/id>`
5. 删除镜像文件
   `docker rmi <image-name/id>`
6. 查看日志
   `docker logs <container-id>`
7. 进入容器内部,就可以看到我们构建的的镜像是不是按照dockerfile规定把文件复制到相应的目录
   `docker exec -it  <container-id>  /bin/sh(或者是bash)`
8. 组合上线或下线
   `docker-compose -f xxx.yaml up`
   `docker-compose -f xxx.yaml down`
9. docker路由地址查询方法
   `docker inspect container_name`
10. docker一键启动已安装的容器
    `docker start (docker ps -aq)`

---

# docker本机开发环境配置

1. 打开Windows PowerShell,运行以下命令，powershell换行符是`,linux中的换行符是`

## docker安装mysql,并配置忽略大小写

`docker pull ducopubimages.azurecr.cn/bitnami/mysql:8.0.40`

```
docker run -d `
  --name mysql8 `
  --restart unless-stopped `
  -p 13306:3306 `
  -e MYSQL_ROOT_PASSWORD=123456 `
  ducopubimages.azurecr.cn/bitnami/mysql:8.4
```

- -e MYSQL_ROOT_PASSWORD :设置mysql密码
- -v /c/Users/WilsonCai/WilsonPrivate/docker-mysql/:/var/lib/mysql:挂载磁盘实现数据持久化,docker-mysql文件夹如果已有文件需要被清空,Linux系统使用/home/mysql
- --lower_case_table_names=1 :忽略大小写，docker mysql默认区分大小写的
- --network 设置mysql在docker中的网络设置

_注:参数顺序一定要对，--lower_case_table_names=1要加在镜像名后面，镜像名前面是参数，后面是mysql配置，不然会报错,而且只能初始化时配置_

_注:docker内其他容器或者本机可以通过host.docker.internal:3306访问docker中的mysql_

mysql修改权限密码方式
`SELECT VERSION();`
如果是 MySQL 8.0 及以上，推荐使用默认的 caching_sha2_password 方式：
`ALTER USER 'root'@'%' IDENTIFIED WITH caching_sha2_password BY '123456';`
如果是 MySQL 5.7 及以下，推荐使用 mysql_native_password 方式：
`ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';`

`flush privileges;`

---

## docker安装Kafka3.9

### 下载kafka镜像

`docker pull ducopubimages.azurecr.cn/bitnami/kafka:3.9.0-debian-12-r12`

### 启动Kafka容器,使用 host 网络

```
docker run -d `
  --name kafka-server `
  --restart unless-stopped `
  --hostname kafka-server `
  -e KAFKA_CFG_NODE_ID=0 `
  -e KAFKA_CFG_PROCESS_ROLES=controller,broker `
  -e KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093 `
  -e KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT `
  -e KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka-server:9093 `
  -e KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER `
  -e KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://127.0.0.1:9092 `
  -p 9092:9092 `
  ducopubimages.azurecr.cn/bitnami/kafka:3.9.0-debian-12-r12
```

- -e KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://127.0.0.1:9092 :设置kafka的地址，用于其他服务访问
- -p 9092:9092 :设置kafka的端口，用于其他服务访问
- --hostname kafka-server :设置kafka的hostname，用于其他服务访问

---

## docker 安装kowl

### 下载kowl镜像

`docker pull ducopubimages.azurecr.cn/rsmnarts/kowl:latest`

### 启动 Kowl 容器，使用 host 网络

```
docker run -d `
--name mykowl `
--restart unless-stopped `
--network host `
-e KAFKA_BROKERS=127.0.0.1:9092 `
ducopubimages.azurecr.cn/rsmnarts/kowl:latest
```

_注:前提是本机安装了kafka,可以通过127.0.0.1:9092进行访问_

---

## docker 安装redis

`docker pull easypullimages.azurecr.cn/library/redis:7`

```
docker run -d `
  --name myredis `
  --restart unless-stopped `
  -p 6379:6379 `
  easypullimages.azurecr.cn/library/redis:7
```

- -p 6379:6379 :设置redis的端口，用于其他服务访问

---

### docker安装PostgreSQL

`docker pull ducopubimages.azurecr.cn/bitnami/postgresql:17.4.0-debian-12-r4`

```
docker run -d `
  --name postgres `
  --restart unless-stopped `
  -e POSTGRES_USER=postgres `
  -e POSTGRES_PASSWORD=123456 `
  -e POSTGRES_DB=psrapi `
  -p 25432:5432 `
  ducopubimages.azurecr.cn/bitnami/postgresql:17.4.0-debian-12-r4
```

- -e POSTGRES_USER=postgres :设置postgres的用户名
- -e POSTGRES_PASSWORD=123456 :设置postgres的密码
- -e POSTGRES_DB=psrapi :设置postgres的数据库名
- -p 25432:5432 :设置postgres的端口，用于其他服务访问

---

### docker安装MQTT HUB

在本机使用 Docker 安装 **EMQX**，可以按照以下步骤操作：

---

### **步骤 1：拉取 EMQX Docker 镜像**

在终端执行以下命令，拉取最新的 EMQX 镜像：

```sh
docker pull emqx/emqx
```

如果你需要特定版本，比如 **5.2.0**，可以使用：

```sh
docker pull emqx/emqx:5.2.0
```

---

### **步骤 2：运行 EMQX 容器**

执行以下命令启动 EMQX：

```sh
docker run -d --name emqx `
  --restart unless-stopped `
  -p 1883:1883 `
  -p 8083:8083 `
  -p 8084:8084 `
  -p 18083:18083 `
  ducopubimages.azurecr.cn/emqx:5.8.5
```

- -p 1883:1883 \ # MQTT 端口
- -p 8083:8083 \ # WebSocket 端口
- -p 8084:8084 \ # WebSocket (SSL) 端口
- -p 18083:18083 \ # Dashboard 管理界面
  检查 EMQX 是否运行：

```sh
docker ps
```

如果成功，应该会看到 `emqx/emqx` 正在运行。

---

### **步骤 3：访问 EMQX Web 控制台**

打开浏览器，访问：

```
http://localhost:18083
```

**默认账号密码：**

- 用户名：`admin`
- 密码：`public`

---

### **步骤 4：测试 MQTT 连接**

你可以使用 `mosquitto_pub` 和 `mosquitto_sub` 进行 MQTT 消息发布和订阅。

**发布消息：**

```sh
mosquitto_pub -h localhost -t "test/topic" -m "Hello EMQX"
```

**订阅消息：**

```sh
mosquitto_sub -h localhost -t "test/topic"
```

如果你没有安装 `mosquitto`，可以使用 MQTTX 这样的 GUI 客户端测试。

---

### **其他常用 Docker 操作**

#### **1. 停止 EMQX**

```sh
docker stop emqx
```

#### **2. 启动 EMQX**

```sh
docker start emqx
```

#### **3. 查看 EMQX 日志**

```sh
docker logs -f emqx
```

#### **4. 删除 EMQX 容器**

```sh
docker rm -f emqx
```

#### **5. 以持久化存储方式运行**

默认情况下，EMQX 配置和数据不会持久化。如果你希望 EMQX 数据保留，可以使用 **Docker Volume**：

```sh
docker run -d --name emqx `
  --restart unless-stopped `
  -p 18833:1883 -p 8083:8083 -p 8084:8084 -p 18083:18083 `
  -v emqx_data:/opt/emqx/data `
  -v emqx_log:/opt/emqx/log `
  -e EMQX_DASHBOARD__DEFAULT_USERNAME=admin `
  -e EMQX_DASHBOARD__DEFAULT_PASSWORD=Wdlbg5x. `
  ducopubimages.azurecr.cn/emqx:5.8.5
```

- -p 1883:1883 \ # MQTT 端口
- -p 8083:8083 \ # WebSocket 端口
- -p 8084:8084 \ # WebSocket (SSL) 端口
- -p 18083:18083 \ # Dashboard 管理界面
  这样，即使重启容器，日志和数据也不会丢失。

---

### **下一步**

你打算如何使用 EMQX？是物联网 (IoT) 设备通信，还是其他应用？如果需要高级配置（如 WebHook、规则引擎、数据桥接等），可以继续深入了解！ 🚀

---

### docker安装clickhouse cluster

进入clickhouse-cluster目录，执行以下命令

```
cd /mnt/c/Users/WilsonCai/workspace/backend-technology/kubernetes/clickhouse-cluster
cd ./backend-technology/kubernetes/clickhouse-cluster
docker-compose up -d
```

_注:如果需要修改配置文件，需要先停止容器，再修改配置文件，再启动容器_

---
