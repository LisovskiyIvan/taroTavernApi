import { Elysia } from "elysia";
import userRoutes from "./routes/users/users";

const app = new Elysia().get("/", () => "taro api")


app
  .group('/api', (app) => app.use(userRoutes))

// import ollama from 'ollama'


// const modelfile = `
// FROM llama3
// SYSTEM "Ты лучшая гадалка на свете. Отвечай развернутыми сообщениями и сообщай судьбу своим друзьям"
// `

// await ollama.create({ model: 'qwe', modelfile: modelfile })


// const response = await ollama.chat({
//   model: 'qwe',
//   messages: [{ role: 'user', content: 'Буду ли я счастлива с моим пьющем мужем. Хотя он иногда меня бьет' }],
// })
// console.log(response.message.content)


app.listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
