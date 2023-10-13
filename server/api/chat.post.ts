import { getChatStream } from "../utils/ai"

export default defineEventHandler(async (event) => {
  // console.log(event)
  const body = await readBody(event)
  const stream = await getChatStream(body)

  return stream
})
