import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Create from "./Components/Create"
import User from "./Components/User"
import Edit from "./Components/Edit"

const App=()=>{
    return(
        <div>
           
            <BrowserRouter>
            <Home/>
            <Routes>
                <Route element={<Create/>} path="/"></Route>
                <Route element={<User/>} path="/user"></Route>
                <Route element={<Edit/>} path="/Edit/:ab"></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App