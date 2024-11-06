import { createBrowserRouter } from "react-router-dom";
import { StudentDetailPage } from "./pages/StudentDetailPage";
import { StudentSubmitPage } from "./pages/StudentSubmitPage";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/students/:id',
        element: <StudentDetailPage />
    },
    {
        path: '/students/submit',
        element: <StudentSubmitPage />
    }
]);