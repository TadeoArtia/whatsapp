import {ChatDetailModel} from "../models/ChatDetail.model.ts";

function ChatDetailCard(props: { chat: ChatDetailModel }) {

    const {chat} = props;

    return (
        <div className={` ${chat.sender == 'self' ? 'self-start' : 'self-end'} w-1/4 flex items-center bg-lime-600 flex-row justify-between p-1 rounded`}>
            <p className='text-white'>{chat.message}</p>
            <p className='text-xs text-white'>{chat.timestamp.getHours()} : {chat.timestamp.getHours()}</p>
        </div>

    )
}

export default ChatDetailCard
