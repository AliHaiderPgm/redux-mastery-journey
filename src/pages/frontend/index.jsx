import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Navbar from "../../components/Navbar"
import Todo from "../Todo"
import ShoppingCart from "./ShoppingCart"

const index = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/todos" index element={<Todo />} />
                <Route path="/cart" index element={<ShoppingCart />} />
            </Routes>
        </>
    )
}

export default index