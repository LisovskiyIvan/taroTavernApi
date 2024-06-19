// interface Payload {
//     amount: number,
//     data: {
//         currency: string,
//         merchant_data: string,
//         merchant_sign: string,
//         ts: string
//     }
//     description: string,
//     action: string,
//     merchant_id: number,
//     version: number,
//     sign: string
// }

// const amount = 199
// const currency = "RUB"
// const ts = (Date.now() / 1000 | 0)
// const description = "Открытие безлимитных запросов"
// const action = "pay-to-user"
// const version = 2

export function sendItem(e: any) {
    console.log(e)
}