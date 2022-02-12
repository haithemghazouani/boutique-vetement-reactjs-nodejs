import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Contact from "./pages/Contact";
import {Gestion , Read,Updat} from './pages/Gestion';
import Registre from './pages/Registre';
import Home from "./pages/Home";
import { Homme,Femme,Enfants,Bebe,Homme1,Homme2,Femme1,Femme2,Enfants1,Bebe1 } from "./pages/Vetements";
import Login from './pages/Login';
const App = () => {
  return(

    <Routes>
      <Route  path="/" element={<Login/>} />
      <Route  path="/Home" element={<Home/>} />
      <Route path="/Homme" element={<Homme/>} />
      <Route path="/Femme" element={<Femme/>} />
      <Route path="/Enfants" element={<Enfants/>} />
      <Route path="/Bebe" element={<Bebe/>} />
      <Route path="/Homme1" element={<Homme1/>} />
      <Route path="/Homme2" element={<Homme2/>} />
      <Route path="/Femme1" element={<Femme1/>} />
      <Route path="/Femme2" element={<Femme2/>} />
      <Route path="/Enfants1" element={<Enfants1/>} />
      <Route path="/Bebe1" element={<Bebe1/>} />

      <Route  path="/gestion" element={<Gestion />} />
      <Route  path="/read" element={<Read />} />
      <Route  path="/update" element={<Updat />} />
      <Route  path="/Singup" element={<Registre/>} />

      <Route  path="/contact" element={<Contact/>} />
    </Routes>
 );
};

export default App;