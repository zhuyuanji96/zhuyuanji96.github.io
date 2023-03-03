---
layout: home
---

<script setup lang='ts'>
import WebDoc from '../composables/webDoc.vue'
import { NAV_DATA } from './navData.js'
</script>

<div class='nav-link'>
  <div v-for="data in NAV_DATA">
    <h2 class='title' v-html="data.title"></h2>
    <WebDoc :list="data.items" />
  </div> 
</div>


<style scoped>
.nav-link {
  margin: 64px auto;
  max-width: 1152px;
}
.title {
  margin: 24px 0;
  padding-top: 24px;
  line-height: 32px;
  font-size: 24px;
  font-weight: bold;
}
</style>