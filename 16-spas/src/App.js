import React from 'react'
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import logo from './img/logo.png';
import './App.css';

import Vacations from './Vacations'


function Home() {
  return (
      <div>
        <h2>Welcome to Meadowlark Travel</h2>
        <p>Check out our "<Link to="/about">About</Link>" page!</p>
      </div>
    )
}

function About() {
  return (<i>Coming Soon</i>)
}

function NotFound() {
  return (<i>Not Found</i>)
}

function App() {
  return (
    
    <div className="container">
      <header>
        <h1>Meadowlark Travel</h1>
        <Link to="/"><img src={logo} alt="Meadowlark Travel Logo" /></Link>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="vacations" element={<Vacations/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
