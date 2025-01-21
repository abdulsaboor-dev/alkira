import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import eyeOpen from "../assets/image/show-pass.svg";
import logo from "../assets/image/recursion-logo-svg.svg";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/UserSlice";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    setToken(token);
    const response = await fetch("http://127.0.0.1:5173/login/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    console.log("data", data);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  const checkLoginStatus = async () => {
    const response = await fetch("http://127.0.0.1:5000/login/status", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const HandlerChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailEmpty(false);
    setErrorMessage("");
  };

  const HandlerChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordEmpty(false);
    setErrorMessage("");
  };

  const handlerSignIn = async () => {
    let isFieldEmpty = false;

    if (email == "") {
      isFieldEmpty = true;
      setEmailEmpty(true);
    }

    if (password == "") {
      isFieldEmpty = true;
      setPasswordEmpty(true);
    }

    if (isFieldEmpty == true) {
      setErrorMessage("Please fill the field details");
      return;
    }

    const obj = {
      email: "abdul saboor",
    };

    dispatch(setUser(obj));
    navigate("/dashboard");

    // try {
    //   // let url = "http://16.171.166.192/auth/login";
    //   // const config = {
    //   //     headers: {
    //   //         'Content-Type': 'application/json'
    //   //     },
    //   // };
    //   // const body = {
    //   //     "email": email,
    //   //     "password": password
    //   // }
    //   // if(email != "" && password != "") {
    //   //     const response = await axios.post(url,body,config);
    //   //     const userDetails = response.data;
    //   //     dispatch(setUser(userDetails));
    //   // }
    // } catch (error) {
    //   console.error(error);
    //   setEmailEmpty(true);
    //   setPasswordEmpty(true);
    //   setEmail("");
    //   setPassword("");
    //   setErrorMessage("Please enter correct login credentials");
    // }
  };

  const EnterKeyPress = (e) => {
    if (e.key == "Enter") {
      handlerSignIn();
    }
  };

  return (
    <>
      <section>
        <div className="login-container">
          <div className="login-container-sec-one">
            <div className="login-one-sec-line"></div>
            <div className="login-content-container">
              <img src={logo} className="large-logo mb-5" />
              <p className="subtitle">
                Transform enterprise data into non-obvious insignts, instantly
              </p>
            </div>
          </div>
          <div className="login-container-sec-two">
            <div className="login-form-line"></div>
            <div className="form-container">
              <h4 className="mb-4">Nice to see you again</h4>
              <div className="mb-3">
                <label
                  htmlFor="login"
                  className="form-label small-text mb-1 ms-3"
                >
                  Login{" "}
                  <span className="err-text text-danger">{errorMessage}</span>{" "}
                </label>
                <input
                  type="text"
                  className={`form-control login-field ${
                    emailEmpty ? "border-danger" : ""
                  }`}
                  id="login"
                  value={email}
                  onChange={HandlerChangeEmail}
                  placeholder="Email or phone number"
                />
              </div>
              <div className="mb-3 position-relative">
                <label
                  htmlFor="password"
                  className="form-label small-text mb-1 ms-3"
                >
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className={`form-control login-field ${
                    passwordEmpty ? "border-danger" : ""
                  }`}
                  value={password}
                  onChange={HandlerChangePassword}
                  onKeyDown={EnterKeyPress}
                  id="password"
                  placeholder="Password"
                />
                <span
                  className="eye-icon position-absolute"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <img src={eyeOpen} className="eye-open" />
                  ) : (
                    <img src={eyeOpen} className="eye-open" />
                  )}
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check form-switch d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label
                    className="form-check-label small-text"
                    htmlFor="rememberMe"
                  >
                    Remember Me
                  </label>
                </div>
                <div>
                  <p className="small-text text-blue mb-0">Forget password? </p>
                </div>
              </div>
              <div className="mb-4">
                <button
                  className="btn w-100 signIn-btn"
                  onClick={handlerSignIn}
                >
                  Sign in
                </button>
              </div>
              <hr />
              <div className="my-4">
                <div className="card">
                  <GoogleOAuthProvider clientId="876795760642-8d98jeq088u2tni81lc0220k79pcd2nq.apps.googleusercontent.com">
                    <GoogleLogin
                      onSuccess={handleSuccess}
                      onError={handleError}
                    />
                  </GoogleOAuthProvider>
                </div>
              </div>
              <div>
                <p className="text-center subtitle">
                  Don't have an accounts?{" "}
                  <span className="text-blue">Sign up now</span>
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};
