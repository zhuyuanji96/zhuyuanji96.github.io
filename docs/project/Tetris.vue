<template>
  <div style="width: min(100vw, 392px); margin: 0 auto" id="gameContainer">
    <div style="height: 28px; margin-bottom: 12px; display: flex; justify-content: space-between">
      <input style="color: #10b981" type="button" value="重新游戏" id="reStart" />
      <input style="color: #10b981" type="button" value="暂停/开始" id="runOrPause" />
    </div>
    <div
      style="
        width: 100%;
        height: 28px;
        border: 1px solid black;
        background: rgb(243, 97, 19);
        display: flex;
        gap: 20px;
        align-items: center;
        padding: 0 10px;
      "
    >
      <div style="font-size: 14px">
        <span>速度:</span>
        <span style="font-size: 16px; padding-left: 6px; font-weight: bold" id="curSpeedEle"></span>
      </div>
      <div style="font-size: 14px">
        <span>当前积分:</span>
        <span style="font-size: 16px; padding-left: 6px; font-weight: bold" id="curScoreEle"></span>
      </div>
      <div style="font-size: 14px">
        <span>最高积分:</span>
        <span style="font-size: 16px; padding-left: 6px; font-weight: bold" id="maxScoreEle"></span>
      </div>
    </div>
  </div>
  <div style="height: 20px; display: flex; justify-content: center; gap: 20px; margin-bottom: 12px">
    <p>⬆️</p>
  </div>
  <div style="height: 20px; display: flex; justify-content: center; gap: 40px; margin-bottom: 12px">
    <p>⬅️</p>
    <p>➡️</p>
  </div>
  <div style="height: 20px; display: flex; justify-content: center; gap: 20px; margin-bottom: 12px">
    <p>⬇️</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
let curTimer = null;
let curSpeed = 1;
let isPause = false;
//初始化游戏状态
let isPlaying = true;
let tetris_ctx = null;
let curScore = 0;
let maxScore = 0;

//定义一个创建canvas画布的函数,用来制作游戏界面
const createCanvas = function (rows, cols, cellWidth, cellHeight) {
  const tetris_canvas = document.getElementById('tetrisCanvas') || document.createElement('canvas');
  tetris_canvas.id = 'tetrisCanvas';
  tetris_canvas.width = cols * cellWidth;
  tetris_canvas.height = rows * cellHeight;
  tetris_canvas.style.border = '1px solid black';
  tetris_ctx = tetris_canvas.getContext('2d');
  tetris_ctx.beginPath();
  for (let i = 1; i < rows; i++) {
    tetris_ctx.moveTo(0, i * cellHeight);
    tetris_ctx.lineTo(cols * cellWidth, i * cellHeight);
  }
  for (let i = 1; i < cols; i++) {
    tetris_ctx.moveTo(i * cellWidth, 0);
    tetris_ctx.lineTo(i * cellWidth, rows * cellHeight);
  }
  tetris_ctx.closePath();
  tetris_ctx.strokeStyle = '#aaa';
  tetris_ctx.lineWidth = 0.3;
  tetris_ctx.stroke();

  const gameContainer = document.getElementById('gameContainer');
  gameContainer.appendChild(tetris_canvas);
};

