import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { register, login } from '../Store/Action/UserAct';
import { Formik, Form, Field, ErrorMessage } from 'formik'
export default function Header() {
    const [isShowLogin, setIsShowLogin] = useState(false);
    const dispatch = useDispatch()
    const emailRedister = useRef('')
    const passwordRedister = useRef('')
    const [accRegister, setAccRegister] = useState({
        email: '',
        password: ''
    })
    // const emailLogin = useRef('')
    // const passwordLogin = useRef('')
    const handleClickLogin = () => {
        console.log("click");
        setIsShowLogin(!isShowLogin)
    }




    return (
        <>
            <header>
                <div className="nav__left">
                    <img src="../../img/LOGO.jpg" alt="" />
                    <h4><a href="">FLATSOME</a></h4>
                </div>
                <div className="nav__right">
                    <a onClick={handleClickLogin}>LOGIN</a>
                    <div className="price">CART / $<span>0.0</span></div>
                    <strong className="cart">0</strong>
                </div>
            </header>
            <div id="myModal" className="modal" style={isShowLogin ? { display: 'block' } : { display: 'none' }}>
                <span className="close" onClick={handleClickLogin}>×</span>
                <div className="modal-content">
                    <div className="content__left">
                        <h2>LOGIN</h2>
                        <Formik
                            initialValues={{
                                username: '',
                                password: ''
                            }}
                            onSubmit={data => {
                                console.log(data);
                                dispatch(login(data.username, data.password))
                                setIsShowLogin(false)
                            }}
                            render={propsFormik => (
                                <Form className="form__left" onSubmit={propsFormik.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <Field onChange={propsFormik.handleChange}
                                            name="username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Password</label>
                                        <Field onChange={propsFormik.handleChange}
                                            name="password" type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" /> <label>Remember Me</label>
                                    </div>
                                    <button className="btn--blue" type="Submit">LOGIN</button>
                                </Form>
                            )}
                        >

                        </Formik>

                    </div>
                    <div className="content__right">
                        <h2>REGISTER</h2>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            onSubmit={data => {
                                dispatch(register(data.email, data.password))
                                setIsShowLogin(false)
                            }}
                            render={propsFormik => (
                                <Form className="form__right" onSubmit={propsFormik.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <Field onChange={propsFormik.handleChange}
                                            name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Password</label>
                                        <Field onChange={propsFormik.handleChange}
                                            name="password" type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <button className="btn--blue" type="Submit">REGISTER</button>
                                </Form>
                            )}
                        >

                        </Formik>
                    </div>
                </div>
            </div>

        </>
    )
}