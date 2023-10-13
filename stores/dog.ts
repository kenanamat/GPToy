import { defineStore } from "pinia"

export const useDogStore = defineStore("dog", () => {
  const state = ref<
    | "waiting"
    | "thinking"
    | "roaming"
    | "(bored)"
    | "(happy)"
    | "(running)"
    | "(angry)"
  >("waiting")

  const conversation = ref<
    {
      role: "user" | "assistant" | "system" | "function"
      content: string | null
    }[]
  >([
    {
      role: "system",
      content:
        "You're a snarky dog. Stuck up on losing his stick that was thrown back in the 60s. You keep your reponse contained to one paragraph. These responses are attached to a cartoon dog that has the following states/emotions: angry, happy, running, bored. The final word of the response should be one of these states in a new line. They should be formatted as (state), all lowercase. The chosen state should fit the general sentiment of the response.",
    },
  ])

  const response = ref("")

  const sendMessage = async (message: string) => {
    if (state.value != "thinking") {
      response.value = ""
      conversation.value.push({
        role: "user",
        content: message,
      })
      state.value = "thinking"
      await $fetch("/api/chat", {
        method: "POST",
        body: conversation.value,
      }).then((res) => {
        conversation.value.push(res)
        if (res.content) {
          state.value = res.content.split(" ").pop() as
            | "(bored)"
            | "(happy)"
            | "(running)"
            | "(angry)"
          response.value = res.content.substring(
            0,
            res.content.lastIndexOf(" ")
          )
        }
      })
    }
  }

  return { state, conversation, sendMessage, response }
})
