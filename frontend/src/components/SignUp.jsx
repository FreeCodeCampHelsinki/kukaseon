import React, { Component } from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import './style.css';

class SignUp extends Component {

    render() {
        return (
            <div className="total">
                <h1>Sign Up Here!</h1>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        //run function here, submit data to db
                        console.log(values);
                    }}
                >
                    {({ values, errors, touched }) => (
                        <Form>
                            <div className="section">
                                <div>
                                    <Field name="firstName" placeholder="First Name" className="field" />
                                    {errors.firstName && touched.firstName ? (
                                        <div className="errors">{errors.firstName}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <Field name="lastName" placeholder="Last Name" className="field" />
                                    {errors.lastName && touched.lastName ? (
                                        <div className="errors">{errors.lastName}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <Field name="email" type="email" placeholder="Email" className="field" />
                                    {errors.email && touched.email ? (
                                        <div className="errors">{errors.email}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <Field name="password" type="password" placeholder="password" className="field" />
                                    {errors.password && touched.password ? (
                                        <div className="errors">{errors.password}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="confirmPassword"
                                        className="field" />
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <div className="errors">{errors.confirmPassword}</div>
                                    ) : null}
                                </div>
                                <button type="submit">Submit</button>
                                <pre>{JSON.stringify(values, null, 2)}</pre>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div >
        );
    }

}

const SignupSchema = Yup.object().shape(
    {
        firstName: Yup.string()
            .min(2, "Too short!")
            .max(50, "Too long")
            .required("Required"),
        lastName: Yup.string()
            .min(2, "Too short!")
            .max(50, "Too long!")
            .required("Required"),
        email: Yup.string()
            .email("Invalid email")
            .required("required"),
        password: Yup.string()
            .min(4, "minmum 4 symbols")
            .max(50, "too long")
            .required("required"),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Password must be the same!"
        )
    });




export default SignUp;