import {useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HomePage} from "./HomePage.jsx";
import {ProjectsPage} from "./ProjectsPage.jsx";
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
        <div>
            <h1>App exists</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/projects" element={<ProjectsPage />}></Route>
                    <Route path="/music" element={<MusicPage />}></Route>
                    <Route path="/resume" element={<ResumePage />}></Route>
                    <Route path="/blog" element={<BlogPage />}></Route>
                    <Route path="/contact" element={<ContactPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
  )
}

export default App
