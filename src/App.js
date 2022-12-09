import SignUp from './pages/SignUp';
import Login from './pages/Login';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './css/custom.css'
import Home from './pages/Home';


function App() {

return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);
  
}

export default App;

