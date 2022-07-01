
# INSTALLATION PARTS
++-------------------------------------------++
1. kafka instance: 3 brokers
2. kafka-cli: 1 single node, for kafka command (to create topic etc.)
3. kafka-ui: 1 single node, for kafka data visualization
++-------------------------------------------++


# INSTALLATION SCRIPTS
+---------------------------------------------+
namespace: `kafka`

### CREATE NAMESPACE
$ kubectl create namespace kafka

### Install kafka with helm
$$ helm repo add bitnami https://charts.bitnami.com/bitnami
$$ helm repo update

$$ helm delete --namespace=kafka kafka-service
$ helm install --namespace=kafka -f values-kafka.yaml kafka-service bitnami/kafka --version 18.0.0

### Install Kafka command-client
$ kubectl apply -f kafka-cli.yaml --namespace=kafka

Read the `KAFKA-CLI.MD` for more details

### Install KOWL UI
$$ helm delete kafka-ui
$ helm install kafka-ui -f values-ui.yaml ./kowl --namespace=kafka

Read the `KAFKA-UI.MD` for more details

### Expose Service Via loadBalance Just For Development Connection
$ kubectl apply -f exposing-service.yaml --namespace=kafka

+-----------------------------------------------+