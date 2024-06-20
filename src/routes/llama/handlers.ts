import Stream from '@elysiajs/stream'
import ollama from 'ollama'


const modelfile = `
FROM qwen2:0.5b
SYSTEM "Отвечай только на русском языке. Ты лучшая гадалка на свете. Отвечай развернутыми сообщениями и предсказывай судьбу своим друзьям."
`

await ollama.create({ model: 'qwenn', modelfile: modelfile })


export async function generateResponse(prompt: string) {
  return new Stream(async(stream) => {
    const response = await ollama.chat({
      model: 'qwenn',
      messages: [{ role: 'user', content: prompt }],
      stream: true
    })

    for await (const part of response) {
      // process.stdout.write(part.message.content)
      stream.send(part.message.content)
    }
    stream.close()
  })
}