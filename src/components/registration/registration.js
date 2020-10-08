import React, {Component} from 'react';
import './registration.css'
import AddPetBtn from "../add-pet-btn";

class Registration extends Component {
    render() {
        return (
            <div className="registration container">
                <div className="registration container col-10">
                    <h1 className="mb-3">Регистрация</h1>
                    <form className="needs-validation" noValidate="">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder=""
                                       required=""/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder=""
                                       required=""/>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" id="username" placeholder="Username"
                                       required=""/>
                                <div className="invalid-feedback">Your username is required.</div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Belarus"
                                   required=""/>
                        </div>

                        <div className="mb-3">
                            <label>Country</label>
                            <input type="text" className="form-control" id="сountry" placeholder="Belarus"
                                   required=""/>
                        </div>

                        <AddPetBtn/>

                        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;