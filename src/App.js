import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


import "./App.css";

const App = (props) => {
console.dir(props.state);
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header></Header>
        <Navbar></Navbar>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={()=> <Dialogs state={props.state}/> } />
          <Route path="/profile" render={()=> <Profile state={props.state} addPost={props.addPost} changePost={props.changePost}/> } />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
