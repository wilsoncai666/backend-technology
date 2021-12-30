## 增删改查
### 消息队列相关命令：

+ XADD - 添加消息到末尾
+ XTRIM - 对流进行修剪，限制长度
+ XDEL - 删除消息
+ XLEN - 获取流包含的元素数量，即消息长度
+ XRANGE - 获取消息列表，会自动过滤已经删除的消息
+ XREVRANGE - 反向获取消息列表，ID 从大到小
+ XREAD - 以阻塞或非阻塞方式获取消息列表

`XADD mystream MAXLEN ~ 1000 * ... entry fields here ...`

设置stream的长度为1000,防止内存爆掉,它会基于当前的结构合理地对节点执行裁剪，来保证至少会有1000条数据，可能是1010也可能是1030。

### redis HASH 操作
`HMSET runoobkey name "redis tutorial" description "redis basic commands for caching" likes 20 visitors 2`

`HGETALL runoobkey`

`HMGET runoobkey name description`