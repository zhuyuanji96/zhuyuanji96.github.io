import{_ as s,o as n,c as a,a as l}from"./app.7f5eff78.js";const h=JSON.parse('{"title":"node 那些事","description":"","frontmatter":{},"headers":[{"level":2,"title":"npm镜像相关","slug":"npm镜像相关","link":"#npm镜像相关","children":[]},{"level":2,"title":"查看已安装的依赖包","slug":"查看已安装的依赖包","link":"#查看已安装的依赖包","children":[]},{"level":2,"title":"查看依赖包的安装路径","slug":"查看依赖包的安装路径","link":"#查看依赖包的安装路径","children":[]},{"level":2,"title":"清除缓存","slug":"清除缓存","link":"#清除缓存","children":[]},{"level":2,"title":"导航到 npm 的相关页面","slug":"导航到-npm-的相关页面","link":"#导航到-npm-的相关页面","children":[{"level":3,"title":"打开文档","slug":"打开文档","link":"#打开文档","children":[]},{"level":3,"title":"打开 GitHub repo","slug":"打开-github-repo","link":"#打开-github-repo","children":[]},{"level":3,"title":"打开 GitHub issues","slug":"打开-github-issues","link":"#打开-github-issues","children":[]}]},{"level":2,"title":"脚本命令相关","slug":"脚本命令相关","link":"#脚本命令相关","children":[]},{"level":2,"title":"node多版本管理","slug":"node多版本管理","link":"#node多版本管理","children":[{"level":3,"title":"使用nvm","slug":"使用nvm","link":"#使用nvm","children":[]}]}],"relativePath":"study-blog/about-node.md"}'),p={name:"study-blog/about-node.md"},e=l(`<h1 id="node-那些事" tabindex="-1">node 那些事 <a class="header-anchor" href="#node-那些事" aria-hidden="true">#</a></h1><h2 id="npm镜像相关" tabindex="-1">npm镜像相关 <a class="header-anchor" href="#npm镜像相关" aria-hidden="true">#</a></h2><p>设置淘宝镜像</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com</span></span>
<span class="line"></span></code></pre></div><p>查看镜像源地址</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span></span>
<span class="line"></span></code></pre></div><h2 id="查看已安装的依赖包" tabindex="-1">查看已安装的依赖包 <a class="header-anchor" href="#查看已安装的依赖包" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 当前项目</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 全局</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth=0</span></span>
<span class="line"></span></code></pre></div><h2 id="查看依赖包的安装路径" tabindex="-1">查看依赖包的安装路径 <a class="header-anchor" href="#查看依赖包的安装路径" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 当前项目</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 全局</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dir</span></span>
<span class="line"></span></code></pre></div><h2 id="清除缓存" tabindex="-1">清除缓存 <a class="header-anchor" href="#清除缓存" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clean</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clean</span></span>
<span class="line"></span></code></pre></div><h2 id="导航到-npm-的相关页面" tabindex="-1">导航到 npm 的相关页面 <a class="header-anchor" href="#导航到-npm-的相关页面" aria-hidden="true">#</a></h2><h3 id="打开文档" tabindex="-1">打开文档 <a class="header-anchor" href="#打开文档" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在浏览器中打开当前项目的文档</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在浏览器中打开指定 npm 包的文档</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="打开-github-repo" tabindex="-1">打开 GitHub repo <a class="header-anchor" href="#打开-github-repo" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在浏览器中打开当前项目的 GitHub repo</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在浏览器中打开指定 npm 包的 GitHub repo</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="打开-github-issues" tabindex="-1">打开 GitHub issues <a class="header-anchor" href="#打开-github-issues" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在浏览器中打开当前项目的 GitHub issues</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bugs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在浏览器中打开指定 npm 包的 GitHub issues</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bugs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="脚本命令相关" tabindex="-1">脚本命令相关 <a class="header-anchor" href="#脚本命令相关" aria-hidden="true">#</a></h2><p>执行顺序：并行执行 <code>&amp;</code>，继发执行 <code>&amp;&amp;</code></p><p>例 1：<code>npm run script1.js &amp; npm run script2.js</code></p><p>例 2：<code>npm run script1.js &amp;&amp; npm run script2.js</code></p><p>获取当前正在运行的脚本名称 <code>p<wbr>rocess.env.npm_lifecycle_event</code></p><h2 id="node多版本管理" tabindex="-1">node多版本管理 <a class="header-anchor" href="#node多版本管理" aria-hidden="true">#</a></h2><p>卸载已安装到全局的 node/npm</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth=0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#删除全局 node_modules 目录</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/lib/node_modules</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#删除 node</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/bin/node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#删除全局 node 模块注册的软链</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/usr/local/bin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../lib/node_modules/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $9}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span></span>
<span class="line"></span></code></pre></div><p>安装nvm</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#快速安装brew</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/zsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#curl</span></span>
<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/creationix/nvm/v0.</span><span style="color:#F78C6C;">33.8</span><span style="color:#C3E88D;">/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#或者</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#wget</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-qO-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/creationix/nvm/v0.</span><span style="color:#F78C6C;">33.8</span><span style="color:#C3E88D;">/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span></code></pre></div><p>查看安装情况</p><p>完成安装输入 <code>nvm --version</code> 可以查看当前 <code>nvm</code> 的版本，若遇到 <code>nvm:command not found</code> ,则编辑 <code>.bash_profile</code> 文件，没有的话就新建一个</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.bash_profile</span></span>
<span class="line"></span></code></pre></div><p>文件内容</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> NVM_DIR</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$HOME</span><span style="color:#C3E88D;">/.nvm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-s</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#A6ACCD;">$NVM_DIR</span><span style="color:#C3E88D;">/nvm.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$NVM_DIR</span><span style="color:#C3E88D;">/nvm.sh</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>然后 source 一下 .bash_profile</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.bash_profile</span></span>
<span class="line"></span></code></pre></div><h3 id="使用nvm" tabindex="-1">使用nvm <a class="header-anchor" href="#使用nvm" aria-hidden="true">#</a></h3><ul><li>安装<code>node</code>: <code>nvm install stable / 指定版本</code></li><li>删除<code>node</code>: <code>nvm uninstall 指定版本</code></li><li>查看当前<code>node</code>版本: <code>nvm current</code></li><li>切换 <code>node</code> 版本: <code>nvm use 指定版本</code></li><li>设置默认版本并切换: <code>nvm alias default 指定版本</code></li><li>给不同 <code>node</code> 版本设置/取消别名: <code>nvm alias [别名] 指定版本 nvm unalias [别名]</code></li><li>查看安装的 <code>node</code> 列表: <code>nvm ls</code></li></ul><p>在多版本环境如何使用 <code>npm</code></p><p>运行下面这个命令，可以从特定版本导入到我们将要安装的新版本 <code>Node</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v5.</span><span style="color:#F78C6C;">0.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--reinstall-packages-from=4.2</span></span>
<span class="line"></span></code></pre></div>`,41),o=[e];function t(c,r,i,C,y,d){return n(),a("div",null,o)}const A=s(p,[["render",t]]);export{h as __pageData,A as default};
