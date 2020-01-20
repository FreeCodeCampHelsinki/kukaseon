import React from 'react';

const Login = (props) => {
    return (
        <div>
            <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="user" aria-describedby="emailHelp" />
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