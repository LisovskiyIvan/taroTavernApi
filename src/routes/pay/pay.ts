import  {Elysia, t} from 'elysia'
import { sendItem } from './handlers'



const payRouter = new Elysia({prefix: 'pay'})
    .get('/', ({body})=> sendItem(body))


export default payRouter