import db from '../../db'

export async function getUsers() {
    try {
        return await db.users.findMany({orderBy: {createdAt: 'asc'}})
    } catch (e: unknown) {
        console.log(`getUsers error ${e}`)
    }
}
export async function getUserById(id: number) {
    try {
        const user = await db.users.findUniqueOrThrow({where: {id}})
        return user
    } catch (e: unknown) {
        console.log(`getUserById error ${e}`)
    }
}

export async function createUser(options: {name: string, password: string, free_tier: boolean}) {
    try {
        const {name, password, free_tier} = options
        return await db.users.create({data: {name, password, free_tier}})
    } catch (e: unknown) {
        console.log(`createUser error ${e}`)
    }
}

export async function updateUser(id:number, options: {name?: string, password?: string, free_tier?: boolean}) {
    const {name, password, free_tier} = options
    try {
        return await db.users.update({where: {id}, data: { 
            ...(name ? {name}: {}),
            ...(password ? {password}: {}),
            ...(free_tier != undefined ? {free_tier}: {})
        }})
    } catch (e: unknown) {
        console.log(`updateUser error ${e}`)
    }
    
}

export async function deleteUser(id: number) {
    try {
        return await db.users.delete({where: {id}})
    } catch (e: unknown) {
        console.log(`deleteUser error ${e}`)
    }
}