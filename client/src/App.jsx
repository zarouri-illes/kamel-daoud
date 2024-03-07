import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn, Home, About, Profile, Landing, Navbar } from "./const"

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/sign-in' element={<SignIn/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
