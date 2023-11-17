import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

function MainLayout() {

	return (
		<>
			<div className='flex flex-grow-[1]'>
				<Navbar/>
			</div>
			<div className='flex flex-grow-[20]'>
				<Outlet/>
			</div>
		</>

	)
}

export default MainLayout
