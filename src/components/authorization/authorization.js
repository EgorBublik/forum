import React, {Component} from 'react';
import './authorization.css'

class Authorization extends Component {
    render() {
        return (
            <div className="authorization">
                <form className="form-signin">
                    <h2 className=" mb-3 font-weight-normal">Авторизация</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required=""
                           autoFocus=""/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                           required=""/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
                    <p className="mt-5 mb-3 text-muted">© 2020</p>
                </form>
            </div>
        );
    }
}

export default Authorization;