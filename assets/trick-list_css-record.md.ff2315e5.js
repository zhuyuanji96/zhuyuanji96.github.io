import{_ as s,c as n,o as a,a as l}from"./app.69d4c36f.js";const A=JSON.parse('{"title":"CSS 常用语法记录","description":"","frontmatter":{},"headers":[{"level":2,"title":"滚动条样式","slug":"滚动条样式","link":"#滚动条样式","children":[]}],"relativePath":"trick-list/css-record.md"}'),p={name:"trick-list/css-record.md"},o=l(`<h1 id="css-常用语法记录" tabindex="-1">CSS 常用语法记录 <a class="header-anchor" href="#css-常用语法记录" aria-hidden="true">#</a></h1><h2 id="滚动条样式" tabindex="-1">滚动条样式 <a class="header-anchor" href="#滚动条样式" aria-hidden="true">#</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 滚动条 */</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 纵向 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 横向 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ededed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 滚动条上的按钮(上下箭头) */</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 滚动条轨道 */</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-track</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ededed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 滚动条轨道，没有滑块 */</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-track-piece</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ededed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 垂直滚动条和水平滚动条交汇的部分 */</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-corner</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ededed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 滚动条上的滚动滑块 */</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-thumb</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">d6d6d6</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 右下角拖动块 */</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-resizer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar" target="_blank" rel="noreferrer">MDN</a></p>`,4),e=[o];function c(t,r,D,y,C,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
