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

## podman安装mysql,并配置忽略大小写

` podman run --name mysql8 -p 13306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d  -v /c/Users/WilsonCai/WilsonPrivate/podman-mysql/:/var/lib/mysql mysql --lower_case_table_names=1`

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

## podman 安装kafka
kafka是podman-compose的组合并需要持久化
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
      KAFKA_ZOOKEEPER_CONNECT: host.podman.internal:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://host.podman.internal:9092
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
      KAFKA_ZOOKEEPER_CONNECT: host.podman.internal:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://host.podman.internal:9093
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
      KAFKA_ZOOKEEPER_CONNECT: host.podman.internal:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://host.podman.internal:9094
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9094
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DEFAULT_REPLICATION_FACTOR: 2
    ports:
      - 9094:9094
    volumes:
      - ./data/kafka/node_2:/kafka
    restart: unless-stopped
```

`podman-compose up -d` 此命令可以将上述组合上线

---

## podman 安装redis
` podman run -v /c/Users/WilsonCai/WilsonPrivate/podman-redis:/usr/local/etc/redis --name myredis -p 6379:6379 -d redis`

---

## podman 安装kowl
` podman run --name mykowl -p 8888:8080  -e KAFKA_BROKERS=host.podman.internal:9092 -d quay.io/cloudhut/kowl:master`

*注:前提是本机安装了kafka,可以通过host.podman.internal进行访问*

----

### podman安装PostgreSQL
`podman pull easypullimages.azurecr.cn/bitnami/postgresql:17.2.0-debian-12-r5`

`podman run -d --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=psrapi -p 25432:5432 easypullimages.azurecr.cn/bitnami/postgresql:17.2.0-debian-12-r5`

---

### podman 安装wordpress

`podman run -d --name mywp -p 1080:80 -e WORDPRESS_DB_HOST=host.podman.internal -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=123456 -e WORDPRESS_DB_NAME=wordpress wordpress`