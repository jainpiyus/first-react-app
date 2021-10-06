import React from 'react';
import { Link, Router } from 'react-router-dom';
import './Header.css';
import Login from '../login/Login';
import { connect } from 'react-redux';
import { increaseCartCountAction } from '../../store/store';

function Header(props) {
    return (
        <div>
            <nav className="container navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2/2235.png"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/"> <button className="btn btn-light">Home</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products"><button className="btn btn-light">Products</button></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className="ms-3">
                            <span>{props.cartCount} Cart</span>
                            {props.loggedIn ? <span className="mx-3" >Hi! Admin</span> : <button className="ms-3 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>}
                        </div>

                    </div>
                </div>
            </nav>
            <Login loginSuccess={props.login} />


        </div >

    )
}


const mapStateToProp = (state) => {
    return {
        cartCount: state
    }
}


export default connect(mapStateToProp)(Header);