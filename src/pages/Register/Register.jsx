import React, { useRef } from "react";
import Phone from "../../assets/images/sign.svg";
import google from "../../assets/images/google.svg";
import "./register.scss";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  let allData = [];
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const id = allData[allData.length - 1]?.id + 1 || 1;
    const data = {
      id: id,
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    allData.push(data);
    localStorage.setItem("user", JSON.stringify(allData));
    location.replace("/");
  };

  return (
 <>
 <Header/>
  <div className="">
  <div className=" all_sign">
      <div className="leftRegister">
        <img className="leftRegister_img" src={Phone} alt="icon" />
      </div>
      <div className="rightRegister">
        <h1 className="rightRegister_h1">Create an account</h1>
        <p className="rightRegister_p">Enter your details below</p>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <input ref={nameRef} placeholder="Name" type="text" />
          <input
            ref={emailRef}
            placeholder="Email or Phone Number"
            type="text"
          />
          <input ref={passwordRef} placeholder="Password" type="Password" />
          <button className="rightRegister_btn" type="submit">
            Create Account
          </button>
          <button className="rightRegister_btnG">
            <img src={google} alt="icon" />
            Sign up with Google
          </button>
        </form>
        <p className="rightRegister_link">
          Already have account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  </div>
  <Footer/>
 </>
  );
};
