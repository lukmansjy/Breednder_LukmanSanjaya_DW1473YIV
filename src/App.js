import React, { useState, useEffect } from 'react';
import IndexPage from './pages/IndexPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profil from './pages/Profil'
import AddPet from './pages/AddPet'
import SplashScreen from './pages/SplashScreen';

function App() {
  const [state, setState] = useState({
    load: true
  })

  useEffect(()=>{
    setTimeout(()=>{
      setState({
        load: false
      })
  }, 1000);
  })
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/index">
          <IndexPage/>
        </Route>
        <Route path="/profil">
          <Profil/>
        </Route>
        <Route path="/add-pet">
          <AddPet/>
        </Route>
        <Route path="/">
          {state.load? <SplashScreen/> : <Home/>}
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
