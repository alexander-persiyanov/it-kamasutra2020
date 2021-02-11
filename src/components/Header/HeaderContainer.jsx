import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuthUserData} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component{

    componentDidMount(){
        this.props.getAuthUserData();
    }

    render(){
        return (
           <Header {...this.props}></Header>
        );
    }
}

let mapStateToProps = (state)=>{
    return {
        auth:state.auth

    };
}

export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer);