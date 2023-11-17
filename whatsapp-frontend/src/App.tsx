import './App.css'
import {Outlet} from "react-router-dom";

function App() {

    return (
        <div className='h-full w-full flex'>
            <Outlet/>
        </div>
    )
}

export default App
