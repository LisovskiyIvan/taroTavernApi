import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import userRoutes from "./routes/users/users";
import llamaRoutes from "./routes/llama/llama";
import payRouter from "./routes/pay/pay";

export const app = new Elysia().get("/", () => "taro api")

app.use(cors({
  origin: true,
  methods: ["GET", "POST", "DELETE"]
}))
app
  .group('/api', (app) => app.use(userRoutes))
  // .group('/api', (app) => app.use(llamaRoutes))
  .group('/api', (app) => app.use(payRouter))




app.listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
