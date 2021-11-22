import React from "react";
import {  Route, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainerFormik from "./components/Login/LoginContainerFormik";
import { connect } from "react-redux";
import { compose } from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Commons/Spinner/Spinner";



class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
    if(!this.props.initialized){
      return <Preloader></Preloader>

    }
    return (
      
      <div className="app-wrapper">
      
          <HeaderContainer></HeaderContainer>
          <Navbar></Navbar>
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={()=> <DialogsContainer/> } />
            {/* :userId? userId there is parameter and ? there is optional */}
            <Route path="/profile/:userId?" render={()=> <ProfileContainer/> } />
            <Route path="/users" render={()=> <UsersContainer/> } />
            <Route path="/login" render={()=> <LoginContainerFormik></LoginContainerFormik> } />
          </div>
        
      </div>
    );

  }
 
};

const mapStateToProps = (state) => {
  return {
     initialized:state.app.initialized,
     
  };
}

export default compose(
  connect(mapStateToProps,{initializeApp}),
  withRouter,
 
)(App);
