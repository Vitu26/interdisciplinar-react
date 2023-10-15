import React, {  } from "react";
import "./App.css";
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import Header from './Components/Header';
import Home from './Components/Home';
import Addconsultas from './Components/Addconsultas';
import Consultaslist from './Components/Consultaslist';
import Editconsultas from './Components/Editconsultas';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/addconsultas" element={<Addconsultas/>}/>
              <Route exact path="/consultaslist" element={<Consultaslist/>}/>
              <Route path="editconsultas/:id/edit" element={<Editconsultas />} />
            </Routes>
            <Footer/> 
        </Router>
        
 </div>
  );
}
 
export default App;