//创建一个二维数组将每个方块对应的坐标保存在其中,并且初始化他们的值均为NO_BLOCK;
let tetris_status = [];
for (let i = 0; i < 20; i++) {
  tetris_status[i] = [];
  for (let j = 0; j < 14; j++) {
    tetris_status[i][j] = 'NO_BLOCK';
  }
}
//定义一个数组,将可能出现的方块类型放入其中
const blockArr = [
  [
    { x: 14 / 2, y: 0, color: 'green' },
    { x: 14 / 2, y: 1, color: 'green' },
    { x: 14 / 2, y: 2, color: 'green' },
    { x: 14 / 2, y: 3, color: 'green' }
  ],
  [
    { x: 14 / 2 + 1, y: 0, color: 'blue' },
    { x: 14 / 2, y: 0, color: 'blue' },
    { x: 14 / 2, y: 1, color: 'blue' },
    { x: 14 / 2 - 1, y: 1, color: 'blue' }
  ],
  [
    { x: 14 / 2 - 1, y: 0, color: 'orange' },
    { x: 14 / 2, y: 0, color: 'orange' },
    { x: 14 / 2, y: 1, color: 'orange' },
    { x: 14 / 2 + 1, y: 1, color: 'orange' }
  ],
  [
    { x: 14 / 2, y: 0, color: 'red' },
    { x: 14 / 2 - 1, y: 1, color: 'red' },
    { x: 14 / 2, y: 1, color: 'red' },
    { x: 14 / 2 + 1, y: 1, color: 'red' }
  ],
  [
    { x: 14 / 2 - 1, y: 0, color: 'pink' },
    { x: 14 / 2, y: 0, color: 'pink' },
    { x: 14 / 2 - 1, y: 1, color: 'pink' },
    { x: 14 / 2, y: 1, color: 'pink' }
  ],
  [
    { x: 14 / 2, y: 0, color: 'yellow' },
    { x: 14 / 2, y: 1, color: 'yellow' },
    { x: 14 / 2, y: 2, color: 'yellow' },
    { x: 14 / 2 - 1, y: 2, color: 'yellow' }
  ],
  [
    { x: 14 / 2 - 1, y: 0, color: 'purple' },
    { x: 14 / 2 - 1, y: 1, color: 'purple' },
    { x: 14 / 2 - 1, y: 2, color: 'purple' },
    { x: 14 / 2, y: 2, color: 'purple' }
  ]
];
let currentFall = [];

//定义一个函数,随机生成一个下落的方块
const initBlock = function () {
  let rand = Math.floor(Math.random() * blockArr.length);
  currentFall = [
    { x: blockArr[rand][0].x, y: blockArr[rand][0].y, color: blockArr[rand][0].color },
    { x: blockArr[rand][1].x, y: blockArr[rand][1].y, color: blockArr[rand][1].color },
    { x: blockArr[rand][2].x, y: blockArr[rand][2].y, color: blockArr[rand][2].color },
    { x: blockArr[rand][3].x, y: blockArr[rand][3].y, color: blockArr[rand][3].color }
  ];
};

// 重新开始
const handleReStart = () => {
  //清空local storage中的积分,游戏状态,游戏速度
  localStorage.removeItem('curScore');
  localStorage.removeItem('tetris_status');
  localStorage.removeItem('curSpeed');
  isPlaying = false;
  clearInterval(curTimer);
  window.location.reload();
};

