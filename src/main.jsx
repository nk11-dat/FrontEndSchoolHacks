import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'
import logo from "../src/assets/schoolhacks-logo.png";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Workshops from "./components/Workshops";
import About from "./components/About.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Workshop from "./components/Workshop";
import ErrorPage from "./components/error-page";
import Session from "./components/Session";
import Register from "./components/Register";
import Confirmation from "./components/Confirmation";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="main">
                <Header/>

                <Routes>
                    <Route path="/" element={<Home title={"School Hacks"}/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="workshops" element={<Workshops/>}>
                        <Route path=":workID" element={<Workshop/>}>
                            <Route path=":sessionId" element={<Session/>}/>
                        </Route>
                        <Route index element={<h3>Select a workshop from above</h3>}/>
                    </Route>
                    <Route path="register" element={<Register/>}/>
                    <Route path="confirmation" element={<Confirmation/>}/>
                    <Route path="*" element={<h1 className="not-found">Page Not Found</h1>}/>
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    </React.StrictMode>
)
