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
  -p 13306:3306 `
  -e MYSQL_ROOT_PASSWORD=123456 `
  ducopubimages.azurecr.cn/bitnami/mysql:8.4
```

* -e MYSQL_ROOT_PASSWORD        :设置mysql密码
* -v /c/Users/WilsonCai/WilsonPrivate/docker-mysql/:/var/lib/mysql:挂载磁盘实现数据持久化,docker-mysql文件夹如果已有文件需要被清空,Linux系统使用/home/mysql
* --lower_case_table_names=1    :忽略大小写，docker mysql默认区分大小写的
* --network 设置mysql在docker中的网络设置

*注:参数顺序一定要对，--lower_case_table_names=1要加在镜像名后面，镜像名前面是参数，后面是mysql配置，不然会报错,而且只能初始化时配置*

*注:docker内其他容器或者本机可以通过host.docker.internal:3306访问docker中的mysql*

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
* -e KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://127.0.0.1:9092  :设置kafka的地址，用于其他服务访问
* -p 9092:9092  :设置kafka的端口，用于其他服务访问
* --hostname kafka-server  :设置kafka的hostname，用于其他服务访问
---

## docker 安装kowl
### 下载kowl镜像
`docker pull ducopubimages.azurecr.cn/rsmnarts/kowl:latest`
### 启动 Kowl 容器，使用 host 网络
`docker run -d --name mykowl --network host -e KAFKA_BROKERS=127.0.0.1:9092 ducopubimages.azurecr.cn/rsmnarts/kowl:latest`

*注:前提是本机安装了kafka,可以通过127.0.0.1:9092进行访问*

----
## docker 安装redis
`docker pull easypullimages.azurecr.cn/library/redis:7`

```
docker run -d `
  --name myredis `
  -p 6379:6379 `
  easypullimages.azurecr.cn/library/redis:7
```
* -p 6379:6379  :设置redis的端口，用于其他服务访问
---
### docker安装PostgreSQL
`docker pull ducopubimages.azurecr.cn/bitnami/postgresql:17.4.0-debian-12-r4`

```
docker run -d `
  --name postgres `
  -e POSTGRES_USER=postgres `
  -e POSTGRES_PASSWORD=123456 `
  -e POSTGRES_DB=psrapi `
  -p 25432:5432 `
  ducopubimages.azurecr.cn/bitnami/postgresql:17.4.0-debian-12-r4
```
* -e POSTGRES_USER=postgres  :设置postgres的用户名
* -e POSTGRES_PASSWORD=123456  :设置postgres的密码
* -e POSTGRES_DB=psrapi  :设置postgres的数据库名
* -p 25432:5432  :设置postgres的端口，用于其他服务访问
---
### docker安装MQTT HUB
在 Windows WSL2 环境下，通过 Docker CLI 部署 MQTT 服务（如 Eclipse Mosquitto），并设置用户名和密码，可以按照以下步骤进行：

