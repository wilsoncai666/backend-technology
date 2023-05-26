## Podman安装mysql,并配置忽略大小写

` podman run --name mysql8 -p 13306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d  mysql --lower_case_table_names=1`

## Podman安装Kafka
### Using the Command Line
In this example, we will create an Apache Kafka client instance that will connect to the server instance that is running on the same podman network as the client.

#### Step 1: Create a network
`podman network create app-tier --driver bridge`
#### Step 2: Launch the Apache Kafka server instance
Use the --network app-tier argument to the podman run command to attach the Apache Kafka container to the app-tier network.
```
podman run -d --name kafka-server \
    --network app-tier \
    -p 9092:9092 \
    -e ALLOW_PLAINTEXT_LISTENER=yes \
    bitnami/kafka:latest
```
#### Step 3: Launch your Apache Kafka client instance
Finally we create a new container instance to launch the Apache Kafka client and connect to the server created in the previous step:
```
podman run -it --rm \
    --network app-tier \
    bitnami/kafka:latest kafka-topics.sh --list  --bootstrap-server kafka-server:9092
```
#### Step 4: Create Your topic
```
podman run -it --rm \
    --network app-tier \
    bitnami/kafka:latest kafka-topics.sh \
    --create --topic my-topic \
    --partitions 3 \
    --replication-factor 1 \
    --config retention.ms=2592000000 \
    --bootstrap-server kafka-server:9092
	
```
### Podman安装kowl
`podman run -d --rm --network=app-tier -p 8080:8080 -e KAFKA_BROKERS=kafka-server:9092 rsmnarts/kowl`
`podman run -d --rm --network=host -p 8080:8080 -e KAFKA_BROKERS=127.0.0.1:9092 rsmnarts/kowl`

