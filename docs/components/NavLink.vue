<script setup lang="ts">
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';

defineProps<{
  icon?: string;
  title: string;
  desc?: string;
  link?: string;
}>();
</script>

<template>
  <VPLink class="NavLink" :href="link" :no-icon="true">
    <article class="box">
      <div class="top">
        <VPImage v-if="icon" class="link-icon" :image="icon" alt="YJ" />
        <h2 class="title" v-html="title"></h2>
      </div>
      <p v-if="desc" class="details" v-html="desc"></p>
    </article>
  </VPLink>
</template>

<style scoped>
.NavLink {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.NavLink.link:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft-up);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 18px;
  height: 100%;
}
.box .top {
  display: flex;
  align-items: center;
}

.NavLink:deep(.link-icon) {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.title {
  margin: 0 0 0 12px;
  padding: 0;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
}

.details {
  flex-grow: 1;
  margin-top: 8px;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}
</style>
