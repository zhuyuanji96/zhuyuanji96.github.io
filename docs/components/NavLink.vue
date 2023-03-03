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
  <VPLink class="YJFeature" :href="link" :no-icon="true">
    <article class="box">
      <div class="top">
        <VPImage v-if="icon" :image="icon" alt="YJ" :height="36" :width="36" />
        <h2 class="title" v-html="title"></h2>
      </div>
      <p v-if="desc" class="details" v-html="desc"></p>
    </article>
  </VPLink>
</template>

<style scoped>
.YJFeature {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.YJFeature.link:hover {
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

.YJFeature:deep(.YJImage) {
  /* width: fit-content; */
  margin-bottom: 20px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft-down);
  width: 48px;
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}

.title {
  margin: 0;
  padding: 0;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}
</style>
