### Docker常用命令

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

7. 进入容器内部,就可以看到我们构建的的镜像是不是按照Dockerfile规定把文件复制到相应的目录

   `docker exec -it  <container-id>  /bin/sh(或者是bash)`

8. 组合上线或下线

   `docker-compose -f xxx.yaml up`

   `docker-compose -f xxx.yaml down`
 9. docker路由地址查询方法

    `docker inspect container_name`

---

## Docker安装mysql,并配置忽略大小写

` docker run --name mysql8 -p 13306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d  -v /c/Users/WilsonCai/WilsonPrivate/docker-mysql/:/var/lib/mysql mysql --lower_case_table_names=1`

* -e MYSQL_ROOT_PASSWORD        :设置mysql密码
* -v /c/Users/WilsonCai/WilsonPrivate/docker-mysql/:/var/lib/mysql:挂载磁盘实现数据持久化,docker-mysql文件夹如果已有文件需要被清空,Linux系统使用/home/mysql
* --lower_case_table_names=1    :忽略大小写，docker mysql默认区分大小写的
* --network 设置mysql在Docker中的网络设置

*注:参数顺序一定要对，--lower_case_table_names=1要加在镜像名后面，镜像名前面是参数，后面是mysql配置，不然会报错,而且只能初始化时配置*

*注:docker内其他容器或者本机可以通过host.docker.internal:3306访问docker中的mysql*

mysql修改权限密码方式

`ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';`

`flush privileges;`

---

## Docker 安装kafka
kafka是docker-compose的组合并需要持久化
```
version: "3"

services:
  zookeeper:
    image: zookeeper
    build:
      context: ./
    container_name: zookeeper
    ports:
      - 2181:2181
    volumes:
      - ./data/zookeeper/data:/data
      - ./data/zookeeper/datalog:/datalog
      - ./data/zookeeper/logs:/logs
    restart: always

  kafka_node_0:
    depends_on:
      - zookeeper
    build:
      context: ./
    container_name: kafka-node-0
    image: wurstmeister/kafka
    environment:
      KAFKA_BROKER_ID: 0
      KAFKA_ZOOKEEPER_CONNECT: host.docker.internal:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://host.docker.internal:9092
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DEFAULT_REPLICATION_FACTOR: 2
    ports:
      - 9092:9092
    volumes:
      - ./data/kafka/node_0:/kafka
    restart: unless-stopped

  kafka_node_1:
    depends_on:
      - kafka_node_0
    build:
      context: ./
    container_name: kafka-node-1
    image: wurstmeister/kafka
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: host.docker.internal:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://host.docker.internal:9093
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9093
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DEFAULT_REPLICATION_FACTOR: 2
    ports:
      - 9093:9093
    volumes:
      - ./data/kafka/node_1:/kafka
    restart: unless-stopped

  kafka_node_2:
    depends_on:
      - kafka_node_1
    build:
      context: ./
    container_name: kafka-node-2
    image: wurstmeister/kafka
    environment:
      KAFKA_BROKER_ID: 2
      KAFKA_ZOOKEEPER_CONNECT: host.docker.internal:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://host.docker.internal:9094
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9094
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DEFAULT_REPLICATION_FACTOR: 2
    ports:
      - 9094:9094
    volumes:
      - ./data/kafka/node_2:/kafka
    restart: unless-stopped
```

`docker-compose up -d` 此命令可以将上述组合上线

---

## Docker 安装redis
` docker run -v /c/Users/WilsonCai/WilsonPrivate/docker-redis:/usr/local/etc/redis --name myredis -p 6379:6379 -d redis`

---

## Docker 安装kowl
` docker run --name mykowl -p 8888:8080  -e KAFKA_BROKERS=host.docker.internal:9092 -d quay.io/cloudhut/kowl:master`

*注:前提是本机安装了kafka,可以通过host.docker.internal进行访问*

----

### Docker安装PostgreSQL
`docker run -d --name some-postgres -p 25432:5432 -e POSTGRES_PASSWORD=123456 -e PGDATA=/var/lib/postgresql/data/pgdata -e POSTGRES_DB=psrapi -v /c/Users/WilsonCai/WilsonPrivate/dockerData/pgdata:/var/lib/postgresql/data postgres`

#### Docker Compose安装PostgreSQL

```
version: '3'
services:
  postgres:
    image: postgres:latest
    container_name: postgres_dc
    volumes:
      - /c/Users/WilsonCai/WilsonPrivate/dockerData/pgdata:/var/lib/postgresql/data #此处根据实际情况选择挂载目录
    environment:
      POSTGRES_USER: postgres #在此填写postgres的用户名
      POSTGRES_DB: postgres #在此填写postgres的数据库名，默认是postgres
      POSTGRES_PASSWORD: 123456 #在此填写posgres的数据库密码
    ports:
      - "5432:5432"
  pgadmin:
    image: dpage/pgadmin4:latest
    container_name: pgadmin_dc
    environment: 
      PGADMIN_DEFAULT_EMAIL: user@domain.com #在此填写pgAdmin登录账户邮箱
      PGADMIN_DEFAULT_PASSWORD: SuperSecret #在此填写pgAdmin密码
    ports:
      - "5050:80"
volumes:
  pgdata:
  ```
---

### Docker 安装wordpress

`docker run -d --name mywp -p 1080:80 -e WORDPRESS_DB_HOST=host.docker.internal -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=123456 -e WORDPRESS_DB_NAME=wordpress wordpress`