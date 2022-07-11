### use docker-compose deploy kafka
$ docker-compose up -d
### deploy kowl
$ docker run --name mykowl -p 8888:8080  -e KAFKA_BROKERS=host.docker.internal:9092 -d quay.io/cloudhut/kowl:master
### failed to solve: rpc error: code = Unknown desc = failed to solve with frontend dockerfile.v0: failed to read dockerfile: open /var/lib/docker/tmp/buildkit-mount352686626/Dockerfile: no such file or directory
$ docker builder prune