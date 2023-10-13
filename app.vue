<script setup lang="ts">
import { useDogStore } from "./stores/dog"
import ChatBubble from "./components/ChatBubble.vue"

const dog = useDogStore()
const message = ref("")

const submitMessage = () => {
  dog.sendMessage(message.value)
  message.value = ""
}
</script>

<template>
  <div
    class="from-emerald-700 to-emerald-900 bg-gradient-to-b h-screen w-screen flex items-center justify-center"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="flex w-full items-center justify-center">
        <div class="h-14 w-14 relative">
          <div
            v-show="dog.state === 'thinking'"
            class="absolute inset-0 rounded-full border-dotted border-4 border-emerald-950 h-4 w-4 animate-spin"
          />
          <ChatBubble v-if="dog.response" />
          <img
            v-show="dog.state === 'thinking'"
            class="absolute inset-0 w-full"
            src="./assets/front1.png"
          />
          <img
            v-show="dog.state === 'waiting' || dog.state === 'roaming'"
            class="absolute inset-0 w-full"
            src="./assets/side1.png"
          />
          <BoredDog v-if="dog.state === '(bored)'" />
        </div>
      </div>
      <div class="mt-12">
        <form @submit.prevent="submitMessage">
          <input
            v-model="message"
            type="text"
            class="bg-emerald-900 rounded-lg h-10 text-xl text-white font-bold shadow-lg px-4"
          />
        </form>
      </div>
    </div>
  </div>
</template>
