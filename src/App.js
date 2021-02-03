import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


import "./App.css";

const App = (props) => {

console.dir(props.state);
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header></Header>
        <Navbar></Navbar>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={()=> <DialogsContainer store={props.store}/> } />
          <Route path="/profile" render={()=> <Profile store={props.store}/> } />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
