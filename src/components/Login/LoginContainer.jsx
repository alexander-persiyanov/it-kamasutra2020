import React  from 'react';
import { connect } from 'react-redux';


class LoginContainer extends React.Component{
   
    componentDidMount(){
   
       
    }

    render(){
        return <>
            <form>
                <h2>Login</h2>
                <label htmlFor="">Username</label>
                <input type="text"/>
                <label htmlFor="">Password</label>
                <input type="password"/>
            </form>
        
        </>;
    }

}
let mapStateToProps = (state)=>{
    return{
       
       

    };
}



export default connect(mapStateToProps,{})(LoginContainer);