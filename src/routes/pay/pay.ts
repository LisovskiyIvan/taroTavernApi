import  {Elysia, t} from 'elysia'
import { sendItem } from './handlers'




const payRouter = new Elysia({prefix: 'pay'})
    .post('/', ({body})=> sendItem(body), {
        body: t.Object({
            app_id: t.String(),
            date: t.String(),
            item: t.String(),
            item_discount: t.String(),
            item_price: t.String(),
            item_title: t.String(),
            notification_type: t.String(),
            order_id: t.String(),
            receiver_id: t.String(),
            status: t.String(),
            user_id: t.String(),
            version: t.String(),
            sig: t.String()
        })
    })


export default payRouter