import  {Elysia, t} from 'elysia'
import { createUser, deleteUser, getUserById, getUsers, updateUser } from './handlers'


const userRoutes = new Elysia({prefix: '/users'})
    .get('/', async() =>await getUsers())
    .get('/:id', async ({params: {id}}) => await getUserById(parseInt(id)))
    .post('/', async ( {body}) => createUser(body), {
        body: t.Object({
            vkId: t.Number(),
            name: t.String (),
            lastName: t.String ()
        })
    })
    .patch('/:id', async ({params: {id}, body})=>await updateUser(parseInt(id), body), {
        body: t.Object({
            free_tier: t.Boolean()
        })
    })
    .delete('/:id', async({params: {id}})=>await deleteUser(parseInt(id)))

export default userRoutes