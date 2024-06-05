// App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import List from './components/list/List';
import Login from './components/login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in from localStorage
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle login success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // Store login state in localStorage
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Remove login state from localStorage
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <>
          <List />
          <Chat onLoginSuccess={handleLoginSuccess} onLogout={handleLogout} />
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
