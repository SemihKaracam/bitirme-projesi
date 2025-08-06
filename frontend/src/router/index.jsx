import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GrafikPage from "../pages/GrafikPage";
import LabelImagePage from "../pages/LabelImagePage";
import ImageManager from "../pages/ImageManager";
import Alarm from "../pages/Alarm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/grafik",
        element: <GrafikPage/>
    },
    {
        path: "/labelimage",
        element: <LabelImagePage/>
    },
    {
        path: "/deneme",
        element: <ImageManager/>
    },
    {
        path: "/alarm",
        element: <Alarm/>
    },
])