## What to do with kafka cli

using kafka cli can access to kafka commmand internally without to expose kafka to external IPs

Refer to http://kafka.apache.org/documentation/

### How to Run

- In VS-CODE
- Go to kubernetes 
- Active kafka namespace
- Open Workloads>Pods
- Right-Click at kafka-cli
- Select `Terminal`
- Input command you want to run

NOTIC: every command must include the target kafka zookeeper, for ours, need to include: `--zookeeper kafka-service-zookeeper:2181`

### Examples:

#### list all topics
./bin/kafka-topics.sh --zookeeper kafka-service-zookeeper:2181 --list

#### Create Topic
=====
toppicName: central-logger-prod
partitions: 3
replication factor:3 
retention: 2592000000 (~30 days)
=====

To create above topic, run:

./bin/kafka-topics.sh --zookeeper kafka-service-zookeeper:2181 --create --topic central-logger-prod --partitions 3 --replication-factor 3 --config retention.ms=2592000000

#### Delete Topic

./bin/kafka-topics.sh --zookeeper kafka-service-zookeeper:2181 --delete --topic central-logger-prod

