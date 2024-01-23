import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./frontend"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="*" element={<h1>Page not found.</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router