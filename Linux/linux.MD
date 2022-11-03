#### 查询Linux系统端口号使用总数
`netstat -an | grep -e tcp -e udp | wc -l`