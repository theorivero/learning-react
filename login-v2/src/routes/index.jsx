import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Login } from "../pages/login"
import { Register } from "../pages/register"

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login/>}></Route>
                <Route path="/register" exact element={<Register/>}></Route>

            </Routes>
        </Router>
    )
}