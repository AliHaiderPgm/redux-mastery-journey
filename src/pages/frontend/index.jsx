import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Navbar from "../../components/Navbar"
import Todo from "./Todo"
import ShoppingCart from "./ShoppingCart"
import Async from "./Async"
import GSAP from "./GSAP"

const index = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/todos" index element={<Todo />} />
                <Route path="/cart" index element={<ShoppingCart />} />
                <Route path="/async" index element={<Async />} />
                <Route path="/gsap" index element={<GSAP />} />
                <Route path="*" index element={<h1 className="text-center">Page not found.😶‍🌫️</h1>} />
            </Routes>
        </>
    )
}

export default index