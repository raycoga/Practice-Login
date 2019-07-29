import React, {} from 'react'
import {Navbar,Container,Row, Col } from 'react-bootstrap'
import { Button } from 'antd';
import '../style/Login.css';
import logo from '../style/images/logo.png'
import brand from '../style/images/brand.png'
export default function Login(props){
const {data,handleSubmit}= props
    return(
        <div className="Login">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                    <img src={logo} style={{width:'100%'}}></img>
                    </div>
                    <div className="col-md-6 ">
                        <div className="card h-100 p-4">
                            <div className="row justify-content-center">
                                <img src={brand} alt="Go At's brand logo" style={{width:'80%'}}className="mb-5"></img>
                                <div className="col-md-6">
                                <input className="form-control" type="text" placeholder='Username' ></input>
                                </div>
                                <div className="col-md-6">
                                <input className="form-control" type="text" placeholder='Password' ></input>
                                </div>
                                
                                <button className="btn btn-primary form-control m-3">entrar</button>
                                <div className="col-md-6">
                               
                                </div>
                                <div className="col-md-6 text-right">
                                    Don't have an account? <a href='#'>Register</a> 
                                </div>
                    
                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>

            </div>
    )
}