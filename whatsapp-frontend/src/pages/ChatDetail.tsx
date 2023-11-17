import ContactTopBar from "../components/ContactTopBar.tsx";
import {ContactDetailModel} from "../models/ContactDetail.model.ts";
import ChatConversation from "./ChatConversation.tsx";
import KeyboardBar from "../components/KeyboardBar.tsx";

function ChatCard() {

    const contact: ContactDetailModel = {
        name: 'John Doe',
        photoUrl: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk'
    }

    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex w-full h-14'>
                <ContactTopBar contact={contact}/>
            </div>
            <div className='flex w-full flex-1 overflow-scroll bg-contain bg-[url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")]'>
                <ChatConversation/>
            </div>
            <div className='flex w-full h-14'>
                <KeyboardBar/>
            </div>
        </div>
    )
}

export default ChatCard
