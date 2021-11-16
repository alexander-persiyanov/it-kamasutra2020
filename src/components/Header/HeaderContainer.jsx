import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {logout} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component{

    componentDidMount(){
       
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

export default connect(mapStateToProps,{logout})(HeaderContainer);