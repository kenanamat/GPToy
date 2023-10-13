<script setup lang="ts">
const index = ref(0)

const iterate = () => {
  setTimeout(() => {
    if (index.value < 1) index.value = index.value + 1
    else index.value = 0
    iterate()
  }, 1000)
}
iterate()
</script>

<template>
  <img
    v-show="index === 0"
    class="absolute inset-0 w-full"
    src="../assets/bored1.png"
  />
  <img
    v-show="index === 1"
    class="absolute inset-0 w-full"
    src="../assets/bored2.png"
  />
</template>
