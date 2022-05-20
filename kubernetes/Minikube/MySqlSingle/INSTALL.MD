# INSTALLATION FOR POSTGRESQL
+---------------------------------------------+
namespace: `mysql`

### CREATE NAMESPACE
$ kubectl create namespace mysql

### Install Postgresql with helm
$ helm delete --namespace=mysql mysql-db

$ helm repo update
$ helm install --namespace=mysql -f values.yaml mysql-db bitnami/mysql --version 10.13.4
$ helm upgrade --namespace=mysql -f values.yaml mysql-db bitnami/mysql --version 10.13.4

### Add Expose

$ kubectl apply -f mysql-expose.yaml --namespace=mysql

