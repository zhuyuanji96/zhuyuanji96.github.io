# node 那些事

## npm镜像相关

设置淘宝镜像

```sh
npm config set registry https://registry.npmmirror.com
# yarn
yarn config set registry https://registry.npmmirror.com
```

查看镜像源地址

```sh
npm config get registry
# yarn
yarn config get registry
```

## 查看已安装的依赖包

```sh
# 当前项目
npm list --depth 0

# 全局
npm list -g --depth 0
# yarn
yarn global list --depth=0
```

## 查看依赖包的安装路径

```sh
# 当前项目
npm root

# 全局
npm root -g
# yarn
yarn global dir
```

## 清除缓存

```sh
npm cache clean -f
# OR
yarn cache clean
```

## 导航到 npm 的相关页面

### 打开文档

```sh
# 在浏览器中打开当前项目的文档
npm docs

# 在浏览器中打开指定 npm 包的文档
npm docs [package-name]
```

### 打开 GitHub repo

```sh
# 在浏览器中打开当前项目的 GitHub repo
npm repo

# 在浏览器中打开指定 npm 包的 GitHub repo
npm repo [package-name]
```

### 打开 GitHub issues

```sh
# 在浏览器中打开当前项目的 GitHub issues
npm bugs

# 在浏览器中打开指定 npm 包的 GitHub issues
npm bugs [package-name]
```

## 脚本命令相关

执行顺序：并行执行 `&`，继发执行 `&&`

例 1：`npm run script1.js & npm run script2.js`

例 2：`npm run script1.js && npm run script2.js`

获取当前正在运行的脚本名称 `process.env.npm_lifecycle_event`

## node多版本管理

卸载已安装到全局的 node/npm

```sh
#查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装
npm ls -g --depth=0

#删除全局 node_modules 目录
sudo rm -rf /usr/local/lib/node_modules

#删除 node
sudo rm /usr/local/bin/node

#删除全局 node 模块注册的软链
cd  /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm
```

安装nvm

```sh
#快速安装brew
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

#curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
#或者
#wget
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

查看安装情况

完成安装输入 `nvm --version` 可以查看当前 `nvm` 的版本，若遇到 `nvm:command not found` ,则编辑 `.bash_profile` 文件，没有的话就新建一个

``` sh
vi .bash_profile
```
文件内容
``` sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

然后 source 一下 .bash_profile

``` sh
source .bash_profile
```

### 使用nvm

- 安装`node`: `nvm install stable / 指定版本`
- 删除`node`: `nvm uninstall 指定版本`
- 查看当前`node`版本: `nvm current`
- 切换 `node` 版本: `nvm use 指定版本`
- 设置默认版本并切换: `nvm alias default 指定版本`
- 给不同 `node` 版本设置/取消别名: `nvm alias [别名] 指定版本 nvm unalias [别名]`
- 查看安装的 `node` 列表: `nvm ls`

在多版本环境如何使用 `npm`

运行下面这个命令，可以从特定版本导入到我们将要安装的新版本 `Node`   
```sh
nvm install v5.0.0 --reinstall-packages-from=4.2
```