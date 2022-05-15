import React from "react";


const SignupForm=()=>{

    const firstNameChangeHandler=()=>{};

    const firstNameBlurHandler=()=>{};

    const lastNameChangeHandler=()=>{};

    const LastNameBlurHandler=()=>{};

    const emailChangeHandler=()=>{};
    
    const emailBlurHandler=()=>{};
    
    const formSubmissionHandler=()=>{};




    return(
    <form className="form-body" onSubmit={formSubmissionHandler}>
    <div className="form-control">
        <h1>Signup</h1>
        <label htmlFor="name" class="form-label">First Name</label>
        <input type="name" id="fname"  onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>

        <label htmlFor="name" class="form-label">Last Name</label>
        <input type="name" id="lname"  onChange={lastNameChangeHandler} onBlur={LastNameBlurHandler}/>

        <label htmlFor="Email" class="form-label">Email address</label>
        <input type="email" id="email"  onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        <label htmlFor="Confirm Email" class="form-label">Confirm Email address</label>
        <input type="email" id="email"  onChange={emailChangeHandler} onBlur={emailBlurHandler}/>

        <label htmlFor="Password">Password</label>
        <input type="password"  id="password"/>
        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input type="password"  id="password"/>

    <div className="form-actions">
        <button type="submit" class="btn btn-primary">Signup</button>
    </div>
    </div>

</form>
)
};

export default SignupForm;