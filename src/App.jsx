import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddEmployer from './components/AddEmployer';
import DisplayEmployer from './components/DisplayEmployer';
import Nav from './Nav';
import { DataContext } from './DataContext';





function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    startDate: "",
  });

  // Dummy data for initial table rows
  const initialEmployees = [
    { id: 1, name: 'Solomon Razak', email: 'solomon@example.com', position: 'Manager', department: 'IT'},
    { id: 2, name: 'Ntiri Jameel', email: 'ntiri@example.com', position: 'Developer', department: 'Marketing'},
    { id: 3, name: 'Derek Gyan', email: 'Derek@example.com', position: 'Distributor', department: 'Sales'},
    { id: 4, name: 'Austine Appiah', email: 'austinee@example.com', position: 'Marketer', department: 'Finance'},
    { id: 5, name: 'Thomas Mensah', email: 'thomas@example.com', position: 'Product Manager', department: 'Management'}
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  return (
    <DataContext.Provider value={{formData, setFormData, employees, setEmployees}}>
    <div className=""> 
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addemployer" element={<AddEmployer />}/>
        <Route path="/displayemployer" element={<DisplayEmployer />}/>
      </Routes>
    </div>
    </DataContext.Provider>
  )
}

export default App
