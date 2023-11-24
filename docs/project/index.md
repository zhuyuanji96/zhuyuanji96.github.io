
<script setup>
import { ref } from 'vue'
import Tetris from './Tetris.vue'
import RetroSanker from './Retro-Sanker.vue'

const curTab = ref('Tetris')
</script>

<div :class="$style['project-tabs']">
  <a @click='curTab="Tetris"'>俄罗斯方块</a>
  <a @click='curTab="RetroSnaker"'>贪吃蛇</a>
</div>
<template v-if='curTab==="Tetris"'>
  <Tetris />
</template>
<template v-if='curTab==="RetroSnaker"'>
  <RetroSanker />
</template>

<style module>
  .project-tabs {
    margin-bottom:28px;
    width: 100%; 
    display:flex;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
  }
</style>
