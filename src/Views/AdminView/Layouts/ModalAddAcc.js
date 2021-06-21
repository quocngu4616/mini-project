import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import './modalAdd.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik'
import { addProductAdminAct } from '../../../Store/Action/Admin/ProductAdAct';
import { createAdminAct } from '../../../Store/Action/Admin/Account';
import { useEffect } from 'react';



const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
}));
function ModalAddAcc({ open, handleClose }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(() => {
    }, [dispatch])
    return (
        <>
            {open ? (
                <Modal
                    style={{ zIndex: 0 }}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >

                    <Fade in={open}>
                        <div className="wrap-modal">
                            <h2 id="modal-header">Add Account Admin</h2>
                            <Formik
                                initialValues={{
                                    avata: null,
                                    name: "",
                                    username: "",
                                    email: "",
                                    password: "",

                                }}
                                onSubmit={data => {
                                    const admin_token = localStorage.getItem('currentAdmin') ?
                                        JSON.parse(localStorage.getItem('currentAdmin')).access_token
                                        : null;
                                    const config = {
                                        headers: { Authorization: `bearer ${admin_token}` }
                                    };
                                    const temp = { ...data }
                                    dispatch(createAdminAct(temp, config))
                                    handleClose()
                                }}
                                render={propsFormik => (
                                    <Form role="form" onSubmit={propsFormik.handleSubmit}>
                                        <div className="form-group">
                                            <div className="input-group">

                                                <input
                                                    onChange={e => { propsFormik.setFieldValue("avata", e.currentTarget.files[0].name) }}
                                                    type="file" name="avata" className="form-control input-sm" placeholder="Avata" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                                </div>
                                                <input
                                                    onChange={e => propsFormik.handleChange(e)}
                                                    value={propsFormik.values.name}
                                                    type="text" name="name" className="form-control input-sm" placeholder="Name" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-envelope" /></span>
                                                </div>
                                                <input
                                                    onChange={e => propsFormik.handleChange(e)}
                                                    value={propsFormik.values.username}
                                                    type="text" name="username" className="form-control input-sm" placeholder="Username" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-key" /></span>
                                                </div>
                                                <input
                                                    onChange={e => propsFormik.handleChange(e)}
                                                    value={propsFormik.values.email}
                                                    type="text" name="email" className="form-control input-sm" placeholder="Email" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-key" /></span>
                                                </div>
                                                <input
                                                    onChange={e => propsFormik.handleChange(e)}
                                                    value={propsFormik.values.password}
                                                    type="password" name="password" className="form-control input-sm" placeholder="password" />
                                            </div>

                                        </div>

                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-primary">Add</button>
                                            <button className="btn btn-danger">Close</button>
                                        </div>
                                    </Form>
                                )}
                            >
                            </Formik>


                        </div>


                    </Fade>
                </Modal>
            ) : null}


        </>
    )
}

export default ModalAddAcc
