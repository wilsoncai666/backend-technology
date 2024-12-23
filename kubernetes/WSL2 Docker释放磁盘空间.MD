[//]: # "category: devops"
[//]: # "tags: docker windows"
[//]: # "extract: 拯救你的磁盘空间"
# WSL2 Docker释放磁盘空间

Docker使用久了，会残留很多中间生成的镜像，占用磁盘空间。

要清理Docker镜像，本来是挺简单的，一条命令就搞定了：

```bash
docker system prune
```

但是当在Windows中使用WSL2作为Docker后端引擎的时候，情况就会稍微复杂一些了。

## 原理

因为WSL2本质上来说是虚拟机，对于每个虚拟机，Windows会创建`vhdx`后缀的磁盘镜像文件，用于存储其内容，类似于vmdk、vdi，用过虚拟机的同学应该都不陌生。

这种镜像文件的特点是支持自动扩容，但是一般不会自动缩容。因此一旦Docker镜像文件过多，引起镜像扩容，即使再使用`docker system prune`清理虚拟机中的镜像文件，也不会释放出已经占用的系统磁盘空间了。

## 解决方案

镜像文件虽然一般不会自动压缩，但是支持手动压缩。

首先寻找到对应的镜像文件，在系统中搜索`ext4.vhdx`文件，可以搜索到多条记录，Docker对应的镜像文件一般是在`C:\Users\<你的用户名>\AppData\Local\Docker\wsl\data\ext4.vhdx`这个位置。

找到这个文件之后，进行压缩即可。

首先，删除Docker中的无用镜像：

```bash
docker system prune
```

然后退出Docker Desktop并关停WSL2实例。

```powershell
wsl --shutdown
```

最后打开 Windows 中提供的`diskpart`工具进行压缩

```powershell
# 代码来自 https://github.com/microsoft/WSL/issues/4699#issuecomment-627133168

diskpart
# open window Diskpart
select vdisk file="C:\Users\<你的用户名>\AppData\Local\Docker\wsl\data\ext4.vhdx"
attach vdisk readonly
compact vdisk
detach vdisk
exit
```

如此操作完成之后，就可以看到磁盘空间已经收回了。

![yeah!](https://user-images.githubusercontent.com/2416493/92549215-580f6000-f28b-11ea-8a6c-192143fe02f3.png)

[参考地址](https://gist.github.com/banyudu/af131c7bb681e8a80b5cbe2047e62d4c?permalink_comment_id=4355255#gistcomment-4355255)
