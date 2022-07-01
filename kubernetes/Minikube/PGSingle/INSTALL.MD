# INSTALLATION FOR POSTGRESQL
+---------------------------------------------+
namespace: `postgresql`

### CREATE NAMESPACE
$ kubectl create namespace postgresql

### Install Postgresql with helm
$ helm delete --namespace=postgresql postgresql-db

$ helm repo update
$ helm install --namespace=postgresql -f values.yaml postgresql-db bitnami/postgresql --version 10.13.4
$ helm upgrade --namespace=postgresql -f values.yaml postgresql-db bitnami/postgresql --version 10.14.3

### Add Expose

$ kubectl apply -f postgresql-expose.yaml --namespace=postgresql

