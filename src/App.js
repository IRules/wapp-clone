import React, { useState } from "react";
import './App.css'; //codul CSS pentru elementele app si app__body
import Sidebar from "./Sidebar/Sidebar"; //Componenta Sidebar
import Chat from './Chat/Chat.js';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';  
import Login from "./Login";
import { useStateValue } from './Chat/StateProvider';

function App() {

  const [{ user }, dispatch] =  useStateValue();
  

  return (
    // folosim Block Element Modifier Naming Convention
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
      <Router>
              <Sidebar/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
                  <Chat/>
                </Route>              
              </Switch>            
            </Router> 

      </div>
      )}
    </div>
  );
}

export default App;
