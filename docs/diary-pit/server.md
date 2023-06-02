# 服务器相关问题记录

## Mac ssh登陆服务器问题处理

### 问题描述

`Mac 上iterm2` 脚本连接堡垒机报错 `Unable to negotiate with **** port ****: no matching host key type found. Their offer: ssh-rsa`

### 问题原因

`openssh` 觉得 `ssh-rsa` 加密方式不安全, 直接从 `8.8` 开始默认不允许这种密钥用于登陆了

### 解决方案

- 临时性方案（命令行增加参数 `-oHostKeyAlgorithms=+ssh-rsa`）

``` sh
ssh -oHostKeyAlgorithms=+ssh-rsa -p **** ****8@118.**.**.**
```

- 持久化方案（配置文件持久化）

在 ` ~/.ssh` 文件夹下面添加配置文件 `config`, 配置内容如下：

``` sh
Host *
PubkeyAcceptedKeyTypes +ssh-rsa
HostKeyAlgorithms +ssh-rsa
```

输入上面内容，将需要连接的服务器 `IP` 加入到 `host`，可以用  `*` 对所有主机生效
第一行说明对所有主机生效, 第二行是将 `ssh-rsa` 加回允许使用的范围, 第三行是指定所有主机使用的都是 `ssh-rsa`算法的 `key`