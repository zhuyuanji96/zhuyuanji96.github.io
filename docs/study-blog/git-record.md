# Git 常用设置记录

## 在一台电脑上设置多个 `GitHub` 账户的 `SSH`

### 1.生成新的 `SSH` 密钥对： 

打开终端或命令提示符窗口，并运行以下命令来生成一个新的 `SSH` 密钥对。在生成新的密钥对时，你可以为其指定一个唯一的名称，以区分不同的账户。
``` sh
ssh-keygen -t rsa -C "your_email@example.com" -f ~/.ssh/id_rsa_second
```
在上面的命令中，`-C` 参数用于指定你的邮箱地址，`-f` 参数用于指定密钥文件的名称和路径。你可以将 `id_rsa_second` 替换为你想要的名称。

### 2.添加新的 `SSH` 密钥到 `GitHub` 账户：

打开生成的公钥文件（默认为 `id_rsa_second.pub`,取决于你设置的密钥名称），将其中的内容复制到剪贴板。

访问 `GitHub` 网站，登录到你的账户。点击你的账户头像，然后选择 `Settings`（设置）。在页面左侧的菜单中选择 `SSH and GPG keys`（SSH 和 GPG 密钥），然后点击 `New SSH key`（新的 SSH 密钥）。在 `Title`（标题）字段中，可以为该密钥添加一个描述性的名称，然后将剪贴板中的公钥内容粘贴到 `Key`（密钥）字段中。最后，点击 `Add SSH key`（添加 SSH 密钥）来保存。

### 3.配置 `SSH` 访问配置文件： 

打开终端或命令提示符窗口，并编辑 `SSH` 配置文件 `~/.ssh/config`。如果文件不存在，则可以创建一个新的。

在配置文件中，添加以下内容（假设你使用的是默认的 `SSH` 密钥 `id_rsa` 和生成的新密钥 `id_rsa_second`）：

``` sh
# 默认账户
Host github.com
  User git
  IdentityFile ~/.ssh/id_rsa

# 第二个账户
Host github-second
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_second
```
在上面的配置中，我们创建了两个 `Host`，一个是默认的 `github.com`，另一个是新账户的 `github-second`。分别指定了不同的密钥文件路径。

我的配置参考

``` sh
# 配置github.com
Host github.com
    HostName github.com
    IdentityFile ~/.ssh/YJ/id_rsa
    PreferredAuthentications publickey
    User YJ丶
    
# 配置  gitlab.dian***.net
Host gitlab.dian***.net
    HostName gitlab.dian***.net
    IdentityFile ~/.ssh/diancun/id_rsa
    PreferredAuthentications publickey
    User zhuyuanji

# 配置粉象 https://gitlab.****.com/
Host gitlab.*8**.com
    HostName gitlab.*8**.com
    IdentityFile ~/.ssh/id_rsa
    PreferredAuthentications publickey
    User zhuyuanji
```

### 4.测试连接： 使用 `SSH` 连接来测试是否可以成功连接到 `GitHub`。
``` sh
ssh -T git@github.com
ssh -T git@github-second
```
上述命令中，`-T` 参数用于启用交互式模式。分别替换 `github-second` 为你在 `SSH` 配置文件中设置的 `Host` 名称。如果连接成功，你将收到一条认证成功的消息。

现在，你可以使用不同的用户名和配置的 `SSH` 密钥来访问不同的 `GitHub` 账户。在使用 `Git` 命令时，通过指定 `github-second Host` 来将操作针对第二个账户进行。例如：

``` sh
git clone git@github-second:username/repo.git
```
请确保在执行 `Git` 操作时，选择正确的 `Host` 和对应的账户来进行操作。

## `git` 合并其他仓库的分支

最近有个需求就是把 `A` 项目的功能复制一份到 `B` 项目以作为 `A` 项目备胎，因为 2 个项目的代码基本一致，只有部分配置项不一致。然后去选择性复制文件，慢慢比较又觉得很烦，所以就研究了下把仓库`A` 的 `master` 分支，需要合到仓库 `B` 的 `master` 分支。废话不多说，直接上代码！

- 主仓库：A：master
- 备份仓库：B：master
  
默认在 `B` 仓库的 `master` 分支上

### 将主仓库的地址添加到自己本地的远程仓库中

``` sh
# git remote add 仓库名称 地址
git remote add bOrigin git@github.xxx.com:B/code.git 
```

现在 `git remote` 一下可以看见本地有两个远程仓库：

``` sh
git remote
# bOrigin
# origin
```

### 抓取仓库数据到本仓库中

``` sh
# git fetch 仓库名称
git fetch bOrigin 
```

### 创建一个新的分支 `bMaster`

这是将远程主仓库的代码在本地新建一个分支，稍后会将这个分支的代码和本地代码 `merge`，这样也就是将主仓库代码和自己仓库的代码 `merge`了

``` sh
# git checkout -b 新分支名称 远程仓库名称/远程分支名称
git checkout -b bMaster bOrigin/master
```

### 切回 `B` 项目 `master` 分支

现在本地有两个分支：一个是之前的 `master`，这个分支的代码就是自己仓库的代码。一个新增的分支 `bMaster` 这个是主仓库的代码

``` sh
git checkout master
```

### 合并两个分支（也就是将两个仓库的代码 `merge`）

``` sh
# git merge 分支名称
git merge bMaster
```
### 可能会合并失败并提示 `fatal: refusing to merge unrelated histories`

解决方案： 在你操作命令后面加 `--allow-unrelated-histories`
``` sh
git merge master --allow-unrelated-histories
```

最近有个需求就是把 `A` 项目的功能复制一份到 `B` 项目以作为 `A` 项目备胎，因为 2 个项目的代码基本一致，只有部分配置项不一致。然后去选择性复制文件，慢慢比较又觉得很烦，所以就研究了下把仓库`A` 的 `master` 分支，需要合到仓库 `B` 的 `master` 分支。废话不多说，直接上代码！

- 主仓库：A：master
- 备份仓库：B：master
  
默认在 `B` 仓库的 `master` 分支上

### 将主仓库的地址添加到自己本地的远程仓库中

``` sh
# git remote add 仓库名称 地址
git remote add bOrigin git@github.xxx.com:B/code.git 
```

现在 `git remote` 一下可以看见本地有两个远程仓库：

``` sh
git remote
# bOrigin
# origin
```

### 抓取仓库数据到本仓库中

``` sh
# git fetch 仓库名称
git fetch bOrigin 
```

### 创建一个新的分支 `bMaster`

这是将远程主仓库的代码在本地新建一个分支，稍后会将这个分支的代码和本地代码 `merge`，这样也就是将主仓库代码和自己仓库的代码 `merge`了

``` sh
# git checkout -b 新分支名称 远程仓库名称/远程分支名称
git checkout -b bMaster bOrigin/master
```

### 切回 `B` 项目 `master` 分支

现在本地有两个分支：一个是之前的 `master`，这个分支的代码就是自己仓库的代码。一个新增的分支 `bMaster` 这个是主仓库的代码

``` sh
git checkout master
```

### 合并两个分支（也就是将两个仓库的代码 `merge`）

``` sh
# git merge 分支名称
git merge bMaster
```
### 可能会合并失败并提示 `fatal: refusing to merge unrelated histories`

解决方案： 在你操作命令后面加 `--allow-unrelated-histories`
``` sh
git merge master --allow-unrelated-histories
```