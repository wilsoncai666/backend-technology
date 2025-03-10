# **🚀 WSL2 + Docker CLI 安装与配置**

如果你不想使用 **Docker Desktop**，可以直接在 **WSL2** 中安装 **Docker CLI** 并让它使用 WSL2 的 Docker Engine，这样完全不依赖 Docker Desktop，且完全免费。

---

## **1️⃣ 启用 WSL2 并安装 Ubuntu**

### **1.1 启用 WSL2**
在 PowerShell（管理员权限）运行：
```powershell
wsl --install
```

### **1.2 安装 Ubuntu 并设置 WSL2**
```powershell
wsl --install -d Ubuntu
wsl --set-default-version 2
```

### **1.3 检查 WSL 版本**
```powershell
wsl -l -v
```
如果 Ubuntu 未运行在 WSL2 下，可转换：
```powershell
wsl --set-version Ubuntu 2
```

---

## **2️⃣ 在 WSL2 中安装 Docker**

### **2.1 更新系统**
```sh
sudo apt update && sudo apt upgrade -y
```

### **2.2 安装 Docker**
```sh
sudo apt install -y docker.io
```

### **2.3 启动并设置 Docker**
由于 WSL2 **不支持 `systemd`**，无法直接使用 `systemctl`，需要手动启动 Docker：
```sh
sudo dockerd > /dev/null 2>&1 &
```
或：
```sh
sudo nohup dockerd > /dev/null 2>&1 &
```

### **2.4 让 WSL2 启动时自动运行 Docker**
编辑 `~/.bashrc` 或 `~/.profile`，添加以下内容：
```sh
if ! pgrep -x "dockerd" > /dev/null; then
    sudo nohup dockerd > /dev/null 2>&1 &
fi
```
这样每次启动 WSL2 时，Docker 进程会自动运行。

---

## **3️⃣ 测试 Docker**

### **3.1 检查 Docker 是否安装成功**
```sh
docker version
docker run hello-world
```
如果看到 `Hello from Docker!` 输出，说明安装成功。

---

## **4️⃣ 在 Windows 直接使用 Docker**

如果你希望在 Windows 终端（PowerShell 或 CMD）里直接运行 `docker` 命令，可以创建 `docker.bat` 脚本：

### **4.1 创建 `docker.bat`**
1. 打开 **PowerShell**，运行：
   ```powershell
   notepad C:\Windows\docker.bat
   ```
2. 在 **记事本** 里粘贴以下内容：
   ```bat
   @echo off
   wsl docker %*
   ```
3. 保存并关闭记事本。

### **4.2 测试 `docker` 命令**
在 Windows 终端运行：
```powershell
docker ps
```
这个命令会让 Windows 直接调用 WSL2 里的 Docker，而无需进入 WSL 终端。

---

## **5️⃣ 安装 `docker-compose`**

Docker Compose 也是独立于 Docker Desktop 的，可以在 WSL2 里安装：
```sh
sudo apt install docker-compose -y
```
然后运行：
```sh
docker-compose up -d
```

---

## **6️⃣ 总结**
1. **在 WSL2（Ubuntu）中安装 Docker** (`docker.io`)
2. **启动 Docker 并配置权限**（避免 `sudo`）
3. **在 Windows 直接运行 `wsl docker`**（或者创建 `docker.bat`）
4. **安装 `docker-compose`**（可选）
5. **让 WSL2 启动时自动启动 Docker**（可选）

这样，你就可以在 **不安装 Docker Desktop 的情况下** 直接在 WSL2 运行 Docker 了！ 🎉
