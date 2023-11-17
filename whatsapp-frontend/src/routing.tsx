import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import MainLayout from "./layouts/Main.tsx";
import Chats from "./pages/Chats.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/chats",
                element: <MainLayout/>,
                children: [
                    {path: ":id", element: <Chats/>},
                ],
            },
        ],
    },
]);
