<template>
  <div class="d-flex ga-2 align-baseline">
    <div class="line-box"></div>
    <h2 class="text-start text-brand-text-color-default font-weight-bold mb-2">

      {{ props.title }}
      <v-card v-if="image" width="30" height="20" elevation="0" class="d-inline-block ms-2" :image="image"></v-card>
    </h2>
</div>
<p class="text-start text-brand-text-color-default text-subtitle-1 font-weight-medium">{{ props.text }}</p>

</template>

<script setup lang="ts">
const props = defineProps(["title", "text", "image"]);
</script>

<style scoped>
.line-box {
  width: 8px;
  height: 22.5px;
  background-color: #1c324a;
  border-radius: 2px;
}
</style>
