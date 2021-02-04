import React from "react";
import {  Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

import "./App.css";

const App = (props) => {

  return (
    <div className="app-wrapper">
     
        <Header></Header>
        <Navbar></Navbar>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={()=> <DialogsContainer/> } />
          <Route path="/profile" render={()=> <Profile/> } />
          <Route path="/users" render={()=> <UsersContainer/> } />
        </div>
      
    </div>
  );
};

export default App;
