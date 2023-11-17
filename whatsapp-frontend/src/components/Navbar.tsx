import {useLocation, useNavigate} from "react-router-dom";

function Navbar() {

	const navigate = useNavigate()
	const route = useLocation()

	function isActive(path: string) {
		return route.pathname.includes(path) ? 'bg-gray-200' : ''
	}

	return (
		<div className='flex flex-col h-full w-full justify-between items-center py-4 px-0'>
			<div className='flex flex-col gap-3'>
				<button className={`${isActive('chats')} p-2 px-4  rounded`} onClick={() => navigate('/chats/1')}>
					<i className="material-icons align-middle">forum</i>
				</button>
				<button className={`${isActive('calls')} p-2 px-4  rounded`} onClick={() => navigate('/chats/1')}>
					<i className="material-icons align-middle">call</i>
				</button>
			</div>
			<button className={`${isActive('settings')} p-2 px-4  rounded`} onClick={() => navigate('/chats/1')}>
				<i className="material-icons align-middle">settings</i>
			</button>
		</div>

	)
}

export default Navbar
