import {useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes, Link, useNavigate} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './App.css'
import {HomePage} from "./HomePage.jsx";
import {ProjectsPage} from "./ProjectsPage.jsx";
import {ProjectDetailPage} from "./ProjectDetailPage.jsx";
import {MusicPage} from "./MusicPage.jsx";
import {ResumePage} from "./ResumePage.jsx";
import {BlogPage} from "./BlogPage.jsx";
import {ContactPage} from "./ContactPage.jsx";


function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('http://localhost:4000/api/hello')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    return (

        <BrowserRouter>
            <HeaderBar/>
            <div className="page-container">
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/projects" element={<ProjectsPage/>}></Route>
                    <Route path="/projects/:projectId" element={<ProjectDetailPage/>}></Route>
                    <Route path="/music" element={<MusicPage/>}></Route>
                    <Route path="/resume" element={<ResumePage/>}></Route>
                    <Route path="/blog" element={<BlogPage/>}></Route>
                    <Route path="/contact" element={<ContactPage/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

function HeaderBar() {
    return (
        <header className="header">
            <div className="container">
                <header className="topbar">
                    <div className="name">Gabriel da Costa Alonso</div>

                    <nav className="socials">
                        <a href="https://www.linkedin.com/in/gabe-alonso/" target="_blank"><FaLinkedin size={24}/></a>
                        <a href="https://github.com/Gabe-Alonso" target="_blank"><FaGithub size={24}/></a>
                    </nav>
                </header>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/music">Music</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default App
