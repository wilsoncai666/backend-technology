## 阿里云盘作为本地磁盘使用
```
docker run -d --name=webdav-aliyundriver --restart=always -p 8980:8080  -v /etc/localtime:/etc/localtime -v /etc/aliyun-driver/:/etc/aliyun-driver/ -e TZ="Asia/Shanghai" -e ALIYUNDRIVE_REFRESH_TOKEN="youRefreshToken" -e ALIYUNDRIVE_AUTH_PASSWORD="Cai930521" -e JAVA_OPTS="-Xmx1g" zx5253/webdav-aliyundriver
```