//控制方块向下掉落
const moveDown = function () {
  //定义能否下落的旗标
  let canDown = true;
  //遍历每个方块看能否下落
  for (let i = 0; i < currentFall.length; i++) {
    //判断是否已经到达最底下
    if (currentFall[i].y >= 19) {
      canDown = false;
      break;
    }
    //判断下个格子是否已经有方块,如果有则不能下落
    if (tetris_status[currentFall[i].y + 1][currentFall[i].x] != 'NO_BLOCK') {
      canDown = false;
      break;
    }
  }
  //如果能下落
  if (canDown) {
    //遍历每个方块,将下落前的背景涂成白色
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      tetris_ctx.fillStyle = 'white';
      tetris_ctx.fillRect(cur.x * 28 + 1, cur.y * 28 + 1, 26, 26);
    }
    //遍历每个方块将其y坐标加一,让其下落一格
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      cur.y++;
    }
    //将下移后的每个方块的背景颜色涂成方块的颜色
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      tetris_ctx.fillStyle = cur.color;
      tetris_ctx.fillRect(cur.x * 28 + 1, cur.y * 28 + 1, 26, 26);
    }
  } else {
    //如果不能下落
    //遍历每个方块把每个方块的值保存到tetris_status数组中
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      //判断是否有方块已经在最上面,有则表明游戏结束
      if (cur.y < 1) {
        if (confirm('游戏结束!是否参与排名?')) {
          maxScore = localStorage.getItem('maxScore');
          maxScore = maxScore == null ? 0 : maxScore;
          if (curScore >= maxScore) {
            localStorage.setItem('maxScore', curScore);
          }
        }
        handleReStart();
        return;
      }
      //把每个方块当前所在的位置赋值为当前方块的颜色
      tetris_status[cur.y][cur.x] = cur.color;
    }
    //判断是否有消除行
    lineFull();
    //使用local storage记录当前的游戏状态
    localStorage.setItem('tetris_status', JSON.stringify(tetris_status));
    //开始一组显得
    initBlock();
  }
};
//判断是否有一行已经满
const lineFull = function () {
  let flag = 0;
  let num = 0;
  //依次遍历每一行
  for (let i = 0; i < 20; i++) {
    num = 0;
    //遍历每个单元格
    for (let j = 0; j < 14; j++) {
      if (tetris_status[i][j] != 'NO_BLOCK') {
        num++;
        if (num == 14) {
          flag++;
        }
      }
    }
    //如果当前行已经全部有方块
    if (flag > 0) {
      //当前积分增加100
      curScoreEle.innerHTML = curScore += 100 * flag + 100 * (flag - 2);
      //记录当前积分
      localStorage.setItem('curScore', curScore);
      //如果当前积分达到升级极限
      if ((curScore = curSpeed * curSpeed * 500)) {
        curSpeedEle.innerHTML = curSpeed += 1;
        localStorage.setItem('curSpeed', curSpeed);
        clearInterval(curTimer);
        curTimer = setInterval(() => moveDown(), 1000 / curSpeed);
      }
      //当前行所有上方的方块下移一格
      for (let k = i; k > 0; k--) {
        for (let j = 0; j < 14; j++) {
          tetris_status[k][j] = tetris_status[k - 1][j];
        }
      }
      //消除方块后重新绘制一遍方块
      drawBlock();
    }
  }
};
//绘制俄罗斯方块的状态
const drawBlock = function () {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 14; j++) {
      //有方块的地方绘制颜色
      if (tetris_status[i][j] != 'NO_BLOCK') {
        tetris_ctx.fillStyle = tetris_status[i][j];
        tetris_ctx.fillRect(j * 28 + 1, i * 28 + 1, 26, 26);
      }
      //没有方块的地方绘制白色
      else {
        tetris_ctx.fillStyle = 'white';
        tetris_ctx.fillRect(j * 28 + 1, i * 28 + 1, 26, 26);
      }
    }
  }
};
//定义左移方块的函数
const moveLeft = function () {
  let canleft = true;
  for (let i = 0; i < currentFall.length; i++) {
    //如果已经到了左边的边界则不能移动
    if (currentFall[i].x <= 0) {
      canleft = false;
      break;
    }
    if (tetris_status[currentFall[i].y][currentFall[i].x - 1] != 'NO_BLOCK') {
      canleft = false;
      break;
    }
  }
  if (canleft) {
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      tetris_ctx.fillStyle = 'white';
      tetris_ctx.fillRect(cur.x * 28 + 1, cur.y * 28 + 1, 26, 26);
    }
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      cur.x--;
    }
    //将左移后的每个方块的背景颜色涂成方块的颜色
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      tetris_ctx.fillStyle = cur.color;
      tetris_ctx.fillRect(cur.x * 28 + 1, cur.y * 28 + 1, 26, 26);
    }
  }
};
//定义右移方块的函数
const moveRight = function () {
  let canright = true;
  for (let i = 0; i < currentFall.length; i++) {
    //如果已经到了右边的边界则不能移动
    if (currentFall[i].x >= 13) {
      canright = false;
      break;
    }
    if (tetris_status[currentFall[i].y][currentFall[i].x + 1] != 'NO_BLOCK') {
      canright = false;
      break;
    }
  }
  if (canright) {
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      tetris_ctx.fillStyle = 'white';
      tetris_ctx.fillRect(cur.x * 28 + 1, cur.y * 28 + 1, 26, 26);
    }
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      cur.x++;
    }
    //将右移后的每个方块的背景颜色涂成方块的颜色
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      tetris_ctx.fillStyle = cur.color;
      tetris_ctx.fillRect(cur.x * 28 + 1, cur.y * 28 + 1, 26, 26);
    }
  }
};
//定义方块旋转
const rotate = function () {
  let canrotate = true;
  for (let i = 0; i < currentFall.length; i++) {
    let preX = currentFall[i].x;
    let preY = currentFall[i].y;
    if (i != 2) {
      //计算旋转后的方块坐标
      let afterX = preY - currentFall[2].y + currentFall[2].x;
      let afterY = currentFall[2].x - preX + currentFall[2].y;

      if (afterX < 0) {
        moveRight();
        afterX = preY - currentFall[2].y + currentFall[2].x;
        afterY = currentFall[2].x - preX + currentFall[2].y;
        // break;
      }
      if (afterX < 0) {
        moveRight();
        afterX = preY - currentFall[2].y + currentFall[2].x;
        afterY = currentFall[2].x - preX + currentFall[2].y;
        // break;
      }
      if (afterX >= 13) {
        moveLeft();
        afterX = preY - currentFall[2].y + currentFall[2].x;
        afterY = currentFall[2].x - preX + currentFall[2].y;
        // break;
      }
      if (afterX >= 13) {
        moveLeft();
        afterX = preY - currentFall[2].y + currentFall[2].x;
        afterY = currentFall[2].x - preX + currentFall[2].y;
        // break;
      }
      //如果旋转后的坐标上已经有方块则不能旋转
      if (tetris_status[afterY][afterX] != 'NO_BLOCK') {
        canrotate = false;
        break;
      }
    }
  }
  if (canrotate) {
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      tetris_ctx.fillStyle = 'white';
      tetris_ctx.fillRect(cur.x * 28 + 1, cur.y * 28 + 1, 26, 26);
    }
    for (let i = 0; i < currentFall.length; i++) {
      let preX = currentFall[i].x;
      let preY = currentFall[i].y;
      if (i != 2) {
        currentFall[i].x = preY - currentFall[2].y + currentFall[2].x;
        currentFall[i].y = currentFall[2].x - preX + currentFall[2].y;
      }
    }
    for (let i = 0; i < currentFall.length; i++) {
      let cur = currentFall[i];
      tetris_ctx.fillStyle = cur.color;
      tetris_ctx.fillRect(cur.x * 28 + 1, cur.y * 28 + 1, 26, 26);
    }
  }
};

