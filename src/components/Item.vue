<script setup lang="ts">
const props = defineProps<{
  item: { url: string; title: string };
}>();
</script>

<template>
  <li>
    {{ props.item.url }}
    <a :href="props.item.url">{{ props.item.title }}</a>
  </li>
</template>
