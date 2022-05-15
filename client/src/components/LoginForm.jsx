import React from "react";
import { useState } from "react";
import SignupForm from "./SignupForm";
import './LoginForm.css';


const LoginForm =()=>{

const emailChangeHandler=()=>{};
const emailBlurHandler=()=>{};
const formSubmissionHandler=()=>{};



return(
    <form className="form-body" onSubmit={formSubmissionHandler}>
        
            <div className="form-control">
                <h1>Login</h1>
                <label htmlFor="Email" class="form-label">Email address</label>
                <input type="email" id="email"  onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
                <label htmlFor="Password">Password</label>
                <input type="password"  id="password"/>
        <div className="form-actions">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
                <p className="signup">Don't have an account?<a href="/signup">Signup</a></p>
        
            </div>
        
    </form>
)
};


export default LoginForm;