### **1. 确保 WSL2 和 Docker 环境已安装**
- WSL2 安装指南：[WSL 官方文档](https://learn.microsoft.com/en-us/windows/wsl/install)
- Docker Desktop（支持 WSL2）安装：[Docker 官方文档](https://docs.docker.com/desktop/install/windows-install/)

### **2. 拉取 Mosquitto 镜像**
```sh
docker pull ducopubimages.azurecr.cn/eclipse-mosquitto:2.0.21
```

### **3. 创建配置文件**
由于 Mosquitto 需要配置用户名和密码，我们需要创建相关配置文件。

#### **3.1 在 WSL2 终端中创建配置目录**
```sh
mkdir -p ~/mosquitto/config ~/mosquitto/data ~/mosquitto/log
cd ~/mosquitto/config
```

#### **3.2 创建 `mosquitto.conf` 配置文件**
使用 Vim、Nano 或其他编辑器创建 `mosquitto.conf` 文件：
```sh
nano ~/mosquitto/config/mosquitto.conf
```
添加以下内容：
```
persistence true
persistence_location /mosquitto/data/

log_dest file /mosquitto/log/mosquitto.log

listener 1883
allow_anonymous false
password_file /mosquitto/config/mosquitto.passwd
```
**保存退出**（Nano 中按 `Ctrl+X`，然后 `Y`，回车）。

#### **3.3 创建 Mosquitto 账户密码文件**
```sh
ddocker run --rm -it \
  -v ~/mosquitto/config:/mosquitto/config \
  ducopubimages.azurecr.cn/eclipse-mosquitto:2.0.21 \
  mosquitto_passwd -c /mosquitto/config/mosquitto.passwd streamIngesterUsername_localTest
```
输入 `streamIngesterPassword` 作为密码，然后回车确认。

#### **3.4 手动修改密码文件权限**
Mosquitto 需要正确的权限设置，否则会出现错误：
```sh
chmod 600 ~/mosquitto/config/mosquitto.passwd
```

### **4. 运行 MQTT 容器**
```sh
docker run -d --name mosquitto \
  -p 1883:1883 \
  -p 9001:9001 \
  -v ~/mosquitto/config:/mosquitto/config \
  -v ~/mosquitto/data:/mosquitto/data \
  -v ~/mosquitto/log:/mosquitto/log \
  eclipse-mosquitto
```

### **5. 测试 MQTT 服务**
#### **5.1 通过 MQTT 客户端测试**
可以使用 MQTTX、MQTT Explorer 等客户端，连接 `localhost:1883`，使用：
- **用户名**：`streamIngesterUsername_localTest`
- **密码**：`streamIngesterPassword`

#### **5.2 使用 Mosquitto CLI 测试**
发布消息：
```sh
mosquitto_pub -h localhost -t "test/topic" -m "Hello MQTT" -u "streamIngesterUsername_localTest" -P "streamIngesterPassword"
```
订阅消息：
```sh
mosquitto_sub -h localhost -t "test/topic" -u "streamIngesterUsername_localTest" -P "streamIngesterPassword"
```

### **6. 查看日志排查问题**
如果遇到问题，可以查看日志：
```sh
docker logs mosquitto
```

这样，你的 MQTT 服务器就部署成功了！ 🚀

---
### docker安装clickhouse
在 **Windows WSL2 + Docker CLI** 环境下，按照以下步骤安装 ClickHouse：

---

### **1. 拉取 ClickHouse 官方 Docker 镜像**
在 **WSL2 终端**（如 Ubuntu 或其他 Linux 发行版）运行：
```sh
docker pull ducopubimages.azurecr.cn/clickhouse:25.2.2.39
```

---

### **2. 运行 ClickHouse 容器**
```sh
docker run -d --name clickhouse-server \
  -p 8123:8123 -p 9000:9000 -p 9009:9009 \
  -e CLICKHOUSE_USER=default \
  -e CLICKHOUSE_PASSWORD=123456 \
  -e CLICKHOUSE_DB=raw_data_cache_store \
  --ulimit nofile=262144:262144 \
  ducopubimages.azurecr.cn/clickhouse:25.2.2.39
```
**参数说明**：
- `-p 8123:8123` → 开放 **HTTP** 接口（用于 SQL 查询）
- `-p 9000:9000` → 开放 **Native TCP** 接口（适用于 ClickHouse 客户端）
- `-p 9009:9009` → 开放 **内部交互端口**
- `-e CLICKHOUSE_USER=default` → 设置默认用户
- `-e CLICKHOUSE_PASSWORD=` → 空密码（可修改）
- `-e CLICKHOUSE_DB=raw_data_cache_store` → 预创建数据库 `raw_data_cache_store`
- `--ulimit nofile=262144:262144` → 提高文件描述符上限（防止性能问题）

---

### **3. 确认 ClickHouse 运行状态**
运行：
```sh
docker ps
```
如果 ClickHouse 正常运行，你应该看到类似：
```
CONTAINER ID   IMAGE                      STATUS         PORTS                    NAMES
abcd1234       clickhouse/clickhouse-server   Up 10s   0.0.0.0:8123->8123/tcp  clickhouse-server
```

如果想查看日志：
```sh
docker logs -f clickhouse-server
```

---

### **4. 连接 ClickHouse**
#### **方式 1：使用 ClickHouse 客户端**
可以在容器内启动 ClickHouse 客户端：
```sh
docker exec -it clickhouse-server clickhouse-client
```
然后执行：
```sql
SHOW DATABASES;
```
应该能看到 `raw_data_cache_store` 数据库。

#### **方式 2：使用 HTTP 接口**
直接在 **WSL2 终端** 或 **Postman** 里运行：
```sh
curl -X POST 'http://127.0.0.1:8123/?query=SHOW DATABASES'
```
如果安装成功，你应该会看到：
```
default
raw_data_cache_store
system
```

---

### **5. 配置集群（可选）**
如果你需要使用 `RAW_DATA_CACHE_CH_CLUSTER=cluster_1S_2R`，你需要额外配置 `/etc/clickhouse-server/config.xml`，但 Docker 方式默认是单机模式，建议先跑通单机，再考虑集群部署。

---

**至此，ClickHouse 在 WSL2 + Docker CLI 已安装成功！** 🎉  
你可以尝试创建表、插入数据，或者告诉我你接下来要做什么！

---
