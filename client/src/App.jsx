import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import Home from './components/Home';
import './App.css';

function App() {
  const isLoggedIn = false;
  const userRole = 'user';

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/apply" element={<ApplicationForm />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
