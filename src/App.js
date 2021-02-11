import React from "react";
import {  Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {

  return (
    <div className="app-wrapper">
     
        <HeaderContainer></HeaderContainer>
        <Navbar></Navbar>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={()=> <DialogsContainer/> } />
          {/* :userId? userId there is parameter and ? there is optional */}
          <Route path="/profile/:userId?" render={()=> <ProfileContainer/> } />
          <Route path="/users" render={()=> <UsersContainer/> } />
          <Route path="/login" render={()=> <LoginContainer></LoginContainer> } />
        </div>
      
    </div>
  );
};

export default App;
