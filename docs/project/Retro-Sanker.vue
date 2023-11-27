<template>
  <div style="width: min(100vw, 100%); margin: 0 auto" id="gameContainer">
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
import { onMounted, onUnmounted } from 'vue';
let adTimer = null;
let curSpeed = 1;
let isPause = false;
//初始化游戏状态
let isPlaying = true;
let snake_ctx = null;
let curScore = 0;
let maxScore = 0;

//遍历每个单元格,并为其赋初始值
const ctx_cells = [];

//定义一个创建canvas画布的函数,用来制作游戏界面
function createCanvas(rows, cols, cellWidth, cellHeight) {
  const mc = document.getElementById('gameCanvas') || document.createElement('canvas');
  mc.id = 'gameCanvas';
  mc.width = cols * cellWidth;
  mc.height = rows * cellHeight;
  mc.style.border = '1px solid black';
  // mc.style.backgroundColor = '#fff';
  mc.style.autofocus = 'autofocus';
  snake_ctx = mc.getContext('2d');
  snake_ctx.beginPath();
  for (var i = 1; i < rows; i++) {
    snake_ctx.moveTo(0, i * cellHeight);
    snake_ctx.lineTo(cellWidth * cols, i * cellHeight);
  }
  for (var i = 1; i < cols; i++) {
    snake_ctx.moveTo(i * cellWidth, 0);
    snake_ctx.lineTo(i * cellWidth, cellHeight * rows);
  }
  snake_ctx.closePath();
  snake_ctx.strokeStyle = '#aaa';
  snake_ctx.lineWidth = 0.1;
  snake_ctx.stroke();

  for (let i = 0; i < rows; i++) {
    ctx_cells[i] = [];
    for (let j = 0; j < cols; j++) {
      ctx_cells[i][j] = 'noting';
      // snake_ctx.fillStyle = 'white';
      snake_ctx.fillRect(j * cellHeight + 1, i * cellWidth + 1, cellWidth - 2, cellHeight - 2);
    }
  }

  const gameContainer = document.getElementById('gameContainer');
  gameContainer && gameContainer.appendChild(mc);
}

//生成一条一开始的蛇模型
const intSnake = [
  { x: 32, y: 15, color: 'red' },
  { x: 31, y: 15, color: 'green' },
  { x: 30, y: 15, color: 'green' },
  { x: 29, y: 15, color: 'green' },
  { x: 28, y: 15, color: 'green' }
];
//绘制游戏画面
function drawSnake() {
  for (let i = 0; i < intSnake.length; i++) {
    snake_ctx.fillStyle = intSnake[i].color;
    snake_ctx.fillRect(intSnake[i].x * 15 + 1, intSnake[i].y * 15 + 1, 13, 13);
  }
}
function clearSnake() {
  for (let i = 0; i < intSnake.length; i++) {
    snake_ctx.fillStyle = 'black';
    snake_ctx.fillRect(intSnake[i].x * 15 + 1, intSnake[i].y * 15 + 1, 13, 13);
  }
}

//随机生成食物点
let foodX, foodY;
function createFood() {
  foodX = Math.floor(Math.random() * 60);
  foodY = Math.floor(Math.random() * 30);
  snake_ctx.fillStyle = 'orange';
  snake_ctx.fillRect(foodX * 15 + 1, foodY * 15 + 1, 13, 13);
}

// 处理转向
function handleMove(direction) {
  for (let i = intSnake.length - 1; i > -1; i--) {
    if (i != 0) {
      intSnake[i].y = intSnake[i - 1].y;
      intSnake[i].x = intSnake[i - 1].x;
    } else {
      switch (direction) {
        case 'right':
          intSnake[i].x = intSnake[i].x + 1;
          break;
        case 'left':
          intSnake[i].x = intSnake[i].x - 1;
          break;
        case 'top':
          intSnake[i].y = intSnake[i].y + 1;
          break;
        case 'down':
          intSnake[i].y = intSnake[i].y - 1;
          break;
        default:
          break;
      }
    }
  }
}
// 处理得分
function handleGetScore() {
  const eatFoodList = intSnake.filter(item => item.x === foodX && item.y === foodY);
  if (eatFoodList.length > 0) {
    createFood();
    const scoreEle = document.getElementById('curScoreEle');
    const speedEle = document.getElementById('curSpeedEle');
    scoreEle.innerHTML = curScore += 5;
    localStorage.setItem('score_snake', curScore);
    if (curScore > curSpeed * 50) {
      speedEle.innerHTML = curSpeed += 1;
      localStorage.setItem('speed_snake', curSpeed);
    }
    intSnake.push({ x: intSnake[0].x, y: intSnake[0].y, color: 'green' });
  }
}

