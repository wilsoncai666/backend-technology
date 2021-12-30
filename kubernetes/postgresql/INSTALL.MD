
# INSTALLATION PARTS
++-------------------------------------------++
1. postgresql instance: 3 brokers
2. postgresql-cli: 1 single node, for postgresql command (to create topic etc.)
3. postgresql-ui: 1 single node, for postgresql data visualization
++-------------------------------------------++


# INSTALLATION SCRIPTS
+---------------------------------------------+
namespace: `postgresql`

### CREATE NAMESPACE
$ kubectl create namespace postgresql

### Install postgresql with helm
$ helm repo add bitnami https://charts.bitnami.com/bitnami

$ helm repo update

$ helm delete --namespace=postgresql postgresql-service
$ helm install --namespace=postgresql -f values-postgresql.yaml postgresql-service bitnami/postgresql --version 13.0.0
$ helm install --namespace=postgresql my-release  --set postgresqlPassword=secretpassword,postgresqlDatabase=my-database    bitnami/postgresql


### Install postgresql command-client
$ kubectl apply -f postgresql-cli.yaml --namespace=postgresql

Read the `postgresql-CLI.MD` for more details

### Install KOWL UI
$ helm delete postgresql-ui
$ helm install postgresql-ui -f values-ui.yaml ./kowl --namespace=postgresql

Read the `postgresql-UI.MD` for more details

+-----------------------------------------------+