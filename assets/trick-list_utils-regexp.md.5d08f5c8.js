import{_ as s,c as a,o as l,a as n}from"./app.a8cac8fd.js";const C=JSON.parse('{"title":"常用正则","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"是否是金额（精确到分）","slug":"是否是金额-精确到分","link":"#是否是金额-精确到分","children":[]},{"level":2,"title":"是否是手机号","slug":"是否是手机号","link":"#是否是手机号","children":[]},{"level":2,"title":"是否是邮箱号","slug":"是否是邮箱号","link":"#是否是邮箱号","children":[]},{"level":2,"title":"是否是 QQ 号","slug":"是否是-qq-号","link":"#是否是-qq-号","children":[]},{"level":2,"title":"是否是链接地址","slug":"是否是链接地址","link":"#是否是链接地址","children":[]},{"level":2,"title":"是否是身份证号码","slug":"是否是身份证号码","link":"#是否是身份证号码","children":[]},{"level":2,"title":"是否为 16 进制颜色","slug":"是否为-16-进制颜色","link":"#是否为-16-进制颜色","children":[]},{"level":2,"title":"344 格式手机号","slug":"_344-格式手机号","link":"#_344-格式手机号","children":[]},{"level":2,"title":"隐藏手机号中间 4 位","slug":"隐藏手机号中间-4-位","link":"#隐藏手机号中间-4-位","children":[]}],"relativePath":"trick-list/utils-regexp.md"}'),p={name:"trick-list/utils-regexp.md"},o=n(`<h1 id="常用正则" tabindex="-1">常用正则 <a class="header-anchor" href="#常用正则" aria-hidden="true">#</a></h1><p><a href="https://juejin.cn/post/6844903501034684430" target="_blank" rel="noreferrer">JS 正则表达式完整教程</a></p><h2 id="是否是金额-精确到分" tabindex="-1">是否是金额（精确到分） <a class="header-anchor" href="#是否是金额-精确到分" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">|([</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">*))(</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{1,2})?</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">/(?:</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]([</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]+)?(?:</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{1,2})?</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)|(?:</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">(?:</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">){1}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)|(?:</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">](?:[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">])?</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)/</span></span>
<span class="line"></span></code></pre></div><h2 id="是否是手机号" tabindex="-1">是否是手机号 <a class="header-anchor" href="#是否是手机号" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">1\\d</span><span style="color:#89DDFF;">{10}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">3-9</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{9}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre></div><h2 id="是否是邮箱号" tabindex="-1">是否是邮箱号 <a class="header-anchor" href="#是否是邮箱号" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">+([</span><span style="color:#C3E88D;">-+.</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">+)*</span><span style="color:#C3E88D;">@\\w</span><span style="color:#89DDFF;">+([</span><span style="color:#C3E88D;">-.</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">+)*</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">+([</span><span style="color:#C3E88D;">-.</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">+)*</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 参考 MDN</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/email#basic_validation</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">a-zA-Z0-9.!#$%&amp;&#39;*+/=?^_\`{|}~-</span><span style="color:#89DDFF;">]+</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">a-zA-Z0-9</span><span style="color:#89DDFF;">](?:[</span><span style="color:#C3E88D;">a-zA-Z0-9-</span><span style="color:#89DDFF;">]{0,61}[</span><span style="color:#C3E88D;">a-zA-Z0-9</span><span style="color:#89DDFF;">])?(?:</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">a-zA-Z0-9</span><span style="color:#89DDFF;">](?:[</span><span style="color:#C3E88D;">a-zA-Z0-9-</span><span style="color:#89DDFF;">]{0,61}[</span><span style="color:#C3E88D;">a-zA-Z0-9</span><span style="color:#89DDFF;">])?)*</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre></div><h2 id="是否是-qq-号" tabindex="-1">是否是 QQ 号 <a class="header-anchor" href="#是否是-qq-号" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]{1}</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4,11}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre></div><h2 id="是否是链接地址" tabindex="-1">是否是链接地址 <a class="header-anchor" href="#是否是链接地址" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">https</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\/\\/</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">A-Za-z0-9-_</span><span style="color:#89DDFF;">]+</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">A-Za-z0-9</span><span style="color:#89DDFF;">]+[</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;">\\?</span><span style="color:#C3E88D;">%\\-&amp;_~\`@[</span><span style="color:#A6ACCD;">\\]\\&#39;</span><span style="color:#C3E88D;">:+!</span><span style="color:#89DDFF;">]*([^</span><span style="color:#C3E88D;">&lt;&gt;</span><span style="color:#A6ACCD;">\\&quot;\\&quot;</span><span style="color:#89DDFF;">])*</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre></div><h2 id="是否是身份证号码" tabindex="-1">是否是身份证号码 <a class="header-anchor" href="#是否是身份证号码" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{5}(?:</span><span style="color:#C3E88D;">18</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">19</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">20</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{2}(?:</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]|</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">11</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">)(?:</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]|[</span><span style="color:#C3E88D;">1-2</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">30</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">31</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3}[</span><span style="color:#C3E88D;">\\dXx</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre></div><h2 id="是否为-16-进制颜色" tabindex="-1">是否为 16 进制颜色 <a class="header-anchor" href="#是否为-16-进制颜色" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">?([</span><span style="color:#C3E88D;">a-fA-F0-9</span><span style="color:#89DDFF;">]{6}|[</span><span style="color:#C3E88D;">a-fA-F0-9</span><span style="color:#89DDFF;">]{3})</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre></div><h2 id="_344-格式手机号" tabindex="-1">344 格式手机号 <a class="header-anchor" href="#_344-格式手机号" aria-hidden="true">#</a></h2><ul><li>从左到右</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;">/(</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3}|</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4}</span><span style="color:#89DDFF;font-style:italic;">\\B</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 例：</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">15512341234</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/(</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3}|</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4}</span><span style="color:#89DDFF;font-style:italic;">\\B</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$1 </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><ul><li>从右到左</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">\\B</span><span style="color:#89DDFF;">(?=(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4})+</span><span style="color:#89DDFF;font-style:italic;">\\b</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 例：</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">15512341234</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">\\B</span><span style="color:#89DDFF;">(?=(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4})+</span><span style="color:#89DDFF;font-style:italic;">\\b</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="隐藏手机号中间-4-位" tabindex="-1">隐藏手机号中间 4 位 <a class="header-anchor" href="#隐藏手机号中间-4-位" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3})</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4}(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4})/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 例：</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">15512341234</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3})</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4}(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4})/</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$1****$2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,23),e=[o];function t(c,D,r,F,y,i){return l(),a("div",null,e)}const h=s(p,[["render",t]]);export{C as __pageData,h as default};