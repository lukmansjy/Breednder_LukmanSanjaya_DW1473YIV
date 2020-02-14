import React from 'react';
import IndexPage from './pages/IndexPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profil from './pages/Profil'

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/index">
          <IndexPage/>
        </Route>
        <Route path="/profil">
          <Profil/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
