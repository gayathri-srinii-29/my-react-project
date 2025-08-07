import logo from './logo.svg';
import './App.css';
import Home from  './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
<div className="App d-flex flex-column min-vh-100">
  
      <BrowserRouter>
        <Header />
        <Home />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} /> 
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
