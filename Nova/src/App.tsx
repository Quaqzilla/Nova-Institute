import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import SignupPage from "./Pages/SignUp";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Programs } from "./Pages/Programs";
import { ApplicationForm } from "./Pages/ApplicationForm";


function App(){
    return(
        <BrowserRouter basename="/Nova-Institute">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/SignUp" element={<SignupPage/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Programs" element={<Programs/>}/>
                <Route path="/Application" element={<ApplicationForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

