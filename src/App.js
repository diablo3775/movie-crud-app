import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import Navbar from './components/Navbar'
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
    </Router>
  )
}

export default App
