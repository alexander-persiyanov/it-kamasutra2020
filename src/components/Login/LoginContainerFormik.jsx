
import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


class LoginContainer extends React.Component {

    componentDidMount() {


    }

    render() {
        if(this.props.isAuth){
            return <Redirect to={"/profile"}></Redirect>;
        }
        return (

            <div>
                <h2>Login</h2>
                <LoginForm login={this.props.login} logout={this.props.logout}></LoginForm>


            </div>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth


    };
}


const LoginForm = (props) => {

    const validateForm = (values) => {
       
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required Password';
        }else if(values.password.length <= 6){
            errors.password = 'password length should bee more than 6 charaters';
        }
        // if (!values.rememberMe) {
        //     errors.rememberMe = 'Required';
        // }

        return errors;
    };

    const submitForm = (values, { setSubmitting ,setErrors,setStatus}) => {
     
        props.login(values.email,values.password,values.rememberMe,setSubmitting,setErrors,setStatus);
       
    };

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '',confirmPassword:'' }}
                validate={validateForm}
                onSubmit={submitForm}
                initialStatus={{msg:"status initial general error",}}
            >
                {({ isSubmitting ,errors,status}) => (
                    <Form>
                        <div>
                            <div style={{ color: 'red' }}>
                                {status ? status.msg :'' }
                            </div>
                           
                            <label htmlFor="email">Email
                            <Field type="email" name="email" disabled={isSubmitting} placeholder="email" />
                           
                            <ErrorMessage name="email">
                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                            </ErrorMessage>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" disabled={isSubmitting} placeholder="password" />
                          
                            <ErrorMessage name="password">
                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                           
                            </ErrorMessage>
                          
                        </div>
                       
                        <div>
                            <label htmlFor="rememberMe">Remember me
                            <Field type="checkbox" name="rememberMe" />
                            </label>
                            <ErrorMessage name="rememberMe" component="div" />
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>

                        </div>
                        <div>
                       
                        </div>
                      
                       
                       
                    </Form>
                )}
            </Formik>
        </div>
    );
}



export default connect(mapStateToProps, {login})(LoginContainer);