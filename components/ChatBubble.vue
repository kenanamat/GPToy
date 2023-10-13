<script setup lang="ts">
import { useDogStore } from "../stores/dog"

const dog = useDogStore()

setTimeout(() => {
  dog.response = ""
  dog.state = ["waiting", "roaming"][Math.floor(Math.random() * 2)] as
    | "waiting"
    | "roaming"
}, 10000)
</script>

<template>
  <Transition
    :appear="true"
    class="transition-all duration-300 transform"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-2"
  >
    <div
      class="bg-white rounded-lg shadow-lg absolute inset-0 -right-64 -top-48 w-96 h-48 p-4"
    >
      <p class="text-xs font-bold text-emerald-900">
        {{ dog.response }}
      </p>
      <div
        class="border-solid border-t-white border-t-8 border-x-transparent border-x-8 border-b-0 w-0 h-0 -bottom-3 left-14 absolute transform scale-y-[4] rotate-12"
      ></div>
    </div>
  </Transition>
</template>
