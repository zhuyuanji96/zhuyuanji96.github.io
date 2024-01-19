import{j as $,a as D,k as F,l as V,o as j,c as A,e as M,n as X,b as z,g as K,_ as Y}from"./app.45f88402.js";const J=D('<div style="width:min(100vw, 392px);margin:0 auto;" id="gameContainer"><div style="height:28px;margin-bottom:12px;display:flex;justify-content:space-between;"><input style="color:#10b981;" type="button" value="重新游戏" id="reStart"><input style="color:#10b981;" type="button" value="暂停/开始" id="runOrPause"></div><div style="width:100%;height:28px;border:1px solid black;background:rgb(243, 97, 19);display:flex;gap:20px;align-items:center;padding:0 10px;"><div style="font-size:14px;"><span>速度:</span><span style="font-size:16px;padding-left:6px;font-weight:bold;" id="curSpeedEle"></span></div><div style="font-size:14px;"><span>当前积分:</span><span style="font-size:16px;padding-left:6px;font-weight:bold;" id="curScoreEle"></span></div><div style="font-size:14px;"><span>最高积分:</span><span style="font-size:16px;padding-left:6px;font-weight:bold;" id="maxScoreEle"></span></div></div></div><div style="height:20px;display:flex;justify-content:center;gap:20px;margin-bottom:12px;"><p>⬆️</p></div><div style="height:20px;display:flex;justify-content:center;gap:40px;margin-bottom:12px;"><p>⬅️</p><p>➡️</p></div><div style="height:20px;display:flex;justify-content:center;gap:20px;margin-bottom:12px;"><p>⬇️</p></div>',4),H={__name:"Tetris",setup(P){let i=null,s=1,m=!1,p=!0,n=null,y=0,g=0;const L=function(o,e,l,d){const f=document.getElementById("tetrisCanvas")||document.createElement("canvas");f.id="tetrisCanvas",f.width=e*l,f.height=o*d,f.style.border="1px solid black",n=f.getContext("2d"),n.beginPath();for(let a=1;a<o;a++)n.moveTo(0,a*d),n.lineTo(e*l,a*d);for(let a=1;a<e;a++)n.moveTo(a*l,0),n.lineTo(a*l,o*d);n.closePath(),n.strokeStyle="#aaa",n.lineWidth=.3,n.stroke(),document.getElementById("gameContainer").appendChild(f)};let r=[];for(let o=0;o<20;o++){r[o]=[];for(let e=0;e<14;e++)r[o][e]="NO_BLOCK"}const u=[[{x:14/2,y:0,color:"green"},{x:14/2,y:1,color:"green"},{x:14/2,y:2,color:"green"},{x:14/2,y:3,color:"green"}],[{x:14/2+1,y:0,color:"blue"},{x:14/2,y:0,color:"blue"},{x:14/2,y:1,color:"blue"},{x:14/2-1,y:1,color:"blue"}],[{x:14/2-1,y:0,color:"orange"},{x:14/2,y:0,color:"orange"},{x:14/2,y:1,color:"orange"},{x:14/2+1,y:1,color:"orange"}],[{x:14/2,y:0,color:"red"},{x:14/2-1,y:1,color:"red"},{x:14/2,y:1,color:"red"},{x:14/2+1,y:1,color:"red"}],[{x:14/2-1,y:0,color:"pink"},{x:14/2,y:0,color:"pink"},{x:14/2-1,y:1,color:"pink"},{x:14/2,y:1,color:"pink"}],[{x:14/2,y:0,color:"yellow"},{x:14/2,y:1,color:"yellow"},{x:14/2,y:2,color:"yellow"},{x:14/2-1,y:2,color:"yellow"}],[{x:14/2-1,y:0,color:"purple"},{x:14/2-1,y:1,color:"purple"},{x:14/2-1,y:2,color:"purple"},{x:14/2,y:2,color:"purple"}]];let t=[];const w=function(){let o=Math.floor(Math.random()*u.length);t=[{x:u[o][0].x,y:u[o][0].y,color:u[o][0].color},{x:u[o][1].x,y:u[o][1].y,color:u[o][1].color},{x:u[o][2].x,y:u[o][2].y,color:u[o][2].color},{x:u[o][3].x,y:u[o][3].y,color:u[o][3].color}]},E=()=>{localStorage.removeItem("curScore"),localStorage.removeItem("tetris_status"),localStorage.removeItem("curSpeed"),p=!1,clearInterval(i),window.location.reload()},I=function(){let o=!0;for(let e=0;e<t.length;e++){if(t[e].y>=19){o=!1;break}if(r[t[e].y+1][t[e].x]!="NO_BLOCK"){o=!1;break}}if(o){for(let e=0;e<t.length;e++){let l=t[e];n.fillStyle="white",n.fillRect(l.x*28+1,l.y*28+1,26,26)}for(let e=0;e<t.length;e++){let l=t[e];l.y++}for(let e=0;e<t.length;e++){let l=t[e];n.fillStyle=l.color,n.fillRect(l.x*28+1,l.y*28+1,26,26)}}else{for(let e=0;e<t.length;e++){let l=t[e];if(l.y<1){confirm("游戏结束!是否参与排名?")&&(g=localStorage.getItem("maxScore"),g=g??0,y>=g&&localStorage.setItem("maxScore",y)),E();return}r[l.y][l.x]=l.color}C(),localStorage.setItem("tetris_status",JSON.stringify(r)),w()}},C=function(){let o=0,e=0;for(let l=0;l<20;l++){e=0;for(let d=0;d<14;d++)r[l][d]!="NO_BLOCK"&&(e++,e==14&&o++);if(o>0){curScoreEle.innerHTML=y+=100*o+100*(o-2),localStorage.setItem("curScore",y),(y=s*s*500)&&(curSpeedEle.innerHTML=s+=1,localStorage.setItem("curSpeed",s),clearInterval(i),i=setInterval(()=>I(),1e3/s));for(let d=l;d>0;d--)for(let f=0;f<14;f++)r[d][f]=r[d-1][f];_()}}},_=function(){for(let o=0;o<20;o++)for(let e=0;e<14;e++)r[o][e]!="NO_BLOCK"?(n.fillStyle=r[o][e],n.fillRect(e*28+1,o*28+1,26,26)):(n.fillStyle="white",n.fillRect(e*28+1,o*28+1,26,26))},k=function(){let o=!0;for(let e=0;e<t.length;e++){if(t[e].x<=0){o=!1;break}if(r[t[e].y][t[e].x-1]!="NO_BLOCK"){o=!1;break}}if(o){for(let e=0;e<t.length;e++){let l=t[e];n.fillStyle="white",n.fillRect(l.x*28+1,l.y*28+1,26,26)}for(let e=0;e<t.length;e++){let l=t[e];l.x--}for(let e=0;e<t.length;e++){let l=t[e];n.fillStyle=l.color,n.fillRect(l.x*28+1,l.y*28+1,26,26)}}},x=function(){let o=!0;for(let e=0;e<t.length;e++){if(t[e].x>=13){o=!1;break}if(r[t[e].y][t[e].x+1]!="NO_BLOCK"){o=!1;break}}if(o){for(let e=0;e<t.length;e++){let l=t[e];n.fillStyle="white",n.fillRect(l.x*28+1,l.y*28+1,26,26)}for(let e=0;e<t.length;e++){let l=t[e];l.x++}for(let e=0;e<t.length;e++){let l=t[e];n.fillStyle=l.color,n.fillRect(l.x*28+1,l.y*28+1,26,26)}}},B=function(){let o=!0;for(let e=0;e<t.length;e++){let l=t[e].x,d=t[e].y;if(e!=2){let f=d-t[2].y+t[2].x,c=t[2].x-l+t[2].y;if(f<0&&(x(),f=d-t[2].y+t[2].x,c=t[2].x-l+t[2].y),f<0&&(x(),f=d-t[2].y+t[2].x,c=t[2].x-l+t[2].y),f>=13&&(k(),f=d-t[2].y+t[2].x,c=t[2].x-l+t[2].y),f>=13&&(k(),f=d-t[2].y+t[2].x,c=t[2].x-l+t[2].y),r[c][f]!="NO_BLOCK"){o=!1;break}}}if(o){for(let e=0;e<t.length;e++){let l=t[e];n.fillStyle="white",n.fillRect(l.x*28+1,l.y*28+1,26,26)}for(let e=0;e<t.length;e++){let l=t[e].x,d=t[e].y;e!=2&&(t[e].x=d-t[2].y+t[2].x,t[e].y=t[2].x-l+t[2].y)}for(let e=0;e<t.length;e++){let l=t[e];n.fillStyle=l.color,n.fillRect(l.x*28+1,l.y*28+1,26,26)}}},T=o=>{if(p)switch(o){case 40:I();break;case 37:k();break;case 38:return B(),!1;case 39:x();break;case 32:m?(i=setInterval(()=>I(),1e3/s),m=!1):(clearInterval(i),m=!0);break}};return $(()=>{L(20,14,28,28),window.onkeydown=f=>T(f.keyCode),document.getElementById("runOrPause").onclick=()=>T(32),document.getElementById("reStart").onclick=()=>E();const o=document.getElementById("curScoreEle"),e=document.getElementById("curSpeedEle"),l=document.getElementById("maxScoreEle"),d=localStorage.getItem("tetris_status");r=d==null?r:JSON.parse(d),_(),y=localStorage.getItem("curScore"),y=y==null?0:parseInt(y),o.innerHTML=y,s=localStorage.getItem("curSpeed"),s=s==null?1:parseInt(s),e.innerHTML=s,g=localStorage.getItem("maxScore"),g=g==null?0:parseInt(g),l.innerHTML=g,w(),i=setInterval(()=>I(),1e3/s),T(32)}),(o,e)=>J}},G=D('<div style="width:min(100vw, 100%);margin:0 auto;" id="gameContainer"><div style="height:28px;margin-bottom:12px;display:flex;justify-content:space-between;"><input style="color:#10b981;" type="button" value="重新游戏" id="reStart"><input style="color:#10b981;" type="button" value="暂停/开始" id="runOrPause"></div><div style="width:100%;height:28px;border:1px solid black;background:rgb(243, 97, 19);display:flex;gap:20px;align-items:center;padding:0 10px;"><div style="font-size:14px;"><span>速度:</span><span style="font-size:16px;padding-left:6px;font-weight:bold;" id="curSpeedEle"></span></div><div style="font-size:14px;"><span>当前积分:</span><span style="font-size:16px;padding-left:6px;font-weight:bold;" id="curScoreEle"></span></div><div style="font-size:14px;"><span>最高积分:</span><span style="font-size:16px;padding-left:6px;font-weight:bold;" id="maxScoreEle"></span></div></div></div><div style="height:20px;display:flex;justify-content:center;gap:20px;margin-bottom:12px;"><p>⬆️</p></div><div style="height:20px;display:flex;justify-content:center;gap:40px;margin-bottom:12px;"><p>⬅️</p><p>➡️</p></div><div style="height:20px;display:flex;justify-content:center;gap:20px;margin-bottom:12px;"><p>⬇️</p></div>',4),U={__name:"Retro-Sanker",setup(P){let i=null,s=1,m=!1,p=null,n=0,y=0;const g=[];function L(c,a,v,h){const b=document.getElementById("gameCanvas")||document.createElement("canvas");b.id="gameCanvas",b.width=a*v,b.height=c*h,b.style.border="1px solid black",b.style.autofocus="autofocus",p=b.getContext("2d"),p.beginPath();for(var S=1;S<c;S++)p.moveTo(0,S*h),p.lineTo(v*a,S*h);for(var S=1;S<a;S++)p.moveTo(S*v,0),p.lineTo(S*v,h*c);p.closePath(),p.strokeStyle="#aaa",p.lineWidth=.1,p.stroke();for(let O=0;O<c;O++){g[O]=[];for(let R=0;R<a;R++)g[O][R]="noting",p.fillRect(R*h+1,O*v+1,v-2,h-2)}const N=document.getElementById("gameContainer");N&&N.appendChild(b)}const r=[{x:32,y:15,color:"red"},{x:31,y:15,color:"green"},{x:30,y:15,color:"green"},{x:29,y:15,color:"green"},{x:28,y:15,color:"green"}];function u(){for(let c=0;c<r.length;c++)p.fillStyle=r[c].color,p.fillRect(r[c].x*15+1,r[c].y*15+1,13,13)}function t(){for(let c=0;c<r.length;c++)p.fillStyle="black",p.fillRect(r[c].x*15+1,r[c].y*15+1,13,13)}let w,E;function I(){w=Math.floor(Math.random()*60),E=Math.floor(Math.random()*30),p.fillStyle="orange",p.fillRect(w*15+1,E*15+1,13,13)}function C(c){for(let a=r.length-1;a>-1;a--)if(a!=0)r[a].y=r[a-1].y,r[a].x=r[a-1].x;else switch(c){case"right":r[a].x=r[a].x+1;break;case"left":r[a].x=r[a].x-1;break;case"top":r[a].y=r[a].y+1;break;case"down":r[a].y=r[a].y-1;break}}function _(){if(r.filter(a=>a.x===w&&a.y===E).length>0){I();const a=document.getElementById("curScoreEle"),v=document.getElementById("curSpeedEle");a.innerHTML=n+=5,localStorage.setItem("score_snake",n),n>s*50&&(v.innerHTML=s+=1,localStorage.setItem("speed_snake",s)),r.push({x:r[0].x,y:r[0].y,color:"green"})}}function k(){(r[0].x==-1||r[0].x==60)&&(n>y?(localStorage.setItem("max_snake",n),localStorage.removeItem("speed_snake"),alert("恭喜您,创造了新的游戏记录!")):(localStorage.removeItem("speed_snake"),alert("游戏结束!")),localStorage.setItem("score_snake",0),clearInterval(i)),(r[0].y==-1||r[0].y==30)&&(n>y?(localStorage.setItem("max_snake",n),localStorage.removeItem("speed_snake"),alert("恭喜您,创造了新的游戏记录!")):(localStorage.removeItem("speed_snake"),alert("游戏结束!")),localStorage.setItem("score_snake",0),clearInterval(i));for(let c=1;c<r.length;c++)r[0].x==r[c].x&&r[0].y==r[c].y&&(n>y?(localStorage.setItem("max_snake",n),localStorage.removeItem("speed_snake"),alert("恭喜您,创造了新的游戏记录!")):(localStorage.removeItem("speed_snake"),alert("游戏结束!")),localStorage.setItem("score_snake",0),clearInterval(i))}let x="right";function B(){x="right",t(),C("right"),u(),k(),_()}function T(){x="left",t(),C("left"),u(),k(),_()}function o(){x="top",t(),C("top"),u(),k(),_()}function e(){x="down",t(),C("down"),u(),k(),_()}const l=()=>{localStorage.removeItem("score_snake"),localStorage.removeItem("tetris_status"),localStorage.removeItem("speed_snake"),clearInterval(i),window.location.reload()},d=c=>{switch(c){case 37:x!=="right"&&x!=="left"&&(clearInterval(i),i=setInterval(T,500/s));break;case 38:x!=="down"&&x!=="top"&&(clearInterval(i),i=setInterval(e,500/s));break;case 39:x!=="right"&&x!=="left"&&(clearInterval(i),i=setInterval(B,500/s));break;case 40:x!=="down"&&x!=="top"&&(clearInterval(i),i=setInterval(o,500/s));break;case 32:f();break}},f=()=>{if(m){switch(x){case"top":i=setInterval(o,500/s);break;case"down":i=setInterval(e,500/s);break;case"left":i=setInterval(T,500/s);break;case"right":i=setInterval(B,500/s);break}m=!1}else clearInterval(i),m=!0};return $(()=>{L(30,60,15,15),window.onkeydown=h=>d(h.keyCode),document.getElementById("runOrPause").onclick=()=>d(32),document.getElementById("reStart").onclick=()=>l();const c=document.getElementById("curScoreEle"),a=document.getElementById("curSpeedEle"),v=document.getElementById("maxScoreEle");n=localStorage.getItem("score_snake"),n=n==null?0:parseInt(n),c.innerHTML=n,s=localStorage.getItem("speed_snake"),s=s==null?1:parseInt(s),a.innerHTML=s,y=localStorage.getItem("max_snake"),y=y==null?0:parseInt(y),v.innerHTML=y,i&&clearInterval(i),i=setInterval(B,500/s),I(),d(32)}),F(()=>{i&&clearInterval(i)}),(c,a)=>G}},q={"project-tabs":"_project-tabs_9d60k_2"},te=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"project/index.md"}'),Q={name:"project/index.md"},Z=Object.assign(Q,{setup(P){const i=V("Tetris");return(s,m)=>(j(),A("div",null,[M("div",{class:X(s.$style["project-tabs"])},[M("a",{onClick:m[0]||(m[0]=p=>i.value="Tetris")},"俄罗斯方块"),M("a",{onClick:m[1]||(m[1]=p=>i.value="RetroSnaker")},"贪吃蛇")],2),i.value==="Tetris"?(j(),z(H,{key:0})):K("",!0),i.value==="RetroSnaker"?(j(),z(U,{key:1})):K("",!0)]))}}),W={$style:q},le=Y(Z,[["__cssModules",W]]);export{te as __pageData,le as default};