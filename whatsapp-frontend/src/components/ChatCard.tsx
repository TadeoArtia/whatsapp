import {ChatCardModel} from "../models/ChatCard.model.ts";

function ChatCard(props: { chat: ChatCardModel, isSelected: boolean, }) {

    const {chat} = props;

    return (
        <>
            <div
                key={chat.id}
                className={`${props.isSelected ? 'bg-slate-200' : ''} flex flex-row w-full justify-between p-2 hover:bg-slate-100 rounded-md`}>
                <img src={chat.photoUrl} alt="profile" className='w-12 h-12 p-1 rounded-full'/>
                <div className='flex flex-col flex-grow self-center'>
                    <p className='text-sm font-semibold'>{chat.name}</p>
                    <p className='text-xs'>{chat.lastMessage}</p>
                </div>
                <p className='text-xs self-center'>{chat.lastMessageTime}</p>
            </div>
        </>

    )
}

export default ChatCard
