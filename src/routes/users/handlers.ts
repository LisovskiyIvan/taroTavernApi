
import db from '../../db'

enum UserStatus {
    ok = 'success',
    notok = 'No user found',
    new = 'New user created'
}

export async function getUsers() {
    try {
        return await db.users.findMany({orderBy: {createdAt: 'asc'}})
    } catch (e: unknown) {
        console.log(`getUsers error ${e}`)
    }
}
export async function getUserById(id: number) {
        const user = await db.users.findUnique({where: {vkId: id}})
      
        return user != null ? {...user, status: UserStatus.ok} : {status: UserStatus.notok}
    
}

export async function createUser(options: {vkId:number, name: string, lastName: string}) {

        const {vkId, name, lastName} = options
        const user = await getUserById(vkId)
        if (user.status == UserStatus.ok) return user
        else {
            const newUser = await db.users.create({data: {vkId, name, lastName}})
            return {...newUser, status: UserStatus.new}
        }
         
       
   
}

export async function updateUser(id:number, options: {free_tier: boolean}) {
    const {free_tier} = options
    try {
        return await db.users.update({where: {id}, data: { 
            free_tier: free_tier
        }})
    } catch (e: unknown) {
        console.log(`updateUser error ${e}`)
    }
    
}

export async function deleteUser(id: number) {
    try {
        return await db.users.delete({where: {vkId: id}})
    } catch (e: unknown) {
        console.log(`deleteUser error ${e}`)
    }
}