import {Outlet} from "react-router-dom";

function MainLayout() {

    return (
        <>
            <div className='flex flex-grow-[1] bg-red-500'>
                <p>ACA</p>
            </div>
            <div className='flex flex-grow-[13]'>
                <Outlet/>
            </div>
        </>

    )
}

export default MainLayout
