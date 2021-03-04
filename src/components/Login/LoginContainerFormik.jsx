
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
            errors.password = 'Required';
        }
        // if (!values.rememberMe) {
        //     errors.rememberMe = 'Required';
        // }

        // if(values.confirmPassword !== values.password){
        //     errors.confirmPassword = 'Password dont corrisponded';
        // }
        return errors;
    };

    const submitForm = (values, { setSubmitting }) => {
       
        setTimeout(() => {
            props.login(values.email,values.password,values.rememberMe);
            // alert(JSON.stringify(values, null, 2));
            // console.log(values);
            setSubmitting(false);
        }, 400);
    };

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '',confirmPassword:'' }}
                validate={validateForm}
                onSubmit={submitForm}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" disabled={isSubmitting} placeholder="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" disabled={isSubmitting} placeholder="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        {/* <div>
                            <label htmlFor="confirmPassword">confirme Password</label>
                            <Field type="password" name="confirmPassword" disabled={isSubmitting} placeholder="confirme Password" />
                            <ErrorMessage name="confirmPassword" component="div" />
                        </div> */}
                        <div>
                            <label htmlFor="rememberMe">Remember me</label>
                            <Field type="checkbox" name="rememberMe" />
                            <ErrorMessage name="rememberMe" component="div" />
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>

                        </div>
                       
                       
                    </Form>
                )}
            </Formik>
        </div>
    );
}



export default connect(mapStateToProps, {login})(LoginContainer);