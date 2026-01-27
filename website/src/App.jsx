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
import {MusicDetailPage} from "./MusicDetailPage.jsx";
import {ResumePage} from "./ResumePage.jsx";
import {BlogPage} from "./BlogPage.jsx";
import {BlogDetailPage} from "./BlogDetailPage.jsx";
import {ContactPage} from "./ContactPage.jsx";


function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://personalbackend-haeveff8gcg9exhw.canadacentral-01.azurewebsites.net/api/hello')
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
                    <Route path="/music/:musicId" element={<MusicDetailPage/>}></Route>
                    <Route path="/resume" element={<ResumePage/>}></Route>
                    <Route path="/blog" element={<BlogPage/>}></Route>
                    <Route path="/blog/:blogId" element={<BlogDetailPage/>}></Route>
                    <Route path="/contact" element={<ContactPage/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

function HeaderBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="container">
                <header className="topbar">
                    <div className="name">Gabriel Alonso</div>

                    <div className="topbar-right">
                        <nav className="socials">
                            <a href="https://www.linkedin.com/in/gabe-alonso/" target="_blank"><FaLinkedin size={24}/></a>
                            <a href="https://github.com/Gabe-Alonso" target="_blank"><FaGithub size={24}/></a>
                        </nav>
                        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                        </button>
                    </div>
                </header>
                <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/projects" onClick={closeMenu}>Projects</Link>
                    <Link to="/music" onClick={closeMenu}>Music</Link>
                    <Link to="/resume" onClick={closeMenu}>Resume</Link>
                    <Link to="/blog" onClick={closeMenu}>Blog</Link>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default App
