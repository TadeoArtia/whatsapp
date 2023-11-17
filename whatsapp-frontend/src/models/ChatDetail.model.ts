export type ChatDetailModel = {
    "sender": "self" | string,
    "timestamp": Date,
    "message": string
    "type": "text" | "image",
    "status": "sent" | "delivered" | "read"
}
