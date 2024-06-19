import  {Elysia, t} from 'elysia'
import { generateResponse } from './handlers'


const llamaRoutes = new Elysia({prefix: '/llama'})
    .post('/generate', async ({body})=> await generateResponse(body.prompt), {
        body: t.Object({
            prompt: t.String()
        })
    })

// const llamaRoutes = new Elysia({prefix: '/llama'})
//     .post('/generate', async ()=> await generateResponse())


export default llamaRoutes