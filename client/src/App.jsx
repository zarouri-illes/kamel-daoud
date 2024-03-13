import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn, Home, About, Profile, Landing, Navbar, Signup } from "./const"

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/signin' element={<SignIn/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
