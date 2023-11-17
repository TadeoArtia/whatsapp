import ContactTopBar from "../components/ContactTopBar.tsx";
import {ContactDetailModel} from "../models/ContactDetail.model.ts";

function ChatCard() {

    const contact: ContactDetailModel = {
        name: 'John Doe',
        photoUrl: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk'
    }

    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex w-full h-14 bg-gray-700'>
                <ContactTopBar contact={contact}/>
            </div>
            <div className='flex w-full flex-1 bg-white'></div>
        </div>

    )
}

export default ChatCard
