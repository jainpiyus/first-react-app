import './App.css';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Main from './common/main/Main';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import { connect, Provider } from 'react-redux';


function App() {


  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
  }


  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <Header login={login} loggedIn={loggedIn} />
        <div className="container main">
          <Main />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