// 控制按钮
const handleControlBtnClick = keyCode => {
  if (!isPlaying) return;

  switch (keyCode) {
    case 40:
      moveDown();
      break;
    case 37:
      moveLeft();
      break;
    case 38:
      rotate();
      return false;
    case 39:
      moveRight();
      break;
    // 开始 暂停
    case 32:
      if (isPause) {
        curTimer = setInterval(() => moveDown(), 1000 / curSpeed);
        isPause = false;
      } else {
        clearInterval(curTimer);
        isPause = true;
      }
      break;
  }
};

onMounted(() => {
  createCanvas(20, 14, 28, 28);

  //为窗口的按键事件绑定监听器
  window.onkeydown = evt => handleControlBtnClick(evt.keyCode);
  //定义暂停与继续按钮事件
  document.getElementById('runOrPause').onclick = () => handleControlBtnClick(32);
  document.getElementById('reStart').onclick = () => handleReStart();

  const curScoreEle = document.getElementById('curScoreEle');
  const curSpeedEle = document.getElementById('curSpeedEle');
  const maxScoreEle = document.getElementById('maxScoreEle');
  //读取 localStorage 里的tetris_status记录
  const tmpStatus = localStorage.getItem('tetris_status');
  tetris_status = tmpStatus == null ? tetris_status : JSON.parse(tmpStatus);
  drawBlock();
  curScore = localStorage.getItem('curScore');
  curScore = curScore == null ? 0 : parseInt(curScore);
  curScoreEle.innerHTML = curScore;
  curSpeed = localStorage.getItem('curSpeed');
  curSpeed = curSpeed == null ? 1 : parseInt(curSpeed);
  curSpeedEle.innerHTML = curSpeed;
  maxScore = localStorage.getItem('maxScore');
  maxScore = maxScore == null ? 0 : parseInt(maxScore);
  maxScoreEle.innerHTML = maxScore;
  initBlock();
  curTimer = setInterval(() => moveDown(), 1000 / curSpeed);
  // 默认暂停
  handleControlBtnClick(32);
});
</script>
