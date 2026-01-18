import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import SignupPage from "./Pages/SignUp";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/SignUp" element={<SignupPage/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

