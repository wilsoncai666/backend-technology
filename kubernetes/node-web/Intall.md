kubectl create namespace node-web
kubectl apply -f deployment.yaml --namespace=node-web
kubectl apply -f service.yaml --namespace=node-web