import * as React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const Login = (props: any) => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [username, setUsername] = React.useState("");
    console.log({ loggedIn });
    return (
        <div>
            <Formik initialValues={{ user: "", pass: "" }} onSubmit={values => {
                //event.preventDefault();
                setUsername(values.user);
                axios.get("http://localhost:3001/test?user=" + values.user + "&pass=" + values.pass)
                    .then((resp: any) => {
                        setLoggedIn(true);
                        console.log(resp);
                    });
            }} 
                validationSchema={mySchema}>
                {({ values, errors, touched }) => (
                    <Form style={{ display: loggedIn ? 'none' : 'block' }}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <Field type="" className="form-control" name="user" id="user" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            <div style={{ visibility: errors.user && touched.user ? 'visible' : 'hidden', height: 40 }} className="error-msg">
                                {errors.user}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <Field type="password" className="form-control" name="pass" id="pass" />
                            <div style={{ visibility: errors.pass && touched.pass ? 'visible' : 'hidden' , height: 40}} className="error-msg">
                                {errors.pass}
                            </div>
                            </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                )}

            </Formik>

            {/* <Formik initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
                onSubmit={values => { console.log(values) }}
                validationSchema={SignupSchema}>
                {({ values, errors, touched }) => (
                    <Form style={{ display: 'none' }}>
                        <div className="form-group">
                            <Field name="firstName" placeholder="First Name"></Field>
                            {errors.firstName && touched.firstName ? (<div className="error-msg">{errors.firstName}</div>) : null}
                        </div>
                        <div className="form-group">
                            <Field name="lastName" placeholder="Last Name"></Field>
                        </div>
                        <div className="form-group">
                            <Field name="email" type="email" placeholder="Email"></Field>
                            {errors.email && touched.email ? (<div className="error-msg">{errors.email}</div>) : null}
                        </div>
                        <div className="form-group">
                            <Field name="password" type="password" placeholder="password"></Field>
                            {errors.password && touched.password ? (<div className="error-msg">{errors.password}</div>) : null}
                        </div>
                        <div className="form-group">
                            <Field name="confirmPassword" type="password" placeholder="Confirm Password"></Field>
                            {errors.confirmPassword && touched.confirmPassword ? (<div className="error-msg">{errors.confirmPassword}</div>) : null}
                        </div>
                        <button type="submit">Submit</button>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik> */}

            <h3 style={{ display: loggedIn ? 'block' : 'none' }}>Welcome {username}</h3>
        </div>
    );
}

// const SignupSchema = yup.object().shape({
//     firstName: yup.string().min(2, "too short").max(50, "too long").required("required"),
//     email: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "invalid email"),
//     password: yup.string().min(4, "min 4 char").max(50, "too long").required("required"),
//     confirmPassword: yup.string().oneOf([yup.ref("password")], "not match").required("required")
// });

const mySchema = yup.object().shape({
    user: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "invalid email"),
    pass: yup.string().min(4, "min 4 char").max(50, "too long").required("required"),
});

export default Login;