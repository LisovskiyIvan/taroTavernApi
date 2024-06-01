import  {Elysia, t} from 'elysia'
import { createUser, deleteUser, getUserById, getUsers, updateUser } from './handlers'


const userRoutes = new Elysia({prefix: '/users'})
    .get('/', async() =>await getUsers())
    .get('/:id', async ({params: {id}}) => await getUserById(parseInt(id)))
    .post('/', async ( {body}) => createUser(body), {
        body: t.Object({
            name: t.String (),
            password: t.String (),
            free_tier: t.Boolean()
        })
    })
    .patch('/:id', async ({params: {id}, body})=>await updateUser(parseInt(id), body), {
        body: t.Object({
            name: t.Optional(t.String()),
            password: t.Optional(t.String()),
            free_tier: t.Optional(t.Boolean())
        }, { minProperties: 1})
    })
    .delete('/:id', async({params: {id}})=>await deleteUser(parseInt(id)))

export default userRoutes