<script setup lang="ts">
import Item from "@/components/Item.vue";
import { onMounted, ref } from "vue";

const wItems = ref(window.items);

onMounted(() => {
  console.log("hello hacker news");
});
</script>

<template>
  <Item v-for="item in wItems" :item="item" />
</template>

<style scoped></style>
