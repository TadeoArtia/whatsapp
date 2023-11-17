import {ChatCardModel} from "../models/ChatCard.model.ts";
import ChatCard from "../components/ChatCard.tsx";
import {useNavigate, useParams} from "react-router-dom";

function ChatList() {

    const chats: ChatCardModel[] = [
        {
            name: 'John Doe',
            lastMessage: 'Hello World',
            lastMessageTime: '12:00',
            id: '1',
            photoUrl: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk'
        },
        {
            name: 'John Doe',
            lastMessage: 'Hello World',
            lastMessageTime: '12:00',
            id: '2',
            photoUrl: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk'
        },
        {
            name: 'John Doe',
            lastMessage: 'Hello World',
            lastMessageTime: '12:00',
            id: '3',
            photoUrl: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk'
        },
        {
            name: 'John Doe',
            lastMessage: 'Hello World',
            lastMessageTime: '12:00',
            id: '4',
            photoUrl: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk'
        },
        {
            name: 'John Doe',
            lastMessage: 'Hello World',
            lastMessageTime: '12:00',
            id: '5',
            photoUrl: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk'
        },
        {
            name: 'John Doe',
            lastMessage: 'Hello World',
            lastMessageTime: '12:00',
            id: '6',
            photoUrl: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk'
        },
        {
            name: 'John Doe',
            lastMessage: 'Hello World',
            lastMessageTime: '12:00',
            id: '7',
            photoUrl: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk'
        },
        {
            name: 'John Doe',
            lastMessage: 'Hello World',
            lastMessageTime: '12:00',
            id: '8',
            photoUrl: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk'
        },
    ]

    const navigate = useNavigate();
    const {id} = useParams();

    function handleCardSelection(data: ChatCardModel) {
        navigate(`/chats/${data.id}`)
    }

    function isSelected(data: ChatCardModel) {
        return id === data.id
    }

    return (
        <div className='flex w-full h-full flex-col p-2 border-r-2 border'>
            {chats.map((chat: ChatCardModel) =>
                <div onClick={() => handleCardSelection(chat)} key={chat.id}>
                    <ChatCard chat={chat} isSelected={isSelected(chat)}/>
                </div>
            )}
        </div>
    )
}

export default ChatList
