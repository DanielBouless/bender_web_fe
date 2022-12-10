import SignUp from './pages/SignUp';
import Login from './pages/Login';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './css/custom.css'
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import MyEvents from './pages/MyEvents';
import Profile from './pages/Profile';
function App() {

return (
  <div>
    <NavigationBar />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path='/myevents' element={<MyEvents/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  </div>
);
  
}

export default App;

