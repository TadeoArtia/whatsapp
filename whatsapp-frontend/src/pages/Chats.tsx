import ChatList from "./ChatList.tsx";
import ChatDetail from "./ChatDetail.tsx";

function Chats() {

    return (
        <>
            <div className='flex h-full w-1/4'>
                <ChatList/>
            </div>
            <div className='flex h-full w-3/4'>
                <ChatDetail/>
            </div>
        </>

    )
}

export default Chats
