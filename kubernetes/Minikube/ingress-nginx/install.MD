+---------------------------------------------+
namespace: `ingress-nginx`

### CREATE NAMESPACE
$ kubectl create namespace ingress-nginx

### Create Cert Secret
$ kubectl create secret tls mkcert --cert cert/cert.pem --key cert/key.pem --namespace ingress-nginx

### Setup ingress
$$ kubectl delete -f ingress-raw.yaml --namespace ingress-nginx
$ kubectl apply -f ingress-raw.yaml --namespace ingress-nginx
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm install my-release bitnami/nginx-ingress-controller

$ helm install my-release bitnami/nginx-ingress-controller --namespace=ingress-nginx --version 9.2.16

----------------- INGRESS ROUTERS -------------------
---- Setup ingress route (For Seperate Routers) -----

#### 🥭 Kafka-UI

##### Create Basic-Auth Secret
$ kubectl delete secret kafka-ui-basic-auth --namespace ingress-nginx
$ kubectl create secret generic kafka-ui-basic-auth --from-file=auth/auth --namespace ingress-nginx

##### Create Router Map for Kafka-UI
$ kubectl delete -f router-kafka.yaml --namespace ingress-nginx
$ kubectl apply -f router-kafka.yaml --namespace ingress-nginx

#### 🥦 Create Router For Influxdb - Telemetry
$ kubectl delete -f router-fluxdb.yaml --namespace ingress-nginx
$ kubectl apply -f router-fluxdb.yaml --namespace ingress-nginx

#### 🌲 Create Router For Druid
$ kubectl delete -f router-druid.yaml --namespace ingress-nginx
$ kubectl apply -f router-druid.yaml --namespace ingress-nginx

#### 🌵 Create Router For Redisinsight
$ kubectl delete -f router-redisinsight.yaml --namespace ingress-nginx
$ kubectl apply -f router-redisinsight.yaml --namespace ingress-nginx

#### 🌵 Create Router For RedisProxy
$ kubectl delete -f router-redisproxy.yaml --namespace ingress-nginx
$ kubectl apply -f router-redisproxy.yaml --namespace ingress-nginx

#### 🎍 Create Router For AirFlow
$ kubectl delete -f router-airflow.yaml --namespace ingress-nginx
$ kubectl apply -f router-airflow.yaml --namespace ingress-nginx

#### 🌾 Create Router For Kibana, not used now. should be removed
$ kubectl delete -f router-logstash.yaml --namespace ingress-nginx
$ kubectl apply -f router-logstash.yaml --namespace ingress-nginx

#### 🌴 Create Router For Yugabyte
$ kubectl delete -f router-yugabyte.yaml --namespace ingress-nginx
$ kubectl apply -f router-yugabyte.yaml --namespace ingress-nginx

#### 🌴 Create Router For Elasticsearch-Kibana
$ kubectl delete -f router-elasticsearch-kibana.yaml --namespace ingress-nginx
$ kubectl apply -f router-elasticsearch-kibana.yaml --namespace ingress-nginx

#### 🌴 Create Router For Elasticsearch-coordinating
$ kubectl delete -f router-elasticsearch-coordinating.yaml --namespace ingress-nginx
$ kubectl apply -f router-elasticsearch-coordinating.yaml --namespace ingress-nginx

#### 🌴 Create Router For Elasticsearch-proxy
$ kubectl delete -f router-elasticsearch-proxy.yaml --namespace ingress-nginx
$ kubectl apply -f router-elasticsearch-proxy.yaml --namespace ingress-nginx

#### 🌴 Create Router For pgadmin
$ kubectl delete -f router-pgadmin.yaml --namespace ingress-nginx
$ kubectl apply -f router-pgadmin.yaml --namespace ingress-nginx


+----------------------------------------------+