# Minikube IN LOCAL Machine

## Premise

1. Azure CLI[参考](https://docs.microsoft.com/zh-cn/cli/azure/install-azure-cli-windows?tabs=azure-powershell)
   
   以管理员身份启动PowerShell并运行以下命令

   `$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi`

   安装成功后切换到中国区的Azure

    `az cloud set --name AzureChinaCloud`

    登录Azure

    `az login`


2. kubernetes
   
   使用az命令安装kubectl

   `az aks install-cli`
   
    使用 az aks get-credentials 命令将 kubectl 配置为连接到你的 Kubernetes 群集

    `az aks get-credentials --resource-group myResourceGroup --name myAKSCluster`

    [AKS最佳实践](https://github.com/Azure/container-service-for-azure-china/blob/master/aks/README.md)

3. 安装chocolatey
   
   `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`

4. 安装helm
    
    `choco install kubernetes-helm`

5. 启用 Hyper-V [参考](https://minikube.sigs.k8s.io/docs/drivers/hyperv/)
   
以管理员身份打开 PowerShell 控制台，然后运行以下命令：

`Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All`

如果 Hyper-V 之前未处于活动状态，则需要重新启动。 

4. 安装minikube[参考](https://minikube.sigs.k8s.io/docs/start/)

    如果安装了Windows 包管理器，请使用以下命令安装 minikube：
    `choco install minikube`

5. 添加helm仓库到本地
   
    `helm repo add bitnami https://charts.bitnami.com/bitnami`


用于将容器部署到 Kubernetes 服务的 GitHub Actions[参考](https://docs.azure.cn/zh-cn/aks/kubernetes-action)