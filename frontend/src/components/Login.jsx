import React from 'react';
import axios from 'axios';

const Login = (props) => {
    return (
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault();
                console.log(event);
                axios.get("http://localhost:3001/test?user="+event.user+"&pass="+event.pass)
                    .then((jawab)=>{console.log(jawab)});
            }}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text" className="form-control" id="user" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="pass" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;