import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Signup from './Components/SignupComponent/SignupComponent';

function Main() {
    return (
        <Routes>
            <Route path='/' element={<Signup />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/education' element={<Education />}></Route>
            <Route path='/experience' element={<Experience />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
    )
}

export default Main