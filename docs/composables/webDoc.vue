<script setup lang="ts">
import NavLink from '../components/NavLink.vue';
import { computed } from 'vue';

interface NavLink {
  icon?: string;
  title: string;
  desc: string;
  link?: string;
  linkText?: string;
}

const props = defineProps<{
  list: NavLink[];
}>();

const grid = computed(() => {
  const length = props.list.length;

  if (!length) {
    return;
  } else if (length === 2) {
    return 'grid-2';
  } else if (length === 3) {
    return 'grid-3';
  } else if (length % 3 === 0) {
    return 'grid-6';
  } else if (length % 2 === 0) {
    return 'grid-4';
  } else if (length % 3 === 2) {
    return 'grid-3';
  } else if (length % 3 === 1) {
    return 'grid-4';
  }
});
</script>

<template>
  <div v-if="list" class="webDoc">
    <div class="container">
      <div class="items">
        <div v-for="nav in list" :key="nav.title" class="item" :class="[grid]">
          <NavLink :icon="nav.icon" :title="nav.title" :desc="nav.desc" :link="nav.link" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.webDoc {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .webDoc {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .webDoc {
    padding: 0;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}

@media (min-width: 960px) {
  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
  .item.grid-2 {
    width: calc(100% / 2);
  }
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>
