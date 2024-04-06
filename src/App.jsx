import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddEmployer from './components/AddEmployer';
import DisplayEmployer from './components/DisplayEmployer';
import Nav from './Nav';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=""> 
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addemployer" element={<AddEmployer />}/>
        <Route path="/displayemployer" element={<DisplayEmployer />}/>
      </Routes>
    </div>
  )
}

export default App
