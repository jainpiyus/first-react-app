import React, { useState } from 'react';

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        console.log('inside login');
        if (email === "admin@gmail.com" && password === "123456") {
            console.log('login successfull');
            props.loginSuccess();
        } else {
            alert('Email or password is invalid');
        }
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <form onSubmit={login}>
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="staticEmail" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputPassword" value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
