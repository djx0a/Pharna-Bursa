import React from "react";
import './headerTop.css';
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

const HeaderTop=()=>{
    return (
        <div class="header-container">
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-4 col-md-5 hidden-xs"> 
             
              <div class="welcome-msg ">Wishlist (0) </div>            
            </div>
            <div class="headerlinkmenu col-lg-8 col-md-7 col-sm-8 col-xs-12">
              <div class="links">
                    <div class="login"><a href="/login"><i class="fa fa-unlock-alt"></i><span class="hidden-xs">Log In</span></a></div>
                    <div class="signup"><a href="/signup"><i class="fa fa-unlock-alt"></i><span class="hidden-xs">Sign up</span></a></div>

              </div>
            </div>
         
        </div>
      </div>
      </div>
      </div>
    )
}

export default HeaderTop;