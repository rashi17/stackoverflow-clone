import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import "../styles/login.css";
import TextField from './text-field';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    //validation schema
    const validation = Yup.object({
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password mut be atleast 6 characters")
            .required("Password is required")
    })
    
    //login event handler
    const handleLogin = (e) => {
        setLoggedIn(e)
    }
    return (
        <React.Fragment>
            <Formik initialValues={
                {
                    email: '',
                    password: ''
                }
            }
                validationSchema={validation}>
                {Formik => {
                    return (
                        loggedIn && Formik.errors ?
                            <Redirect to="/questions" />
                            :
                            <div className="login-wrapper">
                                <h3 className="login-header">Login</h3>
                                <div className="form-wrapper">
                                    <Form>
                                        <TextField label="Email" name="email" type="email" />
                                        <TextField label="Password" name="password" type="password" />
                                        <button type="submit" className="login-button" value={Formik.isValid} onClick={() => handleLogin(Formik.isValid)}>Login</button>
                                    </Form>
                                </div>
                            </div>
                    )
                }}
            </Formik>
        </React.Fragment>
    )
}

export default Login;