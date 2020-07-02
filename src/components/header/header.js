import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link to='/' className="navbar-brand"><i className="fab fa-forumbee"></i> Форум</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/' className="nav-link">Главная <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <Link to='/authorization'><button type="button" className="btn btn-outline-success">Авторизация</button></Link>
                            <Link to='/registration'><button type="button" className="btn btn-outline-primary">Регистрация</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
)
}

export default Header;


