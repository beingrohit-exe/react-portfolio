import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  )
}

export default App