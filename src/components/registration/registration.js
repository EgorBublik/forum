import React, {Component} from 'react';
import './registration.css'
// import AddPetBtn from "../add-pet-btn";
import {Formik} from 'formik'
import * as yup from 'yup'

class Registration extends Component {
    render() {
        const validationSchema = yup.object().shape({
            name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
            secondName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
            username: yup.string().typeError('Должно быть строкой').required('Обязательно'),
            email: yup.string().typeError('Должно быть строкой').required('Обязательно'),
            password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают')
        })
        return (
            <div>
                <Formik
                    initialValues={{
                        name: '',
                        secondName: '',
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        country: ''
                    }}
                    validateOnBlur
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                    validationSchema={validationSchema}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                        <div className={'registration container col-7 form'}>
                            <h1 className="mb-3">Регистрация</h1>

                            <div className="row">
                                <div className="firstName col-md-6 mb-3">
                                    <label htmlFor={'firstName'}>First Name</label>
                                    <input className={'input form-control'}
                                           type={'text'}
                                           name={'name'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.name}/>
                                    {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}
                                </div>

                                <div className="secondName col-md-6 mb-3">
                                    <label htmlFor={'lastName'}>Last Name</label>
                                    <input className={'input form-control'}
                                           type={'text'}
                                           name={'secondName'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.secondName}/>
                                    {touched.secondName && errors.secondName && <p className={'error'}>{errors.secondName}</p>}
                                </div>

                                <div className="username col-12 mb-3">
                                    <label htmlFor={'username'}>Username</label>
                                    <input className={'input form-control'}
                                           type={'text'}
                                           name={'username'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.username}/>
                                    {touched.username && errors.username && <p className={'error'}>{errors.username}</p>}
                                </div>

                                <div className="email col-12 mb-3">
                                    <label htmlFor={'email'}>Email</label>
                                    <input className={'input form-control'}
                                           type={'text'}
                                           name={'email'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.email}/>
                                    {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
                                </div>

                                <div className="password col-12 mb-3">
                                    <label htmlFor={'password'}>Password</label>
                                    <input className={'input form-control'}
                                           type={'password'}
                                           name={'password'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.password}/>
                                    {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
                                </div>

                                <div className="confirmPassword col-12 mb-3">
                                    <label htmlFor={'confirmPassword'}>Confirm password</label>
                                    <input className={'input form-control'}
                                           type={'password'}
                                           name={'confirmPassword'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.confirmPassword}/>
                                    {touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}
                                </div>

                                <div className="country col-12 mb-3">
                                    <label htmlFor={'country'}>Country</label>
                                    <input className={'input form-control'}
                                           type={'text'}
                                           name={'country'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.country}/>
                                    {touched.country && errors.country && <p className={'error'}>{errors.country}</p>}
                                </div>
                            </div>


                            <button className={'btn btn-primary'} disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type={'submit'}>Отправить
                            </button>
                        </div>
                    )}
                </Formik>
            </div>
        )
    }
}

// class Registration extends Component {
//     render() {
//         return (
//             <div className="registration container">
//                 <div className="registration container col-10">
//                     <h1 className="mb-3">Регистрация</h1>
//                     <form>
//                         <div className="row">
//                             <div className="col-md-6 mb-3">
//                                 <label htmlFor="firstName">First name</label>
//                                 <input type="text" className="form-control" id="firstName" placeholder=""
//                                        required=""/>
//                                 <div className="invalid-feedback">
//                                     Valid first name is required.
//                                 </div>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <label htmlFor="lastName">Last name</label>
//                                 <input type="text" className="form-control" id="lastName" placeholder=""
//                                        required=""/>
//                                 <div className="invalid-feedback">
//                                     Valid last name is required.
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="mb-3">
//                             <label htmlFor="username">Username</label>
//                             <div className="input-group">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text">@</span>
//                                 </div>
//                                 <input type="text" className="form-control" id="username" placeholder="Username"
//                                        required=""/>
//                                 <div className="invalid-feedback">Your username is required.</div>
//                             </div>
//                         </div>
//
//                         <div className="mb-3">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
//                             <div className="invalid-feedback">
//                                 Please enter a valid email address for shipping updates.
//                             </div>
//                         </div>
//
//                         <div className="mb-3">
//                             <label>Password</label>
//                             <input type="password" className="form-control" id="password" placeholder="Belarus"
//                                    required=""/>
//                         </div>
//
//                         <div className="mb-3">
//                             <label>Country</label>
//                             <input type="text" className="form-control" id="сountry" placeholder="Belarus"
//                                    required=""/>
//                         </div>
//
//                         <AddPetBtn/>
//
//                         <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

export default Registration;