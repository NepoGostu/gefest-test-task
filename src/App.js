import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Contacts from './pages/Contacts/Contacts'
import About from './pages/About/About'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  )
}

export default App
