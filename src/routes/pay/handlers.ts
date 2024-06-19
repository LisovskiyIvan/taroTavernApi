interface Payload {
    app_id: string,
    date: string,
    item: string,
    item_discount: string,
    item_price: string,
    item_title: string,
    notification_type: string,
    order_id: string,
    receiver_id: string,
    status: string,
    user_id: string
    version: string,
    sig: string
}
// app_id, item lang notification_type order_id receiver_id user_id version sig

export function sendItem(e: Payload) {

    let res 

    const get_item = {
        "response": {
            title: "300 niggers",
            price: 34,
            discount: 5,
            item_id: "sale_item_1",
            expiration: 3600
        }
    }

    const order_status_change_test = {
        response: {
            order_id: e.order_id
        }
    }


    switch (e.notification_type) {
        case "get_item":
        case "get_item_test":
            res = get_item;
        break
        case "order_status_change":
        case "order_status_change_test":
            res = order_status_change_test
        break
    }

    return JSON.stringify(res)
}