//判断游戏是否结束
function check() {
  // let len = intSnake.length - 1;
  if (intSnake[0].x == -1 || intSnake[0].x == 60) {
    if (curScore > maxScore) {
      localStorage.setItem('max_snake', curScore);
      localStorage.removeItem('speed_snake');
      alert('恭喜您,创造了新的游戏记录!');
    } else {
      localStorage.removeItem('speed_snake');
      alert('游戏结束!');
    }
    localStorage.setItem('score_snake', 0);
    clearInterval(adTimer);
  }
  if (intSnake[0].y == -1 || intSnake[0].y == 30) {
    if (curScore > maxScore) {
      localStorage.setItem('max_snake', curScore);
      localStorage.removeItem('speed_snake');
      alert('恭喜您,创造了新的游戏记录!');
    } else {
      localStorage.removeItem('speed_snake');
      alert('游戏结束!');
    }
    localStorage.setItem('score_snake', 0);
    clearInterval(adTimer);
  }
  for (let i = 1; i < intSnake.length; i++) {
    if (intSnake[0].x == intSnake[i].x && intSnake[0].y == intSnake[i].y) {
      if (curScore > maxScore) {
        localStorage.setItem('max_snake', curScore);
        localStorage.removeItem('speed_snake');
        alert('恭喜您,创造了新的游戏记录!');
      } else {
        localStorage.removeItem('speed_snake');
        alert('游戏结束!');
      }
      localStorage.setItem('score_snake', 0);
      clearInterval(adTimer);
    }
  }
}
//控制模型改变方向
let go = 'right';

function goRight() {
  go = 'right';
  clearSnake();
  handleMove('right');
  drawSnake();
  check();
  handleGetScore();
}
function goLeft() {
  go = 'left';
  clearSnake();
  handleMove('left');
  drawSnake();
  check();
  handleGetScore();
}

function goTop() {
  go = 'top';
  clearSnake();
  handleMove('top');
  drawSnake();
  check();
  handleGetScore();
}

function goDown() {
  go = 'down';
  clearSnake();
  handleMove('down');
  drawSnake();
  check();
  handleGetScore();
}

// 重新开始
const handleReStart = () => {
  //清空local storage中的积分,游戏状态,游戏速度
  localStorage.removeItem('score_snake');
  localStorage.removeItem('tetris_status');
  localStorage.removeItem('speed_snake');
  isPlaying = false;
  clearInterval(adTimer);
  window.location.reload();
};

// 控制按钮
const handleControlBtnClick = keyCode => {
  switch (keyCode) {
    case 37:
      if (go !== 'right' && go !== 'left') {
        clearInterval(adTimer);
        adTimer = setInterval(goLeft, 500 / curSpeed);
      }
      break;
    case 38:
      if (go !== 'down' && go !== 'top') {
        clearInterval(adTimer);
        adTimer = setInterval(goDown, 500 / curSpeed);
      }
      break;
    case 39:
      if (go !== 'right' && go !== 'left') {
        clearInterval(adTimer);
        adTimer = setInterval(goRight, 500 / curSpeed);
      }
      break;
    case 40:
      if (go !== 'down' && go !== 'top') {
        clearInterval(adTimer);
        adTimer = setInterval(goTop, 500 / curSpeed);
      }
      break;
    // 开始 暂停
    case 32:
      handlePauseContinue();
      break;
  }
};

const handlePauseContinue = () => {
  if (isPause) {
    switch (go) {
      case 'top':
        adTimer = setInterval(goTop, 500 / curSpeed);
        break;
      case 'down':
        adTimer = setInterval(goDown, 500 / curSpeed);
        break;
      case 'left':
        adTimer = setInterval(goLeft, 500 / curSpeed);
        break;
      case 'right':
        adTimer = setInterval(goRight, 500 / curSpeed);
        break;
      default:
        break;
    }
    isPause = false;
  } else {
    clearInterval(adTimer);
    isPause = true;
  }
};

onMounted(() => {
  createCanvas(30, 60, 15, 15);
  //为窗口的按键事件绑定监听器
  window.onkeydown = evt => handleControlBtnClick(evt.keyCode);
  //定义暂停与继续按钮事件
  document.getElementById('runOrPause').onclick = () => handleControlBtnClick(32);
  document.getElementById('reStart').onclick = () => handleReStart();

  const scoreEle = document.getElementById('curScoreEle');
  const speedEle = document.getElementById('curSpeedEle');
  const maxEle = document.getElementById('maxScoreEle');
  curScore = localStorage.getItem('score_snake');
  curScore = curScore == null ? 0 : parseInt(curScore);
  scoreEle.innerHTML = curScore;
  curSpeed = localStorage.getItem('speed_snake');
  curSpeed = curSpeed == null ? 1 : parseInt(curSpeed);
  speedEle.innerHTML = curSpeed;
  maxScore = localStorage.getItem('max_snake');
  maxScore = maxScore == null ? 0 : parseInt(maxScore);
  maxEle.innerHTML = maxScore;
  adTimer && clearInterval(adTimer);
  adTimer = setInterval(goRight, 500 / curSpeed);
  createFood();
  // 默认暂停
  handleControlBtnClick(32);
});

onUnmounted(() => {
  adTimer && clearInterval(adTimer);
});
</script>
