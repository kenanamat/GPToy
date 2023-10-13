import OpenAI from "openai"

const config = useRuntimeConfig()

const openai = new OpenAI({
  apiKey: config.openAi.secretKey,
})

export const getChatStream = async (
  conversation: { role: "user" | "assistant" | "system"; content: string }[]
) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: conversation,
  })

  return response.choices[0].message
}
