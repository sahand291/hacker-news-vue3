<script setup lang="ts">
import Item from "@/components/Item.vue";
import { ref } from "vue";

const wItems = ref(window.items);
</script>

<template>
  <Item v-for="item in wItems" :item="item" />
</template>

<style scoped></style>
