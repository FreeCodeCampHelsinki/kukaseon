import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [user, setUser] = React.useState('');
    const [pass, setPass] = React.useState('');



    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log(event);
                axios.get(`http://localhost:3001/test?user=${user}&pass=${pass}`).then(
                    (data) => {
                        console.log(data);
                    }
                );
            }}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text"
                        className="form-control"
                        id="user" aria-describedby="emailHelp"
                        value={user} onChange={event => setUser(event.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="pass" value={pass} onChange={event => setPass(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
            <div><span>User is {user} and password is {pass}. Get request is sent to {`http://localhost:3001/test?user=${user}&pass=${pass}`}</span></div>
        </div >
    );
}
export default Login;

