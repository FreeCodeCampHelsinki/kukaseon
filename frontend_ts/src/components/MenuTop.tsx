import * as React from 'react';
import {NavLink} from 'react-router-dom';
import { Pages } from '../Constants';

const MenuTop = (props: any) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><b>KUKASEON</b></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink exact className="nav-link" activeClassName="btn btn-warning" to={Pages.home}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="btn btn-warning" to={Pages.about}>About</NavLink>
                </li>
                </ul>
                <span className="navbar-text">
                    <NavLink className="nav-link" activeClassName="btn btn-warning" to={Pages.login}>Login</NavLink>
                </span>
            </div>
            </nav>
        </div>
    );
}

export default MenuTop;