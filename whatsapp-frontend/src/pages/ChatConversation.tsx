import {ChatDetailModel} from "../models/ChatDetail.model.ts";
import ChatDetailCard from "../components/ChatDetailCard.tsx";

function ChatConversation() {

    const chats: ChatDetailModel[] = [
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'john',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'john',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'self',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'john',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'john',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'self',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'john',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'john',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'self',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'john',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'john',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Hello World',
            sender: 'self',
            timestamp: new Date(),
            status: 'read',
            type: 'text'
        },
        {
            message: 'Thanks!',
            sender: 'self',
            timestamp: new Date(1),
            status: 'read',
            type: 'text'
        }
    ]


    return (
        <div className='w-full h-full flex flex-col justify-start p-4 gap-3'>
            {chats.map((chat: ChatDetailModel) => (
                <ChatDetailCard chat={chat} key={chat.timestamp.getTime()}/>
                ))}
        </div>

    )
}

export default ChatConversation
