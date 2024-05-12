<script setup lang="ts">
const props = defineProps<{
  item: { url: string; title: string; author: string; score: string };
}>();
</script>

<template>
  <li>
    <a :href="props.item.url">{{ props.item.title }}</a>
    <p>
      <span>author: {{ item.author }}</span>
      <span>score: {{ item.score }}</span>
    </p>
  </li>
</template>
