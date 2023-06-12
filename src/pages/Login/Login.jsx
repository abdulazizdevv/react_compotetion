import React, { useRef } from "react";
import Phone from "../../assets/images/sign.svg";
import google from "../../assets/images/google.svg";
import "./login.scss";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const localData = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    localData.forEach((el) => {
     if(el.password == data.password && el.email == data.email){
      location.replace("/")
     } else{
      console.log("bad");
     }
    });
  };

  return (
<>
<Header/>
<div className="">
<div className=" all_sign">
      <div className="leftLogin">
        <img className="leftLogin_img" src={Phone} alt="icon" />
      </div>
      <div className="rightLogin">
        <h1 className="rightLogin_h1">Log in to Exclusive</h1>
        <p className="rightLogin_p">Enter your details below</p>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <input
            ref={emailRef}
            placeholder="Email or Phone Number"
            type="text"
          />
          <input ref={passwordRef} placeholder="Password" type="Password" />
          <div className="all_btn">
            <button className="rightLogin_btnLogin" type="submit">
              Log In
            </button>
            <Link className="rightLogin_linkLog" to="/register">
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
</div>
<Footer/>
</>
  );
};
