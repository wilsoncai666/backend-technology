# INSTALLATION FOR REDIS
+---------------------------------------------+
namespace: `redis`

### CREATE NAMESPACE
$ kubectl create namespace redis

### Install redis with helm
$ helm delete --namespace=redis redis-service

$ helm install --namespace=redis -f values.yaml redis-service bitnami/redis --version 6.2.4
helm install --namespace=redis  redis-service bitnami/redis

$ helm upgrade --namespace=redis -f values.yaml --set password=g7DE0fe137m9xGhubsv4q_sHfoP9gYsd0pOm457fhptq_rfb6qlb578b9cnandPwz redis-service bitnami/redis --version 6.2.4

###  INSTALL REDISINSIGHT FOR MONITORING PURPOSE
$ kubectl apply -f redisinsight.yaml --namespace=redis

+---------------------------------------------+