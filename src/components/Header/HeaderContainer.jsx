import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth-reducer';
import axios from 'axios';

class HeaderContainer extends React.Component{

    componentDidMount(){
        //we send CORS request from our domain to another domain and we should add to get request cookie {withCredentials:true}
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
        {withCredentials:true}
        ).then((response)=>{
            if(response.data.resultCode === 0){
                //destructurization
                let {id,login,email} = response.data.data;
                this.props.setAuthUserData(id,email,login);

            }
        });
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

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);