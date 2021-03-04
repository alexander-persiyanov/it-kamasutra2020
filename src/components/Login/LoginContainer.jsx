import React from 'react';
import { connect } from 'react-redux';


class LoginContainer extends React.Component {

    componentDidMount() {


    }

    render() {
        return (

            <div>
                <h2>Login</h2>
                <LoginForm></LoginForm>


            </div>
        );
    }

}
let mapStateToProps = (state) => {
    return {



    };
}


const LoginForm = () => {
   
    return (
        <form action="">
            <div>
                <label htmlFor="">Username</label>
                <input type={"text"} placeholder={"inter username"} />
            </div>
            <div>
                <label htmlFor="" >Password</label>
                <input type={"password"} placeholder={"inter password"} />
            </div>
            <div>
                <label htmlFor="" >Remember Me</label>
                <input type={"checkbox"} />
            </div>
            <div>
                <button>Login</button>
            </div>


        </form>
    );
}



export default connect(mapStateToProps, {})(LoginContainer);