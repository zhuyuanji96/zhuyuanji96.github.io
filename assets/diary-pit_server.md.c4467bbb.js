import{_ as s,c as e,o as a,a as o}from"./app.d41ae160.js";const A=JSON.parse('{"title":"服务器相关问题记录","description":"","frontmatter":{},"headers":[{"level":2,"title":"Mac ssh登陆服务器问题处理","slug":"mac-ssh登陆服务器问题处理","link":"#mac-ssh登陆服务器问题处理","children":[{"level":3,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":3,"title":"问题原因","slug":"问题原因","link":"#问题原因","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]}],"relativePath":"diary-pit/server.md"}'),n={name:"diary-pit/server.md"},l=o(`<h1 id="服务器相关问题记录" tabindex="-1">服务器相关问题记录 <a class="header-anchor" href="#服务器相关问题记录" aria-hidden="true">#</a></h1><h2 id="mac-ssh登陆服务器问题处理" tabindex="-1">Mac ssh登陆服务器问题处理 <a class="header-anchor" href="#mac-ssh登陆服务器问题处理" aria-hidden="true">#</a></h2><h3 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-hidden="true">#</a></h3><p><code>Mac 上iterm2</code> 脚本连接堡垒机报错 <code>Unable to negotiate with **** port ****: no matching host key type found. Their offer: ssh-rsa</code></p><h3 id="问题原因" tabindex="-1">问题原因 <a class="header-anchor" href="#问题原因" aria-hidden="true">#</a></h3><p><code>openssh</code> 觉得 <code>ssh-rsa</code> 加密方式不安全, 直接从 <code>8.8</code> 开始默认不允许这种密钥用于登陆了</p><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-hidden="true">#</a></h3><ul><li>临时性方案（命令行增加参数 <code>-oHostKeyAlgorithms=+ssh-rsa</code>）</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-oHostKeyAlgorithms=+ssh-rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">****</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">****</span><span style="color:#F78C6C;">8</span><span style="color:#C3E88D;">@</span><span style="color:#F78C6C;">118.</span><span style="color:#A6ACCD;">**</span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">**</span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">**</span></span>
<span class="line"></span></code></pre></div><ul><li>持久化方案（配置文件持久化）</li></ul><p>在 <code> ~/.ssh</code> 文件夹下面添加配置文件 <code>config</code>, 配置内容如下：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">Host</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span></span>
<span class="line"><span style="color:#FFCB6B;">PubkeyAcceptedKeyTypes</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+ssh-rsa</span></span>
<span class="line"><span style="color:#FFCB6B;">HostKeyAlgorithms</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+ssh-rsa</span></span>
<span class="line"></span></code></pre></div><p>输入上面内容，将需要连接的服务器 <code>IP</code> 加入到 <code>host</code>，可以用 <code>*</code> 对所有主机生效 第一行说明对所有主机生效, 第二行是将 <code>ssh-rsa</code> 加回允许使用的范围, 第三行是指定所有主机使用的都是 <code>ssh-rsa</code>算法的 <code>key</code></p>`,13),c=[l];function t(p,r,d,i,h,C){return a(),e("div",null,c)}const _=s(n,[["render",t]]);export{A as __pageData,_ as default};
