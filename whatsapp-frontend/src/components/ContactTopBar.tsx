import {ContactDetailModel} from "../models/ContactDetail.model.ts";

function ContactTopBar(props: { contact: ContactDetailModel }) {

    const {contact} = props;

    return (
        <div className='flex h-full flex-row justify-start p-2'>
            <img src={contact.photoUrl} alt="profile" className='flex w-9 h-9 p-1 rounded-full self-center'/>
            <p className='flex font-bold self-center pl-2'>{contact.name}</p>
        </div>

    )
}

export default ContactTopBar
